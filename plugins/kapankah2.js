let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Question:* ${command} ${text}
*Answer:* ${Math.floor(Math.random() * 10)} ${pickRandom(['second', 'minute', 'o\'clock', 'day', 'week', 'month', 'year', 'decade', 'century'])} again ...
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['', 'y'].map(v => 'when' + v + ' <question>')
handler.tags = ['shell']
handler.command = /^when(y)?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

