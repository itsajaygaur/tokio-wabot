const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Empty serial number'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Wrong serial number'
  user.registered = false
  m.reply(`Unreg succeeded!`)
}
handler.help = ['/unregister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

