let handler = async (m, { text, usedPrefix }) => {
    let poin = 300
    let wrong = `Available options scissor, paper, rock\n\n*Example* : ${usedPrefix}suit scissor\n`
    if (!text) throw wrong
    var suit = Math.random()

    if (suit < 0.34) {
        suit = 'rock'
    } else if (suit > 0.34 && suit < 0.67) {
        suit = 'scissor'
    } else {
        suit = 'paper'
    }

    //menentukan rules
    if (text == suit) {
      global.db.data.users[m.sender].exp += 100
        m.reply(`*we draw*\n\nyou : ${text}\nBot : ${suit}\n\nPoin (±)100 XP`)
    } else if (text == 'rock') {
        if (suit == 'scissor') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`*You win*\n\nyou : ${text}\nBot : ${suit}\n\nPoin (+)${poin} XP`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`*You lose*\n\nyou : ${text}\nBot : ${suit}\n\nPoin (-)${poin} XP`)
        }
    } else if (text == 'scissor') {
        if (suit == 'paper') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`*You win*\n\nyou : ${text}\nBot : ${suit}\n\nPoin (+)${poin} XP`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`*You lose*\n\nyou : ${text}\nBot : ${suit}\n\nPoin (-)${poin} XP`)
        }
    } else if (text == 'paper') {
        if (suit == 'rock') {
            global.db.data.users[m.sender].exp += 300
            m.reply(`*You win*\n\nyou : ${text}\nBot : ${suit}\n\nPoin (+)${poin} XP`)
        } else {
          global.db.data.users[m.sender].exp -= 300
            m.reply(`*You lose*\n\nyou : ${text}\nBot : ${suit}\n\nPoin (-)${poin} XP`)
        }
    } else {
        throw wrong
    }
}
handler.help = ['suit scissor/rock/paper']
handler.tags = ['game']
handler.command = /^suit$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false
handler.admin = false
handler.botAdmin = false

module.exports = handler
