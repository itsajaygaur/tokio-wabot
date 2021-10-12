let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Welcome set successfully\n@user (Mention)\n@subject (Group Title)\n@desc (Group Description)')
  } else throw 'Where\'s the text??'
}
handler.help = ['setwelcome <teks>']
handler.tags = ['group']

handler.command = /^setwelcome$/i
module.exports = handler

