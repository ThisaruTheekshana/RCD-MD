//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94717267602";
global.owner = process.env.OWNER_NUMBER || "94717267602";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
 eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0ZYSGlleEJtWTZGL1d4RFlGcTlJSjdPNFVYMm5HTXFCaXFwTm8yeE9tUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWlTc2hlSU9MTFkya0pjV3A1OEVWcnZlVEtWYXRPQVhYMFAxZmJDcUNCcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTFBPcjMzdW9yRGtZdCtyWjRqMmYzSkZINldXbzM2NVlTQTRnT0VHSVhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwWEIrWXhkQWkrUWczcmNYc2thcWVHa0pSZzh2aU1JM0FWRFk0ZGNWQWpBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndFRTNFRHRpNFMzN1Rkc3RrTmNob3V5RVpjRUFEVjdMbDZ1dGtwTEloMHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImUwWFlVR1hMZjducGRtQ0V3OVFJU0o5WmJMMTVYQyt2WmJRVmpBM3Zya1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlGT3hUYi9pRWYwd2RnczBIV1BVeFVJS3BKeDU1eHUybDJrbDNyU0JHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVdzUUZTdjVkOVE2SWwwT2tEYmlhcThBRkpsTWZVV3dRLzdscXlRWkIzQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9rTGZycTBSQWlLZVFJdnlONCtQemh1S3VCYWxySUg3YWt6TTFUWFRkUzBicVU5QVQzbENrV2FOTU1MRHlaYXRZQVcxcTZXVkYwdTAvR0xveWlKTWlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6Ik52MndqVm14T2FQMDNCUlBuS3h3UmJHZGRYd1VySTJuUG8ycXgwTXY3eDQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdyMFcxd3RLUVBLR3d6THJ1WHc1TEEiLCJwaG9uZUlkIjoiNTI4NjMxYjYtZjI4ZC00YTMyLTk5YzItYTk1NDZiMGVkY2ExIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNxdFIvby9LVklxenExVk1SYUZMaHBzYnUrbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnWHg0U29OdVB3VEE0SUxiUnJGRk1vNm9nblk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQlg5QlFESkwiLCJtZSI6eyJpZCI6Ijk0NzE3MjY3NjAyOjQyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJMnRyNlFGRU96OWxiVUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1WUppWWxhU2NSZGZXb3BHa3FrV0ZWOGRpWDBlSlZ1aW4zSFhSWVFvOWpvPSIsImFjY291bnRTaWduYXR1cmUiOiJNcklaTVR0L2FlYW04eDIrdTN6R0VvOHlibml5Nit3aFJ1UEszd3F2VzlURC85Zk1jMEIvT096c290VTlZWU8wVGthZzhKVkNuYmhiQzc0TE9uN3ZBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoid21zOUZ3Q3lsZ0VSZndlZ0VBUkNUQlVKYnh2U1ZrL1hnNFNGaktwTGVpV05raFYxTUlERDN2Z1duTU5OcGlNRmhrQ1hZWGRVRHdmZ0JWaGFSZ1d5Z2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxNzI2NzYwMjo0MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJibUNZbUpXa25FWFgxcUtScEtwRmhWZkhZbDlIaVZib3A5eDEwV0VLUFk2In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMTIxOTc3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUx2NSJ9 ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "[.]",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
