const fs = require('fs');
const settings = require('./settings.json');
const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

bot.on('ready', () => {
    console.log("READY!")
});




bot.on('messageCreate', msg => {
    //if (msg.content.startsWith(settings.prefix)) return; 
    if (msg.author.bot) return;
    const args = msg.content.split(" ");
    const command = args.shift().slice(settings.prefix.length)

    try {
        if (!msg.content.startsWith(settings.prefix)){
            console.log(`Must start with prefix`)
        }
        else if (fs.existsSync(`./commands/${command}.js`)) {
            let commandFile = require(`./commands/${command}.js`)
            commandFile.run(bot, msg, args, settings.prefix)
        }else{
            console.log(`${command} command unknown!`)
        }

    } catch (err) {
        console.error(err)
    }
});
bot.login(settings.discord_token);