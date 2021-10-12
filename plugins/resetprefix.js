let handler = async(m, { conn }) => {

  global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
    await m.reply(`Prefix successfully reset`)
    // conn.fakeReply(m.chat, 'Prefix successfully reset', '0@s.whatsapp.net', 'Reset Prefix')
}
handler.help = ['resetprefix']
handler.tags = ['owner']
handler.command = /^(resetprefix)$/i
handler.rowner = true

module.exports = handler
