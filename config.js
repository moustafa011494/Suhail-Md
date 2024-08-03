const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_29_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA3MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0LFxuICAgICAgICA3NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgwLFxuICAgICAgICA1LFxuICAgICAgICAxOCxcbiAgICAgICAgNyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4LFxuICAgICAgICA2OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxLFxuICAgICAgICA0NixcbiAgICAgICAgOTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYzLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDMwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjksXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MixcbiAgICAgICAgMTk1LFxuICAgICAgICA1NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTM5LFxuICAgICAgICA5MixcbiAgICAgICAgODcsXG4gICAgICAgIDkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxODIsXG4gICAgICAgIDI4LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDU4LFxuICAgICAgICA5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDYsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0aFIxdFBqOStVN3pTSHBsUk9jc1p2YVFzNGJaa1NrWVRlTDZzSmRyaWw0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIwMTEyMjUyMjcyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNTgyQ0I2OEJGRTIwNUZEMTRGNjM1NzU1QjgxMTJBM0VcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNjYyOTQwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMTIyNTIyNzI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RkMxQzc4NUU2RTM1OTREOUFCNEZGRjVCQzY1RkNFQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI2NjI5NDFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiVUpiQ3pSZGhRZnF5U1hhWDd4UG1yZ1wiLFxuICBcInBob25lSWRcIjogXCJkOTc0YzNkYS01YjJmLTQ5YmEtOTRlZC1jNWVkMTNkMmExOTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICAyMjYsXG4gICAgICAyMjEsXG4gICAgICAxMDMsXG4gICAgICAyNDAsXG4gICAgICAxOTIsXG4gICAgICAxNjEsXG4gICAgICA1NSxcbiAgICAgIDIyNCxcbiAgICAgIDE1LFxuICAgICAgMjMxLFxuICAgICAgODIsXG4gICAgICAzMixcbiAgICAgIDEwOSxcbiAgICAgIDIyLFxuICAgICAgMTQ0LFxuICAgICAgMTU1LFxuICAgICAgMzUsXG4gICAgICAyOSxcbiAgICAgIDI0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDEyOCxcbiAgICAgIDEwNixcbiAgICAgIDE0LFxuICAgICAgMjQ4LFxuICAgICAgOCxcbiAgICAgIDE1MSxcbiAgICAgIDMyLFxuICAgICAgMjI1LFxuICAgICAgNDQsXG4gICAgICAxODQsXG4gICAgICAyNDMsXG4gICAgICAxMTgsXG4gICAgICAxMzYsXG4gICAgICA2NyxcbiAgICAgIDE3NixcbiAgICAgIDMwLFxuICAgICAgMTc4LFxuICAgICAgMjE1LFxuICAgICAgODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUTlYVjFURzRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIwMTEyMjUyMjcyOTo0M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFJYm90XCIsXG4gICAgXCJsaWRcIjogXCI3MDMwOTAwMDUyMzk4NDo0M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKUE5rVWNRbG9DM3RRWVlBaUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjcvQU1YbmVLOFFNOWhZUXlsVlFJMGhXczNhZjl0VS9malRHNEdhQkNxRlk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQk1LU3c1bmpyaHhtQ3dEMXdUUGNJZnlONVRjNnpDSTRkaGIyekw5T1E1b2w5b0hHYVgrZUN3dVNORjBjdW9oR2t3UzM5Yk1yUUVrMDNQa0lUK2VQRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZWZzWGVFc1c4aGZLVHMrcE0yTTJMbW0vUFROT0Rrc0daYjZFQWhqT1h5YVpRR0hhay9Xaitvd1R6aE5wNXFTclAzWi9JRzQ0R2lGSElmNkNlZkV3QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjAxMTIyNTIyNzI5OjQzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA4NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjYyOTM5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQVc5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBVzkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJONFZCakJpMVQ0MVcyU3RNaU5oK2pueFNnY0xWTDR5OTZJWWxDeGZiYWhZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0OTE4NjE5MixcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMiwzLDRdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
