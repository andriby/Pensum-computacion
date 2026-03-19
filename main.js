const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

const dataPath = path.join(app.getPath('userData'), 'perfil.json');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // Hides the default menu bar
  win.setMenuBarVisibility(false);
  win.loadFile('pensum.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('load-profile', (event) => {
  try {
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      event.returnValue = JSON.parse(data);
      return;
    }
  } catch (error) {
    console.error('Error loading profile:', error);
  }
  event.returnValue = null;
});

ipcMain.on('save-profile', (event, profile) => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(profile, null, 2));
  } catch (error) {
    console.error('Error saving profile:', error);
  }
});

ipcMain.on('clear-profile', () => {
  try {
    if (fs.existsSync(dataPath)) {
      fs.unlinkSync(dataPath);
    }
  } catch (error) {
    console.error('Error clearing profile:', error);
  }
});
