let handler = async ( m, {usedPrefix} ) => m.reply(`
🎴 *OPTIONS:*
💫Cry
💫Kiss
💫Bully
💫Hug
💫Lick
💫Cuddle
💫Pat
💫Smug
💫Highfive
💫Bonk
💫Yeet
💫Blush
💫Wave
💫Smile
💫Handhold
💫Nom
💫Bite
💫Glomp
💫Kill
💫Slap
💫Cringe
💫Kick
💫Wink
💫Happy
💫Poke
💫Dance
🏮 *Usage example:* ${usedPrefix}pat @user/quote user
`.trim()) 
handler.help = ['reactions']
handler.tags = ['fun']
handler.command = /^(reactions|reaction|react|r)$/i

module.exports = handler
