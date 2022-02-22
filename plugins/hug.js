let fs = require("fs")
let fetch = require("node-fetch")
let { exec } = require("child_process")

let handler = async (m, { conn, command }) => {
	if (m.quoted && m.quoted.sender) m.mentionedJid.push(m.quoted.sender)
	if (!m.mentionedJid.length) m.mentionedJid.push(m.sender)
	let res = await fetch(API("https://api.waifu.pics", "/sfw/" + command, {}))
	if (!res.ok) throw `${res.status} ${res.statusText}`
	let json = await res.json()
	if (json.url) {
		let buf = await (await fetch(json.url)).buffer()
		let input = `${command}.gif`
		let output = `${command}.mp4`
		fs.writeFileSync(input, buf)
		exec(`ffmpeg -i ${input} -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" ${output}`, (e) => {
			if (e) m.reply(String(e))
			fs.unlinkSync(input)
			conn.sendMessage(m.chat, fs.readFileSync(output), "videoMessage", { mimetype: "video/gif", quoted: m, caption: `@${m.sender.split("@")[0]} *${command}* ${m.mentionedJid.map((user) => user === m.sender ? "*themselves* " : `@${user.split("@")[0]}`).join(", ")}`, contextInfo: { mentionedJid: [...m.mentionedJid, m.sender] }})
			fs.unlinkSync(output)
		})
	} else throw json
}
handler.command = /^(hug|pat|lick|slap|bully|kiss|cry|cuddle|smug|highfive|bonk|yeet|blush|wave|smile|handhold|nom|bite|glomp|kill|cringe|kick|wink|happy|poke|dance)$/i

module.exports = handler
