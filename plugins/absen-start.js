let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
        }
    }
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.send2Button(m.chat, `There are still absences in this chat!`, '© stikerin', 'delete', `${usedPrefix}removeabsent`, 'Check', `${usedPrefix}checkabsent`, m)
        throw false
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, `Absence begins`, '© stikerin', 'Absent', `${usedPrefix}absent`, m),
        [],
        text
    ]
}
handler.help = ['startabsent [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai)absent$/i

module.exports = handler
