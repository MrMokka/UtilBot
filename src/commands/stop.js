module.exports = {
	completed: true,
  hidden: true,
	name: 'stop',
  description: 'Stops a command',
  usage: 'stop <command>',
	execute(message, args, client) {
    //if(args.length === 0) return message.channel.send(`${message.author.username}\'s id: ${message.author.id}`);
    //return message.channel.send(`${args[0].username}\'s id: ${args[0].id}`);
		if(args[0] === "move"){
			client.move = false;
			message.channel.send(`Movement has been stopped`);
		}
	},
};
