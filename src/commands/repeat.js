module.exports = {
	completed: true,
	hidden: false,
	name: 'repeat',
	description: 'Repeats x messages',
	usage: 'repeat <number of messages>',
	execute(message, args) {
    const channel = message.channel
    const messages = channel.getChannelMessages()



		message.channel.send(messages);
	},
};
