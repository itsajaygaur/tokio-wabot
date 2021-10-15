// Magernulis By MFarelS:V
// Code by DrawlNag
// Recode by Nurutomo :V
let handler  = async (m, { command, conn, text }) => {
  let id = (command.match(/[1-6]$/) || [])[0] || ''
  await conn.sendFile(m.chat, global.API('xteam', '/magernulis' + id, {
    text,
    nama: conn.getName(m.sender),
    kelas: ' '
  }, 'APIKEY'), 'nulis.jpg', 'Nahh it\'s done...', m)
}
handler.help = new Array(6).fill('lazywrite').map((v, i) => v + (i + 1) + ' <teks>')
handler.tags = ['nulis']

handler.command = /^lazywrite[1-6]?$/i

handler.limit = true

module.exports = handler
