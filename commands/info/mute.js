const { Message, Client, ReactionUserManager } = require("discord.js");
const ms = require('ms')
module.exports = {
    name: 'mute',
    description: 'Mute a member!',
    run: async (client, message, args) => {
        const muterole = message.guild.roles.cache.find(role => role.name === "Muted");
        const verifymember = message.guild.roles.cache.find(role => role.name === "Verifikovan Member");
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Nemas permisiju za tu komandu!');
        if(!Member) return message.channel.send('Nisi tagovo membera!')
        if(!time) return message.channel.send('Napisi vreme mute-a!')
        await Member.roles.add(muterole)
        await Member.roles.remove(verifymember)
        message.channel.send(`${Member.displayName} je mutiran na ${ms(ms(args[1]))}`)

        setTimeout(async () => {
            await Member.roles.remove(muterole)
            await Member.roles.add(verifymember)
            message.channel.send(`${Member.displayName} je isteklo mute vreme!`)
        }, ms(time))
    

            
     }

};