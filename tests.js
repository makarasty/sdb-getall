require('dotenv').config();

const Discord = require("discord.js");

const allGet = require("./index.js");

const bot = new Discord.Client({
	intents: 47007
});

/**
 * @typedef {((client: any, id: any) => Promise<any>)} GetFunction
*/

bot.once("ready", async (client) => {
	/**
	 * @param {GetFunction} func
	 */
	async function defaultNullTests(func) {
		let allPassed = true;
		const errors = [];

		/** @type {Array<{args: [any, any], expected: any}>} */
		const tests = [
			// These are not very useful tests, but better than having none at all.
			{ args: [client, "10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"], expected: null },
			{ args: [client, undefined], expected: null },
			{ args: [client, 0], expected: null },
			{ args: [true, true], expected: null },
			{ args: [false, false], expected: null },
			{ args: ['', 0], expected: null },
			{ args: [client, -12312321], expected: null },
			{ args: [client, ""], expected: null },
			{ args: [{ lol: "kek" }, ""], expected: null },
			{ args: [{ lol: "kek" }, { "kek": "lol" }], expected: null },
			{ args: [undefined, ""], expected: null }
		];

		for (let i = 0; i < tests.length; i++) {
			const test = tests[i];
			try {
				const result = await func.apply(null, test.args);
				if (result !== test.expected) {
					allPassed = false;
					errors.push(`Test ${i + 1} failed: expected ${test.expected}, but got ${result}`);
				}
			} catch (error) {
				allPassed = false;
				if (error instanceof Error) {
					errors.push(`Test ${i + 1} threw an error: ${error.message}`);
				}
			}
		}

		if (allPassed) {
			console.log(true, func.name);
			return true;
		} else {
			console.log("Some tests failed:");
			errors.forEach(error => console.log(error));
			return false;
		}
	}

	const toDefaultTest = [
		allGet.getGuild,
		allGet.getUser,
		allGet.getEmoji,
		allGet.getChannel,
		allGet.getTextChannel,
		allGet.getVoiceChannel,
		allGet.getCategoryChannel,
		allGet.getDMChannel,
		allGet.getAnyThread,
		allGet.guildGetMember,
		allGet.guildGetInvite,
		allGet.guildGetBan,
		allGet.guildGetPresence,
		allGet.guildGetScheduledEvent,
		allGet.guildGetSticker,
		allGet.guildGetVoiceState,
	]

	for (const func of toDefaultTest) {
		await defaultNullTests(func)
	}

	console.log("Testing getGuild...");
	const guild = await allGet.getGuild(client, "785107327413911592")
	console.log(typeof guild?.id === "string");

	console.log("Testing getUser...");
	console.log(typeof (await allGet.getUser(client, "785082790089719828"))?.id === "string");

	console.log("Testing getChannel...");
	console.log(typeof (await allGet.getChannel(client, "1157047546657652786"))?.id === "string");

	console.log("Testing getEmoji...");
	console.log(typeof (await allGet.getEmoji(client, "1260198905564499990"))?.id === "string");

	console.log("Testing getTextChannel...");
	console.log(typeof (await allGet.getTextChannel(client, "1157047546657652786"))?.id === "string");

	console.log("Testing getVoiceChannel...");
	console.log(typeof (await allGet.getVoiceChannel(client, "1247459651436548168"))?.id === "string");

	console.log("Testing getCategoryChannel...");
	console.log(typeof (await allGet.getCategoryChannel(client, "1064500387995983872"))?.id === "string");

	console.log("Testing getDMChannel...");
	console.log(typeof (await allGet.getDMChannel(client, "1057686950229852251"))?.id === "string");

	console.log("Testing getAnyThread...");
	console.log(typeof (await allGet.getAnyThread(client, "1264927327951912960"))?.id === "string");

	if (!guild) return

	console.log("Testing guildGetMember...");
	console.log(typeof (await allGet.guildGetMember(guild, "785082790089719828"))?.id === "string")

	console.log("Testing guildGetInvite...");
	console.log(typeof (await allGet.guildGetInvite(guild, "KYpE44UxCP"))?.url === "string") // you can stole invite id xd

	console.log("Testing guildGetBan...");
	console.log(typeof (await allGet.guildGetBan(guild, "310848622642069504"))?.user.id === "string")

	console.log("Testing guildGetPresence...");
	console.log(typeof (await allGet.guildGetPresence(guild, "1090762494366187630"))?.user?.id === "string")

	console.log("Testing guildGetRole...");
	console.log(typeof (await allGet.guildGetRole(guild, "1090928583482036275"))?.id === "string")

	console.log("Skip testing guildGetScheduledEvent...");
	//console.log(typeof (await allGet.guildGetScheduledEvent(guild, "idk"))?.id === "string")

	console.log("Testing guildGetSticker...");
	console.log(typeof (await allGet.guildGetSticker(guild, "1265657039728803934"))?.id === "string")

	console.log("Testing guildGetVoiceState...");
	console.log(typeof (await allGet.guildGetVoiceState(guild, "509734900182548489"))?.id === "string")

	console.log("All tests trying!");

	await client.destroy();
});

bot.login(process.env.token)