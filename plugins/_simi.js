let fetch = require('node-fetch')

let handler = m => m

handler.before = async (m, { conn }) => {
    let chat = db.data.chats[m.chat]
    if (chat.simi && !chat.isBanned) {
        if (/^.*false|disable|(turn)?off|0/i.test(m.text)) return
        if (!m.text) return
        let res = await fetch(API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: 'en' }))
        if (!res.ok) return m.reply(error)
        let json = await res.json()
        if (m.quoted && m.quoted.sender === conn.user.jid) {
         if (json.success == "panget si nica") return m.reply ("BAKA !")
         m.reply(json.success)
        return !0
      }
    }
    return !0
}

module.exports = handler
