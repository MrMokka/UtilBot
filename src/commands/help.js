
const usage = 'help <command>';

module.exports = {
	name: 'help',
    description: 'Shows usage and description of any command',
    usage: usage,
	execute(message, args) {
        if(args.length === 0) return message.channel.send(`Usage: \`${message.client.prefix}${usage}\`.`);

        const commandName = args[0].toLowerCase();
		const command = message.client.commands.get(commandName);

		if (!command) return message.channel.send(`There is no command with name \`${commandName}\`.`);
        if(!command.usage) return message.channel.send(`No usage described for \`${commandName}\`, please contact a developer to get this fixed.`);
        
        let msg = `Description: \`${command.description}\`.`
        msg += `\nUsage: \`${message.client.prefix}${command.usage}\`.`
        return message.channel.send(msg);
	},
};