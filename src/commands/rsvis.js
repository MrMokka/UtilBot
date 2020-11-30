const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
    completed: false,
	name: 'rsvis',
    description: 'Runescape command: Display todays viswax combination',
    usage: 'rsvis',
	async execute(message, args) {
        // const {data} = await axios.get('https://warbandtracker.com/goldberg/');
        await getHTML();
        // console.log(axData);
        // const $ = cheerio.load(data);
        // const result = $('.worldTable');
        // console.log(result);
        // console.log($.html(result));
        // message.channel.send(result);


	},
};

const getHTML = async () => {
    axios.get('https://warbandtracker.com/goldberg/')
        .then((res) => {
            const $ = cheerio.load(res.data);
            // console.log($('.worldTable').children().html());
            let table = $('.worldTable').children().text();
            // let firstRune = $('tr', table).nextAll().children().text();
            // console.log(firstRune);
            let runes = table.replace(/\s+/g,' ').trim();
            console.log(runes);

        })
        .catch((error) => {
            console.error(error)
        }
    );
};




