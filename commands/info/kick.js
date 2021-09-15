const { Message, Client } = require("discord.js");
module.exports = {
    name: 'kick',
    description: 'Kick members!',
    run: async (client, message, args) => {
        const staffrole = message.guild.roles.cache.find((r) => r.name === 'Staff')
        if (!message.member.roles.cache.has(staffrole.id)) return message.channel.send('Nemas permisiju za tu komandu!');

        const member = message.mentions.users.first();
        if(member){
                const memberTarget = message.guild.members.cache.get(member.id);
                message.channel.send(`${memberTarget.displayName} je kikovan!`)
                memberTarget.kick();

     }
    
    }


};
