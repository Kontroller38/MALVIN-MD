const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
///=================When editing, do not accidentally delete anything !!MAIN-CONFIG=================================
SESSION_ID: process.env.SESSION_ID || "aFM3kRBD#Qq2VWWEgn0b8Ns_yGlllKXXf-G0EBEpRCpRePgf22IA",  // ADD Your Session Id 
MODE: process.env.MODE || "public",  // Add Your Bot Mode (groups/privet/public)
PREFIX: process.env.PREFIX || ".",   // Add Your Custom Prefix 
OWNER_REACT: process.env.OWNER_REACT || "true", //add true or false
BOT_NAME: process.env.BOT_NAME || "Kontroller",
///=================When editing, do not accidentally delete anything !!CUSTOM-SETTING-CONFIG=====================
AUTO_VOICE: process.env.AUTO_VOICE || "false", //add true or false
AUTO_STICKER: process.env.AUTO_STICKER || "false", //add true or false
AUTO_REPLY: process.env.AUTO_REPLY || "false", //add true or false
ANTI_LINK: process.env.ANTI_LINK || "true", //add true or false
ANTI_BAD: process.env.ANTI_BAD || "true", //add true or false
FAKE_RECORDING: process.env.FAKE_RECORDING || "true", //add true or false
AUTO_REACT: process.env.AUTO_REACT || "true", //add true or false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true", //add true or false
///=================When editing, do not accidentally delete anything. !!API-CONFIG=================================
///===============================================DONT-CHANGE-API=========================================
GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
///=================When editing, do not accidentally delete anything !!ALIVE-CONFIG================================
ALIVE_MSG: process.env.ALIVE_MSG || "How far na Pablo dey talk any update", //add alive msg
};
