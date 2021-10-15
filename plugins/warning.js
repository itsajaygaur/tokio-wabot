let handler = async (m, { conn, args, groupMetadata}) => {
    if (args.length > 0) {
  const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
        let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : false
        let warn = global.db.data.users[mention].warn
        if (warn < 2) {
            global.db.data.users[mention].warn += 1
            conn.reply(m.chat, `⚠️ *WARNING +1*`, m)
            m.reply('You got a warning from admin, your total warning now *' + (warn + 1) + '* warn, If you get a warning *3 time*, you will be removed from the group', mention)
        } else if (warn == 2) {
            global.db.data.users[mention].warn = 0
            m.reply('Goodbye')
                await time(5000)
             await conn.groupRemove(m.chat, [mention])
             m.reply(`You were removed from the group ${groupMetadata.subject} because it has been warned 3 times`, mention)
           
        }
    } else conn.reply(m.chat, 'Tag target', m)
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = /^warn$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false
handler.admin = true
handler.botAdmin = true

module.exports = handler
