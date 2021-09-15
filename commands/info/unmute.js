const { Message, Client } = require("discord.js");
module.exports = {
    name: 'unmute',
    description: 'Unmute a member!',
    run: async (client, message, args) => {
        const target = message.mentions.members.first();
        const muterole = message.guild.roles.cache.find(role => role.name === "Muted");
        const verifymember = message.guild.roles.cache.find(role => role.name === "Verifikovan Member");

        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Nemas permisiju za tu komandu!');

        await target.roles.remove(muterole);
        await target.roles.add(verifymember);
        message.channel.send(`${target.displayName} je unmutiran!`);
            
}

};