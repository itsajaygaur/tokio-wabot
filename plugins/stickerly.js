const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler = async (m, { conn, text, usedPrefix, command }) => {

    if (!text) throw `*This command is for retrieve sticker from Stickerly based on search*\n\nUsage examples:\n${usedPrefix + command} spongebob`

    let res = await fetch(global.API('xteam', '/sticker/stickerly', { q: text }, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    m.reply(`
*Total sticker:* ${json.result.stickerlist.length}
        `.trim())

    for (let i of json.result.stickerlist) {
        stiker = await sticker(false, i, global.packname, global.author)
        await conn.sendMessage(m.chat, stiker, MessageType.sticker, { quoted: m })
        await delay(1500)
    }

}
handler.help = ['stickerly <search>']
handler.tags = ['sticker']
handler.command = /^(stic?kerly)$/i

handler.limit = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))
