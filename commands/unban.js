const { Message } = require("discord.js");
const fetch = require('node-fetch')

exports.run = async function (bot, msg, args) {
        const fetchedBans = await msg.guild.bans.fetch();
        const bannedMembers = (await fetchedBans)
                .map((member) => member.user.id);
        //.join('\n');
        //msg.channel.send(bannedMembers.method);
        console.log(bannedMembers)
        bannedMembers.forEach(element => {
                msg.guild.members.unban(element)
        });
        //msg.channel.send(`Member Tag: <@TEST>\nMember ID: TEST\nTotal Bans: ${fetchedBans.size}`);
};