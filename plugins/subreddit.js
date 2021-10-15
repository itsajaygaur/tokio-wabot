let fetch = require("node-fetch")

let handler = async (m, { conn, text }) => {
  let res = await fetch(global.API('https://meme-api.herokuapp.com', '/gimme/' + encodeURI(text || ''), {}))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Media not found!'
  if (json.nsfw) throw 'Content blocked'
  await conn.sendFile(m.chat, json.url, text, json.title, m, false, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['subreddit/sr <query>']
handler.tags = ['internet']
handler.command = /^(sr|subreddit)$/i

module.exports = handler
