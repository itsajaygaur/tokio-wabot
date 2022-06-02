const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Type.*who/i.test(m.quoted.text)) return !0
    this.who am i = this.who am i ? this.who am i : {}
    if (!(id in this.who am i)) return m.reply('The matter has ended')
    if (m.quoted.id == this.who am i[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.who am i[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.result.Answer.toLowerCase().trim()) {
            global.db.data.users[m.sender].
                exp += this.who am i[id][2]
            m.reply(`*Right!*\n+${this.who am i[id][2]} XP`)
            clearTimeout(this.who am i[id][3])
            delete this.who am i[id]
        } else if (similarity(m.text.toLowerCase(), json.result.Answer.toLowerCase().trim()) >= threshold) m.reply(`*Time is up!*`)
        else m.reply(`*Wrong!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
