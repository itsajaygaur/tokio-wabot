 let { Presence } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let limit = 50
let handler  = async (m, { conn, args, usedPrefix, command }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let text = args.join` `
	  	fetch('https://api.waifu.pics/nsfw/blowjob')
    	.then(res => res.json())
    	.then(json => {
    		conn.updatePresence(m.chat, Presence.composing) 
    		conn.reply(m.chat, `*Wait a moment . . .*`, m)
	conn.sendFile(m.chat, json.url, 'blowjoc.mp4', '', m, false, { asDocument: true } )	
	}) .catch(() => { conn.reply(m.chat, `*There is an error . . .*`, m) })
  			
	}
handler.help = ['blowjob']
handler.tags = ['anime']
handler.command = /^(blowjob)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
handler.limit = true
module.exports = handler
