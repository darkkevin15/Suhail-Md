const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="𝗽𝗮𝘁𝗵𝘂𝗺𝗮𝗺𝗮𝗻𝘁𝗵𝗮@gmail.com"
global.location="Lahore,Kndy."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Hyru8CwcBvLAEPSxKGwMoI";
global.website=process.env.GURL || "https://www.tiktok.com/@kevin_levin_official?_t=8nWG1UGs6fo&_r=1" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.fm/u/6wmptrkckx" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94773673969";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.fm/u/6wmptrkckx" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94765628251,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_02_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDU1LFxuICAgICAgICAxMixcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgODIsXG4gICAgICAgIDUwLFxuICAgICAgICA3OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjE1LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDI0NixcbiAgICAgICAgODYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDU2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ0LFxuICAgICAgICA1MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMixcbiAgICAgICAgMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTczLFxuICAgICAgICA5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDUyLFxuICAgICAgICA3OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzksXG4gICAgICAgIDE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJhQnJYQzF4eTFNcTM1WHFMbXN3aWZWTjU0a1RyVTNYMXdVZGJNZWN6WmJvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzczNjczOTY5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwNTg3QkI5NjlBMTZFQkI2MkVGOThBOUJBNjNDRDE1N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkzOTYxMzFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM0RkUlViaWRUc1NUVGhNYzhzdHk3Z1wiLFxuICBcInBob25lSWRcIjogXCI3OWY2YzNhNy1iZjI5LTQ4NTctYjMwNC1hOTk3NzEzNjk5YmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICAyMixcbiAgICAgIDI1NCxcbiAgICAgIDU0LFxuICAgICAgODUsXG4gICAgICA0OCxcbiAgICAgIDIyMyxcbiAgICAgIDU4LFxuICAgICAgODksXG4gICAgICAxOTksXG4gICAgICAxMjYsXG4gICAgICAzNyxcbiAgICAgIDE5OCxcbiAgICAgIDE4LFxuICAgICAgMTMsXG4gICAgICAxODIsXG4gICAgICA3OCxcbiAgICAgIDU4LFxuICAgICAgMTI4LFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MSxcbiAgICAgIDIzMSxcbiAgICAgIDI3LFxuICAgICAgMTkwLFxuICAgICAgMTI0LFxuICAgICAgNjUsXG4gICAgICAxMTUsXG4gICAgICAxOCxcbiAgICAgIDQ3LFxuICAgICAgMTQsXG4gICAgICAxNDksXG4gICAgICAxMTgsXG4gICAgICAxMDgsXG4gICAgICA4MixcbiAgICAgIDEzMCxcbiAgICAgIDE0NCxcbiAgICAgIDI1MyxcbiAgICAgIDk1LFxuICAgICAgNTEsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOVFKRkRNSFNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzczNjczOTY5OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMjM2MTgyMDE3MDY1Nzk6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnY1OU1nREVKak83N01HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvdzFrcDVjTXZicjJyMkhOcVh2ZzJPMi9NbkdNNFVHRmFDWE12d3hQYW0wPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRQU284VzRHM3BqZDhMM2RGWGtFemFwcWcwc2IzTXFDblZVNWZaV1dEUkswYno1blkyZzhRK2luYnp0TFlrNCtnOGh1bWFIYlA3L0lvcWFKcHhHUkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFjcG5OUThOQjVNU3o1eG9vaVV5OTRPakRvdTZVSkRRU3BsZnBINFdYU25BU3BpdUQ1VU1zb0FIazQvNHA4Nm9RREkrVGNyT0Q4Y1dnSXlYSkxDQ0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzczNjczOTY5OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTM5NjEyMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFoQ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWhDLmpzb24iOiAie1wia2V5RGF0YVwiOlwidzBWTDlrSEVSMGs2clR1Z0M3cGhpV2FtaXNLV3RhUEJZTWRHc2JWYmxuZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5NTgyMTc0MzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "KEVIN",
  packname: process.env.PACK_NAME || "🥰",
  botname : process.env.BOT_NAME  || "𝗞𝗘𝗩𝗜𝗡-𝗺𝗱",
  ownername:process.env.OWNER_NAME|| "Kevin",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
