const Discord = require('discord.js');
//const client = new Discord.Client();


// client.once('ready', () => {
//     console.log('Bot is online');
// })
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.once('ready', () => {
    console.log('Bot is online');
})

client.login('OTk2MDE3OTk3OTIxNjY1MDc1.GDiV9P.lPHpkkCM7iRTDJyFvfotIlph8EeH76HZK2Ptnk');