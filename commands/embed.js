module.exports = {
    name: 'embed',
    execute(msg) {
        if(msg.guild != null && msg.guild.me.hasPermission("MANAGE_MESSAGES")) msg.delete();
        const toEmbed = msg.content.slice(6, msg.content.length);
        const embedding = {
            title: toEmbed,
            footer: { 
                text: msg.author.username
            }
        }       
        msg.channel.send({embed: embedding});    
    }

};