let handler = async m => m.reply(`
☕ *Miko </3 :* a whatsapp bot\n\n🔗 *URL :* https://github.com/Itstitan/miku /n [open for public]
`.trim()) // repository
handler.help = ['tokio']
handler.tags = ['info']
handler.command = /^miko|repo$/i

module.exports = handler
