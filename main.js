const DISCORD = require('discord.js');
const { prefix, token } = require('./config.json');
const CLIENT = new DISCORD.Client();

CLIENT.once('ready', () => {
	console.log('Ready!');
});


CLIENT.on('message', message => {
	function flip() {
		return Math.floor((Math.random() * 2) + 1)
	}

	switch (message.content) {
		case `${prefix}cum`:
			message.channel.send('ik cum');
			break;
		case `${prefix}thomas`:
			message.channel.send('stinkt heel erg');
			break;
		case `${prefix}diamo`:
			message.channel.send('stinkt niet');
			break;
		case `${prefix}server`:
			message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
			break;
		case `${prefix}poepinbroek`:
			message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
			break;
		case `${prefix}poep`:
			message.channel.send(` ${result}   `);
			break;
		case `${prefix}flip`:
			// picks heads or tails with a 50% chance
			let flipResult = Math.floor((Math.random() * 2) + 1) == 1 ? `heads` : `tails`;
			message.channel.send(`It landed on ` + flipResult + `!`);
			break;
		case `${prefix}shutdown`:
			message.channel.send(`Shutting down `);
			CLIENT.destroy();
			break;
		default:
			break;
	}
}
)


CLIENT.login(token);

