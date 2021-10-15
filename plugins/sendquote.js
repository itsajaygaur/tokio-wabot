async function handler(m) {
    if (!m.quoted) throw 'reply message!'
    let q = this.serializeM(await m.getQuotedObj())
    if (!q.quoted) throw 'the message you replied does not contain a reply!'
    await q.quoted.copyNForward(m.chat, true)
}
handler.command = /^q$/i
handler.tags = ['tools']
module.exports = handler
