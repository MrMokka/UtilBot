module.exports = {
	completed: true,
  hidden: true,
	name: 'move',
  description: 'Move a user back and forth between 2 channels',
  usage: 'move <user> <channel>',
	execute(message, args, client) {
    if(args.length === 0) return message.channel.send(`${message.author.username}\'s id: ${message.author.id}`);
    //return message.channel.send(`${args[0].username}\'s id: ${args[0].id}`);
    if(client.move) return message.channel.send(`A move command is currently running..`);

    const userId = args[0].substring(2, args[0].length-1)
    const targetCahnnel = message.guild.channels.cache.find(c => c.id === args[1])
    const member = message.guild.members.cache.find(m => m.id === userId)
    const startChannel = member.voice.channel

    member.voice.setChannel(targetCahnnel)

    client.move = true;

    const moveUser = async (member, fromChannel, toChannel, messageChannel) => {
      member.voice.setChannel(toChannel)
      messageChannel.send(`${member.user.toString()} has been moved from ${fromChannel.toString()} to ${toChannel.toString()}`);
    }
    
    const moveLoop = async () => {
      while(client.move){
        moveUser(member, startChannel, targetCahnnel, message.channel)
        await new Promise(resolve => setTimeout(resolve, 500));
        moveUser(member, targetCahnnel, startChannel, message.channel)
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
    moveLoop();
    return;
	},
};
