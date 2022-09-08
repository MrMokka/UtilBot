module.exports = {
	completed: false,
  hidden: true,
	name: 'merge',
  description: 'Merge 2 channels into 1',
  usage: 'merge <channel 1> <channel 2> <name of new channel>',
	execute(message, args) {
        if(args.length === 0) return message.channel.send(`${message.author.username}\'s id: ${message.author.id}`);
        return message.channel.send(`${args[0].username}\'s id: ${args[0].id}`);
	},
};
