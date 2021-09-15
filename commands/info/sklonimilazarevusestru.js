module.exports = {
    name: 'sklonimilazarevusestru',
    description: 'remove role to member!',
    run: async (client, message, args) => {

        message.member.roles.remove('880766088621740042')
        message.channel.send('Sklonio si Lazarevu Sestru! Uzivaj.')
        
    
     }

};
