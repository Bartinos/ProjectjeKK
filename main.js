const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
	function flip() {
		return Math.floor((Math.random() * 2) + 1)
	}
	result = flip();

	if (result === 1) {
		winner = 'HEADS'
	}
	else {
		verliezer = 'Tails'
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
		case `${prefix}shutdown`:
			message.channel.send(`Shutting down `);
			resetBot(message.channel);
			break;
		default:
			break;
	}
}
)


client.login(token);

