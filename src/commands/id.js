module.exports = {
    hidden: true,
	name: 'id',
    description: 'Display the id of someone, or yourself',
    usage: 'id <user>',
	execute(message, args) {
        if(args.length === 0) return message.channel.send(`${message.author.username}\'s id: ${message.author.id}`);
        return message.channel.send(`${args[0].username}\'s id: ${args[0].id}`);

        
	},
};