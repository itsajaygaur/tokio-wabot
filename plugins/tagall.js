let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
    m.reply(`${text ? `${text}\n` : ''}┌─〔 Tag All 〕\n` + users.map(v => '├ @' + v.replace(/@.+/, '')).join`\n` + '\n└────', null, {
    contextInfo: { mentionedJid: users } 
  })
}
handler.command = ['tagall']

handler.admin = true
handler.group = true

module.exports = handler
