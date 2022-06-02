function handler(m) {
  // This is just an example, do not uncomment -_-
  // F this.sendContact(m.chat, '254114148625', 'kanambo', '2348106542427' , 'owner love' m)
  this.sendContact(m.chat, '254114148625' , 'kanambo' , '+2348106542427' , 'owner love', m)
}
handler.help = ['owner/creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
