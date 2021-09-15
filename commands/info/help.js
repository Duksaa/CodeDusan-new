const { Message, Client } = require("discord.js");
module.exports = {
    name: 'help',
    description: 'sends the help!',
    run: async (client, message, args) => {
 
           message.channel.send('Komande koje postoje su: !help !ping !youtube !lazarevasestra !dajmilazarevusestru !sklonimilazarevusestru')



     }

};