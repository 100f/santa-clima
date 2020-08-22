import { app, BrowserWindow } from 'electron';
import { join } from 'path';
import * as url from 'url';

const inDevelopment = process.env.NODE_ENV === 'development' || false;

let mainWindow: BrowserWindow | null = null;

const invokeWindow = async () => {
  mainWindow = new BrowserWindow({
    center: true,
    focusable: true,
    backgroundColor: '#222831',
    width: 879,
    webPreferences: {
      devTools: false,
      nodeIntegration: true
    }
  });

  if (inDevelopment) {
    await mainWindow.loadURL('http://localhost:4000');
  }
  else {
    await mainWindow.loadURL(
      url.format({
        pathname: join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  };
  mainWindow.show();
};

app.on('ready', invokeWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit(); //Removes app from memory in macOS environment
  }
});

app.allowRendererProcessReuse = true;
