
module.exports = {
    name: 'sendGuildMsg',
    execute(IDChannel) {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
          })

          

          readline.question(`Send Message: `, async input => {
            args = input.split(/ +/);
            channelID = args.shift();
            if(input != '!exit') {
                try {       
                    var channel = client.channels.cache.get(IDChannel[0]);
                  //channel.send(args.join(' '));
                    channel.send(input)
                    readline.close()
                    await this.execute(IDChannel);
                } catch {        
                    console.log('Guild or Channel doesn\'t exist');
                    console.log('');
                    readline.close();
                    await this.execute(IDChannel);
                }
            }
    
        })     
    }
}