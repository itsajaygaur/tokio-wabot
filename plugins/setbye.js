let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.bye = text
    else if (isOwner) conn.bye = text
    global.db.data.chats[m.chat].sBye = text
    m.reply('Bye successfully set\n@user (Mention)')
  } else throw 'Where\'s the text??'
}
handler.help = ['setbye <teks>']
handler.tags = ['group']

handler.command = /^setbye$/i
module.exports = handler

