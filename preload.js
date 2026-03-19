const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  loadProfile: () => ipcRenderer.sendSync('load-profile'),
  saveProfile: (data) => ipcRenderer.send('save-profile', data),
  clearProfile: () => ipcRenderer.send('clear-profile')
});
