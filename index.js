const {app, BrowserWindow, ipcMain} = require ('electron');
const path = require ('path');
const url = require ('url');

let win;
let programWin;

function createUVaWindow () {
    
    win = new BrowserWindow ({width: 800,
                              height: 600,
                              minWidth: 800,
                              minHeight: 600,
                              icon: "./res/img/UVa-Desktop.png"});

    win.loadURL (url.format ({
        
        pathname: path.join (__dirname, '/app/html/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on ('closed', () => {
        win = null;
    });
};

function createProgramWin (programid) {
    
    programWin = new BrowserWindow ({width: 800,
                                     height: 1000,
                                     title: programid.toString()});

    programWin.loadURL (url.format ({
        
        pathname: path.join (__dirname, '/PDFs/' + programid + '.html'),
        protocol: 'file:',
        slashes: true
    }));

    programWin.on ('closed', () => {
        programWin = null;
    });
};

ipcMain.on ('show-program', (event, arg) => {

    if (!programWin) createProgramWin(arg);

});

app.on ('ready', createUVaWindow);

app.on ('window-all-closed', () => {
    
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on ('activate', () => {
    
    if (win == null) {
        createUVaWindow ();
    }
});
