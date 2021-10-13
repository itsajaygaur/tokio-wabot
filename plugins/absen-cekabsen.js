let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `No absenteeism takes place!`, '© stikerin', 'Start', `${usedPrefix}startabsent`, m)
        throw false
    }

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    let caption = `
Date: ${date}
${conn.absen[id][2]}
┌〔 Absent list 〕
├ Total: ${absen.length}
${list}
└────`.trim()
    await conn.send2Button(m.chat, caption, '© stikerin', 'Absent', `${usedPrefix}absent`, 'delete', `${usedPrefix}removeabsent`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['checkabsent']
handler.tags = ['absen']
handler.command = /^checkabsent$/i

module.exports = handler
