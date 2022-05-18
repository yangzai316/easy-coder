const { ipcMain, dialog } = require("electron");
const { spawn } = require("child_process");
const { cloneTemplate } = require("./down-template");
const {
  getRoute,
  editRouteContent,
  writeContentToProject,
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
  try {
    const content = getRoute(
      `${data.projectData.projectPath}/${data.projectData.projectName}/src/router/index.json`
    );
    const newContent = editRouteContent(content, data.routeData);
    writeContentToProject(
      `${data.projectData.projectPath}/${data.projectData.projectName}/src/router/index.json`,
      newContent
    );
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
});
