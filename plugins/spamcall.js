let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix }) => {

  if (!text) throw `Usage Example\n${usedPrefix}spamcall 628xxxxxxxx`

  let nomor = text.replace(/[^0-9]/gi, '').slice(2)

  if (!nomor.startsWith('8')) throw `Usage Example\n${usedPrefix}spamcall 628xxxxxxxx`
  
  m.reply('_*Wait for your request to be processed.....*_')

  let anu = await fetch(`https://id.jagreward.com/member/verify-mobile/${nomor}`).then(a => a.json())
  
  let spcall = `*Number bot* : _${anu.phone_prefix}_\n\n_The bot has successfully called you!_`
  
  conn.reply(m.chat, `${spcall}`.trim(), m)
  
  m.reply(anu)

  }
  
  // by Aine

handler.help = ['spamcall <number>']

handler.tags = ['tools']

handler.command = /^(spamcall)$/i

handler.limit = true

module.exports = handler
