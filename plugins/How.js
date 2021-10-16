let handler = async (m, { conn, command, text }) => {
  if (!text) throw `Who is *${command.replace('how', '').toUpperCase()}*`
  conn.reply(m.chat, `
how ${command.replace('how', '').toUpperCase()} *${text}* ❓\n
*${text}* is *${Math.floor(Math.random() * 101)}*% ${command.replace('how', '').toUpperCase()} 👽
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['gay', 'smart', 'beautiful', 'handsome', 'emotional', 'crazy', 'lesbian', 'stress', 'simp', 'bhadwa', 'sad'].map(v => 'how' + v + ' @user')
handler.tags = ['fun']
handler.command = /^how(gay|smart|beautiful|handsome|emotional|crazy|lesbian|stress?|simp|bhadwa|sad)/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
