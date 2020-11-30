module.exports = {
	completed: true,
	hidden: false,
	name: 'ping',
	description: 'Ping Pong!',
	usage: 'ping',
	execute(message, args) {
		message.channel.send('Pong.');
	},
};