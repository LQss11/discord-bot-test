const settings = require('./settings.json');
const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', () => {
   console.log("READY!")
});

bot.on('messageCreate', message => {  
    if (message.content.startsWith(settings.prefix + "ping")) {
      message.reply('pong!');
    }
  });
bot.login(settings.discord_token);