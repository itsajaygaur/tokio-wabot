let handler = async (m, { conn, text, usedPrefix }) => {
    conn.vote = conn.vote ? conn.vote : {}
    let id = m.chat
    if (id in conn.vote) {
        throw `_There are still votes in this chat!_\n\n*${usedPrefix}unvote* - to delete votes`
    }
    m.reply(`Voting begins!\n\n*${usedPrefix}upvote* - for sure\n*${usedPrefix}devote* - for not\n*${usedPrefix}checkvote* - to check the vote\n*${usedPrefix}delvote* - to delete votes`)
    conn.vote[id] = [
        text,
        [],
        []
    ]
}
handler.help = ['startvote [reason]']
handler.tags = ['vote']
handler.command = /^(start|mulai)vote$/i
handler.limit = true
handler.group = true
handler.admin = true
module.exports = handler
