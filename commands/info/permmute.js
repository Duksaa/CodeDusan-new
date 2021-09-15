const { Message, Client, ReactionUserManager } = require("discord.js");
module.exports = {
    name: 'permmute',
    description: 'Mute a member forever!',
    run: async (client, message, args) => {
        const muterole = message.guild.roles.cache.find(role => role.name === "Muted");
        const verifymember = message.guild.roles.cache.find(role => role.name === "Verifikovan Member");
        const Member = message.mentions.members.first()
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Nemas permisiju za tu komandu!');
        if(!Member) return message.channel.send('Nisi tagovo membera!')
        await Member.roles.add(muterole)
        await Member.roles.remove(verifymember)
        message.channel.send(`${Member.displayName} je zauvek mutiran!`)
        
    

            
     }

};