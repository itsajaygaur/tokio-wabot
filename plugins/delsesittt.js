let handler  = async (m, { conn, text }) => {
	
conn.game = conn.game ? conn.game : {}
try {
if ( conn.game = true ) {
	delete conn.game
	conn.reply( m.chat, `Successfully deleted the session of ttt`, m)
	} else if ( conn.game = false ) {
		m.reply(`Session ttt🎮 does not exist`)
		} else throw 'ngabs'
	} catch (e) {
		m.reply('damaged')
		}
}
	//BY RIZXYU
handler.help = ['delttt']
handler.tags = ['game']
handler.command = /^(delttt|dellttt)$/i
handler.limit = true

handler.register = true
handler.fail = null

module.exports = handler
