const { app, BrowserWindow, Menu } = require('electron');
const path = require('path')

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        title: 'Believers Guide',
        width: 1500,
        height: 800,
        icon: path.join(__dirname, './e.ico'),
    });

    Menu.setApplicationMenu(null);

    mainWindow.loadURL('http://localhost:3000/');
}

app.whenReady().then(createMainWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});
