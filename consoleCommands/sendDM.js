module.exports = {
    name: 'sendDM',
    execute() {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
          })

          readline.question(`Send Message: `, input => {
            args = input.split(/ +/);
            channelID = args.shift();
            try {       
                console.log(channelID);
                const user = client.users.cache.get(channelID);
                user.send(args.join(''));
                readline.close()
                this.execute();
            } catch(error) {  
                console.log(error);      
                console.log('Guild or Channel doesn\'t exist');
                console.log('');
                readline.close();
                this.execute();
            }    
        })       
    }
}