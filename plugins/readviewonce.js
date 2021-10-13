let handler = async (m, { conn, text }) => {
    if (!m.quoted) return conn.sendMessage(m.chat, 'where\'s message?', 'conversation')
    if (m.quoted.mtype !== 'viewOnceMessage') throw 'That\'s not a viewonce message'
    await conn.copyNForward(m.chat, await conn.loadMessage(m.chat, m.quoted.id), false, { readViewOnce: true }).catch(_ => m.reply('Maybe it\'s been opened by a bot'))
}

handler.help = ['readviewonce']
handler.tags = ['tools']

handler.command = /^readviewonce/i

module.exports = handler
