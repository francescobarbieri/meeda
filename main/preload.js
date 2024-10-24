const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  insertData: (data) => ipcRenderer.send('insert-data', data),
  getData: () => ipcRenderer.invoke('get-data'),
});