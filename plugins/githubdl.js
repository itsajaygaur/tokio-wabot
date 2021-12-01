let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw 'where\'s the username ?'
if (!args[1]) throw 'where\'s the repo?'

let url = `https://github.com/${args[0]}/${args[1]}/zipball/master`
//ByRizkyAdi
m.reply(`compressing data to zip file`)
conn.sendFile( m.chat, url, 'repo.zip', null, m)

}
handler.help = ['githubdl <username> <repo>']
handler.tags = ['downloader']
handler.command = /githubdl/i

handler.limit = true

module.exports = handler
