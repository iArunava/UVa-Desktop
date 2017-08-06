const {app, BrowserWindow} = require ('electron');
const path = require ('path');
const url = require ('url');

let win;

function createUVaWindow () {
    
    win = new BrowserWindow ({width: 800,
                              height: 600});

    win.loadURL (url.format ({
        
        pathname: path.join (__dirname, '/app/html/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.on ('closed', () => {
        win = null;
    });
};

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
