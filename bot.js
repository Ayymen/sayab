var prefix = "-"
client.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
  if (message.member.id !== "455061501934436373") return message.channel.send('لا حبي ما يصير هيك :joy: , [Protector Bot] ');
   message.channel.send(args.join("  "))
   message.delete()
  }
 });
 client.login(process.env.BOT_TOKEN);
