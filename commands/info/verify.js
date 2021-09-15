const { Message, Client } = require("discord.js");
module.exports = {
    name: 'verify',
    description: 'Verify the member!',
    run: async (client, message, args) => {
        const verifymember = message.guild.roles.cache.find(role => role.name === "Verifikovan Member");
        message.member.roles.add(verifymember)
        message.member.send('Uspesno si se verifikovao.')

         
     }

};