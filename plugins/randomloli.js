let fetch = require('node-fetch')
     let handler  = async (m, { conn, args }) => {
    heum = await fetch(`https://recoders-area.caliph.repl.co/api/loli`)
    json = await heum.buffer()
   conn.sendFile(m.chat, json, 'loli', 'right?', m, false)
}
handler.help = ['loli']
handler.tags = ['internet']
handler.command = /^loli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
