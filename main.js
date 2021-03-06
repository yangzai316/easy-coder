const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");
const electronStore = require("electron-store");
const store = new electronStore();
app.on("ready", () => {
  let mainWindow = new BrowserWindow({
    width: 1024,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
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
