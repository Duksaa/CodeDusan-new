const { Message, Client } = require("discord.js");
module.exports = {
    name: 'dajmilazarevusestru',
    description: 'gives role to member!',
    run: async (client, message, args) => {

        message.member.roles.add('880766088621740042')
        message.channel.send('Dobio si Lazarevu Sestru! Uzivaj.')

         
     }

};