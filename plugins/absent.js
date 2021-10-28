let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `No absenteeism takes place!`, '© stikerin', 'Start', `${usedPrefix}startabsent`, m)
        throw false
    }

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw 'You\'re absent!'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `├ ${i + 1}.  @${v.split`@`[0]}`).join('\n')
    let caption = `
Date: ${date}
${conn.absen[id][2]}
┌〔 absent list 〕
├ Total: ${absen.length}
${list}
└────`.trim()
    await conn.send2Button(m.chat, caption, '© stikerin', 'Absent', `${usedPrefix}absent`, 'Check', `${usedPrefix}checkabsent`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['absent']
handler.tags = ['absen']
handler.command = /^(absent|hadir)$/i

module.exports = handler
