let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINK 」*\n\nDetected *${await this.getName(m.sender)}* you idiot have sent the group link!\n\nSorry you will be kicked out from this group byee or face the legend_hacke team!`)
    if (isAdmin) return m.reply('*Hey sorry you\'re admin, you won\'t be kicked. haha..*')
    if (!isBotAdmin) return m.reply('*Bot is not admin, how can it kick people -_-*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*Lol admin are you crazy 😂😂 you send your own group link :v*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
