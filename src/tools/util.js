
export moveUser => (user, targetChannel, messageChannel) {
  const fromChannel = member.voice.channel
  user.voice.setChannel(targetChannel)
  messageChannel.send(`${user.username} has been moved from ${fromChannel.id} to ${targetChannel.name}`);
}
