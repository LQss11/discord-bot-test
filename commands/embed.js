exports.run = function(bot, msg, args) {
  if (args.length < 1) return msg.reply("You need text my sir lmao");
  const embed = new Discord.RichEmbed()
   .setTitle("EMBED 1")
   .setDescription(`${args.join(' ')}`);
  msg.channel.send({embed});
};