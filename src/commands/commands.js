module.exports = {
	completed: true,
	hidden: false,
	name: 'commands',
    description: 'Lists all commands',
    usage: 'commands',
	execute(message, args) {

        let msg = message.client.commands.map(command => {
            if(command.completed && !command.hidden) {
                let commandInfo = `\n${message.client.prefix}${command.name}`.padEnd(20, " ") + "|".padEnd(3, " ");
                commandInfo += `${message.client.prefix}${command.usage}`;
                return commandInfo;
            }
        });
        message.channel.send(`All active commands: \`\`\`${msg.join(" ")}\`\`\``);
	},
};
