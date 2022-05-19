const { ipcMain, dialog } = require("electron");
const { spawn } = require("child_process");
const { cloneTemplate } = require("./down-template");
const {
  getRouteJsonContent,
  editRouteContent,
  writeRouteJson,
  writeRouteJs,
  writeDefaultComponent,
} = require("./set-route.js");

// 打开目录选择
ipcMain.handle("open-directory-for-project-path", async () => {
  const path = dialog.showOpenDialogSync({
    properties: ["openDirectory"],
    message: "选择创建项目的路径",
  });
  return path;
});

// 下载项目
ipcMain.on("clone-template", async (event, data) => {
  try {
    await cloneTemplate(data);
    event.reply("data", "> " + "download success ...");
    subprocess = spawn("npm install", {
      cwd: `${data.projectPath}/${data.projectName}`,
      shell: true,
      stdio: ["pipe", "pipe", "pipe", "ipc"],
    });
    subprocess.stdout.on("data", (data) => {
      event.reply("data", "> " + data.toString());
    });

    subprocess.stderr.on("data", (data) => {
      event.reply("data", ">> " + data.toString());
    });

    subprocess.on("close", (code) => {
      event.reply("data", ">>> " + code);
    });
  } catch (error) {
    console.error(error);
  }
});

// 新建路由
ipcMain.handle("add-route-emitter", (event, data) => {
  console.log(data);
  try {
    // 获取原始路由信息
    const content = getRouteJsonContent(
      `${data.projectData.projectPath}/${data.projectData.projectName}/src/router/index.json`
    );
    // 创造新路由信息
    const routeList = editRouteContent(content, data.routeData);
    // 创建默认组件
    writeDefaultComponent(
      `${data.projectData.projectPath}/${
        data.projectData.projectName
      }/src/pages/${data.routeData.componentName.toLowerCase()}`,
      data.routeData
    );
    // 创建路由json
    writeRouteJson(
      `${data.projectData.projectPath}/${data.projectData.projectName}/src/router/index.json`,
      routeList
    );
    // 创建路由js
    writeRouteJs(
      `${data.projectData.projectPath}/${data.projectData.projectName}/src/router/index.js`,
      routeList
    );
    return true;
  } catch (error) {
    console.error("add-route-emitter is error", error);
    return false;
  }
});
