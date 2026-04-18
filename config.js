const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Sabir-Botz~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0RkTHpmOU82MzJrQjBqbW1GUFVKSUp5Z0Z3Vzd2dWx0UTNJdnFZU0VtVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0l5RU0yTUYwbTFMZTFvSERFeFlDYyt2dDZRRVppaGx0cHk0VFNJQ1lHTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQ3pPSUtkZVBYaHFGVXE0UG96RVcvenpJL3lJRktSeW1ScGZleWVuYWtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUMEhlbDRZREMrQlF3VkdjaTdHSkh4TUduRGpWU1B6UE9pc0RsTi9ZVEFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdHOUxNd29oZThnRklUUTllNHdkM1hBQkk4WVlJa2Q1dGhjblFxeUI1R1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllZek11L1BONXNFd1h4dkRuYWd2a25rcTQrbmlBNWxnU0l6b3dYaVJYbDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUNIS1l6cmIxcmRoRDdKb29KK212dTRlUDB1SzN4THdtWnZFK0M4WkVuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEJNUVFISDlxc0VLUWtlL2FkZ3RPcDMwT21BTTJEOG1qQ0MrTUM3djRrZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpNOE5mT1NORGtndFUxMm5hTVd2cER5V1JRcEd6MTQ0Ly9vUnRYbXdyMzBOaXFQUWF6VGc1VmZGWXdtVm8zQ2pHOTBPTzJmalhUdi9xMmNWVkplZ0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA4LCJhZHZTZWNyZXRLZXkiOiIwL1l0b1VJaHc4K2xMU0NFYnM1U3pzQ2oyeUxUWm1JZGpyRFNJZWRaOGNZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjEyR1dXUUVDIiwibWUiOnsiaWQiOiI5MjM0ODI5MDU4MzI6MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjExNTcxMTM4NTA1NTM4NjoyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTldSZ0ljREVMRHZpYzhHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVmFhWmkvc0JYWDFVQW9DSEhlVDEyaUxDMU5iNlk0d2hkcWdkNDdVdVNuMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSHJaU281ak9Pdy8vellwT3NvanBqdGtvWEtGemlCRDVoR0JpU2pOQXRMOWtaeGtrS2ZQRGRkQUpvZnRqb0g0S0xDNkQ4b1lFWHk3ci9XdmFmdUxGQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjgrbUZ0ZEdaU1E1R0JLbTc0bW5sSVI4QXhhaXo0blpOKzRKYlpsOGhTQTI0b2JibVdacldCQjVKS216a0U5aWZXbnRkaVUyanFyOHM2SmY5WG9qUUR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTE1NzExMzg1MDU1Mzg2OjJAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZXbW1ZdjdBVjE5VkFLQWh4M2s5ZG9pd3RUVyttT01JWGFvSGVPMUxrcDkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBTUlDd2dDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc3NjQ0OTQ2M30=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Sabir botz 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Sabir botz",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Sabir botz",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923482905832",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*SabirMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ sabirMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923482905832",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
