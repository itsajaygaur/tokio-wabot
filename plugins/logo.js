import fetch from 'node-fetch'
let apit = 'ASTROINCDEVELOPER'

let handler = async (m, {command, conn, text, usedPrefix}) => {
    if (command == 'blackpink',
    'neon',
    'greenneon',
    'futureneon',
    'sandwriting',
    'sandsummer',
    'sandengraved',
    'metaldark',
    'neonlight',
    'holographic',
    'minion',
    'deluxesilver',
    'newyearcard',
    'bloodfrosted',
    'halloween',
    'jokerlogo',
    'fireworksparkle',
    'natureleaves',
    'bokeh',
    'strawberry',
    'breakwall',
    'icecold',
    'luxury',
    'cloud',
    'summersand',
    'horrorblood',
    'thunder',
    'magma',
    'impressiveglitch',
    'harrypotter',
    'watercolor',
    'wonderfulgraffiti') {
        let rest = await fetch('https://api.lolhuman.xyz/api/textprome/'+ command +'?apikey='+ apit +'&text='+ text)
        if (!rest.ok) throw await `${rest.status} ${rest.statusText}`
        let json = await rest.arrayBuffer()
        conn.sendButton(m.chat, `${command}`, author, json, [[`MENU`, `${usedPrefix + 'menu'}`]], m)
    }
}

handler.help = ['blackpink',
'neon',
'greenneon',
'futureneon',
'sandwriting',
'sandsummer',
'sandengraved',
'metaldark',
'neonlight',
'holographic',
'minion',
'deluxesilver',
'newyearcard',
'bloodfrosted',
'halloween',
'jokerlogo',
'fireworksparkle',
'natureleaves',
'bokeh',
'strawberry',
'breakwall',
'icecold',
'luxury',
'cloud',
'summersand',
'horrorblood',
'thunder',
'magma',
'impressiveglitch',
'harrypotter',
'watercolor',
'wonderfulgraffiti']
handler.command = /^(blackpink|neon|greenneon|futureneon|sandwriting|sandsummer|sandengraved|metaldark|neonlight|holographic|minion|deluxesilver|newyearcard|bloodfrosted|halloween|jokerlogo|fireworksparkle|natureleaves|bokeh|strawberry|breakwall|icecold|luxury|cloud|summersand|horrorblood|thunder|magma|impressiveglitch|harrypotter|watercolor|wonderfulgraffiti)$/i
export default handler
