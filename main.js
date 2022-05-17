const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const cp = require("child_process");
const isDev = require("electron-is-dev");

app.on("ready", () => {
  let mainWindow = new BrowserWindow({
    width: 1024,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  const URL = isDev ? "http://localhost:3000/" : "";

  mainWindow.loadURL(URL);
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  // 事件集中处理
  require("./service/event-emitter");
});
