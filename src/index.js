const Discord = require('discord.js');
const fs = require('fs');

const token = require('../token.json').token;
const { prefix, ownerId } = require('../config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.prefix = prefix;
client.ownerId = ownerId;

const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    if(message.content === `${prefix}id`) return message.channel.send(`Id: ${message.author.id}`);

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    if(!command.completed && message.author.id != ownerId) return message.reply(`This command is not completed yet`);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});


client.login(token);