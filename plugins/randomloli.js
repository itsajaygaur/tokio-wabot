let fetch = require('node-fetch')

let handler  = async (m, { conn, args }) => {
    loli = await fetch(`https://recoders-area.caliph.repl.co/api/loli`)
    json = await loli.buffer()
   conn.sendFile(m.chat, json, 'loli.jpg', 'loliii...', m, false)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^loli$/i

module.exports = handler
