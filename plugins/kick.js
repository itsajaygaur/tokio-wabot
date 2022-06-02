let handler = async (m, { conn }) => {
  if (m.quoted) {
    await conn.groupRemove(m.chat, [m.quoted.sender])
    conn.reply(conn.user.jid, `@${m.sender.split`@`[0]} remove @${m.quoted.sender.split`@`[0]}`, m)
  }
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])
}
handler.help = ['remove'].map(v => v + ' @user')
handler.tags = ['admin']
handler.command = /^(remove|\-)$/i

handler.owner = true
handler.rowner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler
