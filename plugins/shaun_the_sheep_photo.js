const uploadImage = require('../lib/uploadImage')
let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let url = await uploadImage(media)
  await conn.sendFile(m.chat, global.API('xteam', '/videomaker/shaunthesheep', { url }, 'APIKEY'), 'shaunthesheep.mp4', 'don\'t be sad...', m)
}
handler.help = ['shaunthesheep/sss']
handler.tags = ['maker']

handler.command = /^(shaunthesheep|sss)$/i

module.exports = handler
