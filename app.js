require('dotenv').config();
const fs = require('fs');
const { Collection, Client, Intents } = require('discord.js');
const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
	]
});

client.commands = new Collection();

const handlers = fs.readdirSync('./src/handlers').filter(file => file.endsWith('.js'));
const eventsFiles = fs.readdirSync('./src/events').filter(file => file.endsWith('.js'));
const commandsFolders = fs.readdirSync('./src/commands');

(async () => {
    for (file of handlers) {
        require(`./src/handlers/${file}`)(client);
    }
    client.eventshandler(eventsFiles, "./src/events");
    client.commandshandler(commandsFolders, "./src/commands");

    client.login(process.env.TOKEN);
})();