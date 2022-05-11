const { app, BrowserWindow, ipcMain } = require("electron");
const isDev = require("electron-is-dev");
const { prvView } = require("./service/prv-view");

app.on("ready", () => {
  let mainWindow = new BrowserWindow({
    width: 1024,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const URL = isDev ? "http://localhost:3000/" : "null";

  mainWindow.loadURL(URL);
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  // 打开预览功能
  ipcMain.on("open-prv-view", (event, data) => {
    prvView(data);
  });
});
