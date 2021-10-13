const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let handler = async (m, { conn, text }) => {
  let [t1, t2] = text.split`|`
  if (!t1) throw 'No Text'
  if (!t2) {
    t2 = t1
    t1 = ''
  }
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `caption/reply to a photo`
  if (!/image\/(jpe?g|png)/.test(mime)) throw `meme ${mime} not supported`
  let img = await q.download()
  let link = await uploadImage(img).catch(e => uploadFile(img))
  conn.sendFile(m.chat, global.API('https://api.memegen.link', `/images/custom/${encodeURIComponent(t1)}/${encodeURIComponent(t2)}.png`, {
    background: link
  }), 'meme.png', `Here :|`, m)
}
handler.help = ['memeg'].map(v => v + '<text|text>')
handler.tags = ['tools']
handler.command = /^(memeg)$/i

module.exports = handler
