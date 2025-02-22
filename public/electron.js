const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    // const startURL = isDev
    //     ? "http://localhost:3000" // Development mode
    //     : `file://${path.join(__dirname, "build", "index.html")}`;
    const startURL = `file://${path.join(__dirname, "index.html")}`;
    console.log("Loading URL:", startURL); // Log the path
    mainWindow.loadURL(startURL);
    // mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}
app.on('ready', createWindow);
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});