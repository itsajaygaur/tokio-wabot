let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.vote = conn.vote ? conn.vote : {}
    if (!(id in conn.vote)) throw `_*no voting in this group!*_\n\n*${usedPrefix}start* - to start voting`

    let [reason, upvote, devote] = conn.vote[id]
    let mentionedJid = [...upvote, ...devote]
    m.reply(`
*「 VOTE 」*

*Reason:* ${reason}

*UPVOTE*
_Total: ${upvote.length}_
${upvote.map(u => '@' + u.split('@')[0]).join('\n')}

*DEVOTE*
_Total: ${devote.length}_
${devote.map(u => '@' + u.split('@')[0]).join('\n')}

*${usedPrefix}delvote* - to delete votes

_by ariffb_
`.trim(), false, { contextInfo: { mentionedJid } })
}
handler.help = ['checkvote']
handler.tags = ['vote']
handler.command = /^checkvote$/i
handler.group = true
module.exports = handler
