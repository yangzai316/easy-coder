const { app, BrowserWindow, ipcMain } = require("electron");
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

  const URL = isDev ? "http://localhost:3000/" : "null";

  mainWindow.loadURL(URL);
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  ipcMain.on("open-prv-view", () => {
    console.log("123123");
  });
});
