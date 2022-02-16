module.exports = {
    name: 'members',
    execute(msg) {       
        const guild = msg.guild
        const members = guild.members.cache;
        const users = members.map(member => member.user.username)
        // for(const member in members) {
        //     console.log('yeah')
        //     console.log(member.username);
        // }
        
        console.log(users)
    }
}