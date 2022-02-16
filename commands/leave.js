const { execute } = require("./embed");

module.exports = {
    name: 'leaveguild',
    async execute(msg) {
        await msg.channel.send('Goodbye!')
        msg.guild.leave();
    }
}