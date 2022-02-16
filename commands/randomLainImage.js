const { MessageAttachment } = require('discord.js');

const fs = require('fs');
const lainFiles = fs.readdirSync('./lainFiles/')

module.exports = {
    name: 'lain',
    execute(msg) {       
        const index = Math.floor(Math.random()*lainFiles.length);
        const attachment = new MessageAttachment('./lainFiles/'+lainFiles[index]);
        msg.channel.send('Let\'s all love Lain!', attachment);
    }
}