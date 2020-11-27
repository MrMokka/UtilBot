module.exports = {
	name: 'commands',
    description: 'Lists all commands',
    usage: 'commands',
	execute(message, args) {
        
        let msg = message.client.commands.map(command => {
            let commandInfo = `\n${message.client.prefix}${command.name}`.padEnd(20, " ") + "|".padEnd(3, " ");
            commandInfo += `${message.client.prefix}${command.usage}`;
            return command.hidden ? "" : commandInfo;
        });
        message.channel.send(`All active commands: \`\`\`${msg.join(" ")}\`\`\``);
	},
};