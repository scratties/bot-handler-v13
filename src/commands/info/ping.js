module.exports = {
	name: 'ping',
	aliases: ['gecikme', 'latency'],
	async execute(client, message) {
		const msg = await message.channel.send('...');
		msg.edit(`Pong 🏓\nBOT: ${Math.round(client.ws.ping)}ms\nAPI: ${msg.createdTimestamp - message.createdTimestamp}ms`);
	},
};