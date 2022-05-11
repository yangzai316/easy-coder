const { app, BrowserWindow } = require("electron");
const isDev = require("electron-is-dev");

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 1024,
    height: 680,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const URL = isDev ? "http://localhost:3000/" : "null";

  mainWindow.loadURL(URL);
});
