const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    try {
        let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
        if (res.status != 200) throw await res.text()
        let img = await res.buffer()
        conn.sendFile(m.chat, img, '', '*© stickerin*', m, false, { thumbnail: Buffer.alloc(0) })
    } catch (e) {
        throw `Apikey limit runs out or error !`
    }
}
handler.help = ['wallpaperanime/wpanime']
handler.tags = ['anime']
handler.command = /^(wallpaper|wp)anime$/i
handler.limit = true

module.exports = handler
