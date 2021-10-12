let handler  = async (m, { conn, text }) => {
	
conn.game = conn.game ? conn.game : {}
try {
if ( conn.game = true ) {
	delete conn.game
	conn.reply( m.chat, `Successfully delete session ttt`, m)
	} else if ( conn.game = false ) {
		m.reply(`Session ttt🎮 does not exist`)
		} else throw 'ngabs'
	} catch (e) {
		m.reply('damaged')
		}
}
	//BY RIZXYU
handler.help = ['delsesittt']
handler.tags = ['game']
handler.command = /^(delsesittt|dellsesitt)$/i
handler.limit = true

handler.register = true
handler.fail = null

module.exports = handler
