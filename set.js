




const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURSbjN5MFY4b3M1S21SQzRSQnlnR1ZxR0MzQnhKS1dZT09QTkhlQUgyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUovRzZkaGNUSGt0SkM4TnFwRDF4SUhXR2lXWjBOWWdjWldPZ2I2U2hGdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZSHhwN3N6cnI4bE1mdElSL0JkbklrUmhLUFhmbU1CWnBuTDJITm5ybkZVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4eElSejFiaFVmbFZtSkprM3piNERkR01abXhzTGhoUE15RlV6RGVLRTJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVGMzY4S1ZpRnBXdStEQXpyZElING55d2JxdXlPbFRqSnBNR1d2TTd3RlE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ill4eTNFKytqTkJDejRtalNUUklhbU5kS21YUENqck9YNFNmQzZGWXNjQTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUpwTG9JTlE2K1Jna2hWNk4weERtQU1pWHhRV2VjUkw5Q0I4dXRRSlVGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUEwzaDloMDliNUFaaUNobHVCQVMrWUIxaEYrM1VOcnR1V1JzMFZabWVGST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldCTHh4bDZwbHRGM01iYncvYlBtaDFsVDhSWGJESFh0SFR2TnhBYk93MVdPdTE5Qyt0QUswVW0xVjZtYVljOWY3UThnbk1xSWtqWEo2WDl2SEpDb2d3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEzLCJhZHZTZWNyZXRLZXkiOiJFZ3J0VXNRcFMrbUFUekQ0L1d5OXZCZ3RkaVZGMUcyb1lZRzhqZzI2T1VjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc0Mzg0OTQxNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCNTc1MDgyN0MyQkJGN0U2ODI3RTFBRDQyNzQzMDc0QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ4MjkzMjA5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3NDM4NDk0MTRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODY3NkE0RjkxM0I5QkZCRTRGRTAyMkI5QjVCMTdGRjQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0ODI5MzIxMH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUlJXREc3RVciLCJtZSI6eyJpZCI6IjI1NDc0Mzg0OTQxNDoxMEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjI4OTk1ODQ0MzEzMTI1OjEwQGxpZCIsIm5hbWUiOiJDYXJsIPCfpbDwn5idIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJQzZocW9HRU1TczA4RUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4N1lYYkpKLzJ0bnpab1NFcWpnT0IzcHdlOG8zUndyZGVOOUJDdmhnYnlzPSIsImFjY291bnRTaWduYXR1cmUiOiJBdjgvOHlsdG1nQVdUN1krdE9nT0dwUVVqeHdsdE1kc3FQc1dFaG1ONXlkVWkyUjV0VlhVRFJVeFFXb2htWjErbmlYLzI3SzcwcGtKQjc2VnpzYllBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiVkYrSU1TZ1RCM24zVitNNGlKT2lwKzhBTFNtc3o5YStab2FJTGZrTStzaWs5OVhxcEJkdGNmb2pxSENLVkdsVjNHR1NOeEZUZmJucTJ0QWVwLzZJZ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3NDM4NDk0MTQ6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZk8yRjJ5U2Y5clo4MmFFaEtvNERnZDZjSHZLTjBjSzNYamZRUXI0WUc4ciJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ4MjkzMjAyLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS1JWIn0=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "254710772666",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  CHATBOT : process.env.CHATBOT || "yes",
                  AUTO_BIO : process.env.AUTO_BIO || "yes",
                  AUTO_REACT : process.env.AUTO_REACT || "yes",
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
