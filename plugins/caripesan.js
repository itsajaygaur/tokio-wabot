let handler = async (m, { conn, text }) => {
    if (!text) throw 'Enter the message you are looking for!'
    let split = text.split`|`
    let result = await conn.searchMessages(split[0], m.chat, split[1], 1)
    if (result.messages.length > 0) {
        let total = result.messages.length
        let sp = total < Number(split[1]) ? `Found only ${total} messages` : `Found ${total} message`
        m.reply(sp)

        result.messages.map( async ({ key }) => {
            let { remoteJid: _remoteJid, id: _ids } = key
            let _message = await conn.loadMessage(_remoteJid, _ids)
            conn.reply(m.chat, 'Here\'s the message', _message)
        })
    }
}

handler.help = ['searchmessage <message>|<amount>']
handler.tags = ['tools']

handler.command = /^searchmessage/i

module.exports = handler
