const { Message, Client } = require("discord.js");
module.exports = {
    name: 'lazarevasestra',
    description: 'sends the youtube link!',
    run: async (client, message, args) => {

        if(message.member.roles.cache.has('880544879762079804')){
            message.channel.send('Lazareva Sestra kaze Mnjau')
        
        } else { 
            message.channel.send('Nemas permisiju za tu komandu!');
        }


     }

};
