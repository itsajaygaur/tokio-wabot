let handler = async (m, { text, args, participants }) => {
    if (args[0] < 0, args.length < 2) throw 'Example: #pick 15 gay'
    let users = participants.map(u => u.jid)
    m.reply(`*You are Picked as ${text.replace(args, '').trimStart()}*
    
${new Array(Math.min(users.length, args[0])).fill().map(() => {
    let index = Math.floor(Math.random() * users.length)
    return `@${users.splice(index, 1)}`
}).join`\n`.replace(/@s.whatsapp.net/g,'')}`)
}
handler.help = ['pick <amount> <text>']
handler.tag = ['fun']
handler.command = /^pick/i

module.exports = handler
