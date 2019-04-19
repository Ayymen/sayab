const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = "-"
client.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
// By BlueWolf
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
// By BlueWolf
  let args = message.content.split(" ").slice(1);
// By BlueWolf
  if (command == "say") {
  if (message.member.id !== "455061501934436373") return message.channel.send('لا حبي ما يصير هيك :joy: , [Protector Bot] ');// By BlueWolf
   message.channel.send(args.join("  "))// By BlueWolf
   message.delete()// By BlueWolf
  }
 });
// لا تنسى تمنشني اذا جاتك مشكلة :smiley:

client.login(process.env.BOT_TOKEN);