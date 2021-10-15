const { MessageType } = require('@adiwajshing/baileys')
const fetch = require('node-fetch')

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'give me a name !'
	let res = await fetch('http://www.omdbapi.com/?apikey=742b2d09&t=${match[1]}&plot=full')
	let json = await res.json ()
	const json = JSON.parse(response.body);
	 let text = `
	 'Title      : ' + json.Title + '\n\n';
	 'Year       : ' + json.Year + '\n\n';
	 'Rated      : ' + json.Rated + '\n\n';
	 'Released   : ' + json.Released + '\n\n';
	 'Runtime    : ' + json.Runtime + '\n\n';
	 'Genre      : ' + json.Genre + '\n\n';
	 'Director   : ' + json.Director + '\n\n';
	 'Writer     : ' + json.Writer + '\n\n';
	 'Actors     : ' + json.Actors + '\n\n';
	 'Plot       : ' + json.Plot + '\n\n';
	 'Language   : ' + json.Language + '\n\n';
	 'Country    : ' + json.Country + '\n\n';
	 'Awards     : ' + json.Awards + '\n\n';
	 'BoxOffice  : ' + json.BoxOffice + '\n\n';
	 'Production : ' + json.Production + '\n\n';
	 'imdbRating : ' + json.imdbRating + '\n\n';
	 'imdbVotes  : ' + json.imdbVotes + '```';
	`.trim()
        conn.reply(m.chat, text, m)
        
    } catch (e) {
        console.log(e)
	throw '_here is your movie_'
	}
}
handler.help = ['movie']
handler.tags = ['internet']
handler.command = /^(movie)$/i
handler.limit = false

module.exports = handler
