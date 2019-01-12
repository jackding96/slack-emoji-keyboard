const electron = require('electron');
const { app, BrowserWindow, globalShortcut } = require('electron');

function createWindow () {
  globalShortcut.register(':', () => {
    // Create the browser window.
    win = new BrowserWindow({ width: 300, height: 300, x: electron.screen.getCursorScreenPoint().x, y: electron.screen.getCursorScreenPoint().y });

    console.log(electron.screen.getCursorScreenPoint());   
    
    // and load the index.html of the app.
    win.loadFile('index.html');
  })
}

app.on('ready', createWindow);