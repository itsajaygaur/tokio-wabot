let handler = async (m, { conn, usedPrefix, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
        }
    }
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `No absenteeism takes place!`, '© stikerin', 'Start', `${usedPrefix}startabsent`, m)
        throw false
    }
    delete conn.absen[id]
    m.reply(`Absenteeism has been successfully deleted`)
}
handler.help = ['removeabsent']
handler.tags = ['absen']
handler.command = /^(remove|hapus|-)absent$/i

module.exports = handler
