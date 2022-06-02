let fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.who am i = conn.who am i ? conn.who am i : {}
    let id = m.chat
    if (id in conn.who am i) {
        conn.reply(m.chat, 'There are still unanswered questions in this chat', conn.who am i[id][0])
        throw false
    }
    let res = await fetch(global.API('xteam', '/game/who am i', {}, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `
Who am I? ${json.result.soal}

Timeout *${(timeout / 1000).toFixed(2)} second*
Type ${usedPrefix}who for help
Bonus: ${poin} XP
`.trim()
    conn.who am i[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.who am i[id]) conn.reply(m.chat, `Time is up!\nThe answer is *${json.result.Answer}*`, conn.who am i[id][0])
            delete conn.who am i[id]
        }, timeout)
    ]
}
handler.help = ['who am i']
handlertags = ['game']
handler.command = /^who(are you)?i/i

module.exports = handler
