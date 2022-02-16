console.log('Starting...');

require("dotenv").config();
const fs = require('fs');
const Discord = require('discord.js');
const { Console } = require("console");
const myId = '317840842612277248';

client = new Discord.Client();
client.commands = new Discord.Collection();
client.consoleCommands = new Discord.Collection();
client.login(process.env.TOKEN);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const consoleCommandFiles = fs.readdirSync('./consoleCommands').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
for(const file of consoleCommandFiles) {
    const command = require(`./consoleCommands/${file}`);
    client.consoleCommands.set(command.name, command);
}

client.on('ready', bootUp);
client.on('message', commands);

function bootUp() {  
    console.log('Started. \n');       
    console.log('Servers:')
    console.log("Guild ID: " + client.guilds.cache.map(guild => guild.id));
    console.log("Guild Name: " + client.guilds.cache.map(guild => guild.name));
    console.log("Guild Owner ID: " + client.guilds.cache.map(guild => guild.ownerID));
    
    consoleCommands();
    
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })

async function consoleCommands() {
    readline.question(``, async input => {
        const args = input.split(/ +/);
        const command = args.shift();
        

        if(client.consoleCommands.has(command)) {
            try {
                readline.close()
                await client.consoleCommands.get(command).execute(args);
            } catch (error) {
                console.log(error);
                console.log('fix ur shit');
            }                     
        }
        await console.log("it did")
        await consoleCommands();
    })
    
    
}

function commands(msg) {
    if(msg.content.startsWith('!') || !msg.author.bot) {
        const args = msg.content.slice(1).split(/ +/);
        const command = args.shift().toLowerCase();

        if(client.commands.has(command)) {
            try {
                client.commands.get(command).execute(msg, args);  
            } catch (error) {
                console.error(error);
                msg.channel.send('code is shit sorry fixing it');
            }
        }
    }
}