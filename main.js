/*
 * @Author: xinghe
 * @LastEditors: xinghe
 * @Date: 2020-12-30 09:16:05
 * @FilePath: /electron-test/main.js
 * @LastEditTime: 2020-12-31 17:19:32
 */
const { app, BrowserWindow } = require('electron');
app.on('ready', () => {
  let main = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: true
    }
  })
  main.loadFile('index.html')
  let secondMain = new BrowserWindow({
    width: 400,
    height: 300,
    webPreferences: {
      nodeIntegration: true
    },
    parent:main
  })
  secondMain.loadFile('second.html')
})