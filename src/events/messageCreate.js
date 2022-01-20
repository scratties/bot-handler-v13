const config = require("../configs/config.json")

module.exports = {
    name: 'messageCreate',
    once: false,
    async execute(message, client) {
        if (message.author.bot) return;

        const prefix = config.prefix; // bot prefixi

        if (!message.content.startsWith(prefix)) return;
        const args = message.content.slice(prefix.length).trim().split(" ");
        const cmd = args.shift().toLowerCase();
        const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(cmd));

        try {
            command.execute(client, message, args);
        } catch (error) {
            return;
        }
    }
};