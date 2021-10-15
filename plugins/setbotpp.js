/*
   Silahkan Di Pakek
   Tapi Bantu Rapihin :v
   Buatan: Miaweers
*/

let handler = async (m, { conn, args }) => {
    let bot = conn.user.jid // Bot
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image/.test(mime)) {
      let img = await q.download()
      if (!img) throw `Photo not found`
     conn.updateProfilePicture (bot, img)
    conn.reply(m.chat, 'Success in Changing Bot\'s Profile Photo!', m)
	}
    }
handler.help = ['setbotpp']
handler.tags = ['owner']
handler.command = /^(setbotpp)$/i
handler.owner = true

module.exports = handler
