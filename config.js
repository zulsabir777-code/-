const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU0yY0R6K0lLeEQ5bEpZSUpHM1h4Vi8zZDUrYzE0czJLd1dWUFh1ZzVWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNXE0M0xtRzlKNExja0tjZUNBVDdqaEg2akhKVGhTMmhQaVkrb292clowST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4T1VvdHNYemdkRHB1MzBXbTlEaC9JNWUzeW9mWFIyWEoxL0dCQ3V6UlhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJudi84MlpwbDM4ejdCNmpBSnJBK0xuU2FTb2cxYXlkYjdISEYvSHBpMlNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1DZUkvVk1nUFVvTENWclpYN3VqazZEcDRRVGxRd1Y1YmVhcHBkSzNkMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtYb2hOSjY2dEROcVpCUWpmNDVQQWVwaXNOQWdkdFVQNjJVK25NbW83alk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkxuRENJT1hoRmMwY0g5cjJXUmlhUGNqMVFwUUZOQzUxS1pjVkdsSGJYcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1BLZkN5aTk4ZzFOWVpXQW03Z3ZYWGVPUFJFeHo5SitEUXlNNlR2M0tBcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdCckREcjlhNWJYbDZsallZcWs5VDdGekc5dDBBclREb2wyM3drZlBZV0ZBT0lLb0JZMlYySVBpdTZqdGdhUGZFYzNrZVNwZjhTekREcTZGMUJJamlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDAsImFkdlNlY3JldEtleSI6Im5rREc3NUhNM05wcUlRc044dU4xWUN1azNjWkpKR0dQRGdNUGVNK1VSVWc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiN0dCNTNTRUIiLCJtZSI6eyJpZCI6IjkyMzQ4MjkwNTgzMjozQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE1NzExMzg1MDU1Mzg2OjNAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNONlJnSWNERU0rTmpjOEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWYWFaaS9zQlhYMVVBb0NISGVUMTJpTEMxTmI2WTR3aGRxZ2Q0N1V1U24wPSIsImFjY291bnRTaWduYXR1cmUiOiJ6dUYyWVRIclZPVWZ0alNweWFNMUh5d2ZTVFUxamMrb0VBTXpPdWtVM3pNbms1M01Vc0hnTllqMnpPTUErdFVWTTA3eU1lclcvTUFBN3lGTGxlOUJDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiamFVbm83YnYwb2xsdFBWL2tQL1lmUUd0b3pWalNNOFlEaUtyQkZuTmFYRE1acFFOa2lraEFKVEQ1MWxmTkx1OUVvRk1BQXM3OWVBZ3pvQ3FyMllnamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMTU3MTEzODUwNTUzODY6M0BsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVldtbVl2N0FWMTlWQUtBaHgzazlkb2l3dFRXK21PTUlYYW9IZU8xTGtwOSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FNSUN3Z0MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc2NTAyNDg2fQ==",
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
