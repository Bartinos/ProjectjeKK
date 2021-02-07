const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

		
client.on('message', message => { 
	function flip() {
	return Math.floor((Math.random() * 2) + 1)} 
	result = flip(); 
	
	if (result===1) {
		winner= 'HEADS'
		} 
	else {
		 verliezer = 'Tails' }

	if (message.content === `${prefix}cum`) {
		message.channel.send('ik cum');
	} else if (message.content === `${prefix}thomas`) {
		message.channel.send('stinkt heel erg');
	} else if (message.content === `${prefix}diamo`) {
		message.channel.send('stinkt niet');
	} else if (message.content === `${prefix}server`) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${prefix}poepinbroek`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	} else if 
			 (message.content === `${prefix}poep`) {
			 message.channel.send (` ${result}   `);
				
			} 
		}
		
	) 


client.login(token);

