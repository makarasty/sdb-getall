require('dotenv').config();

const Discord = require("discord.js");

const allGet = require("./index.js");

const bot = new Discord.Client({
	intents: 47007
});

bot.once("ready", async (client) => {
	/**
	 * @param {function(any, any): Promise<any | null>} func
	 */
	async function defaultNullTests(func) {
		let allPassed = true;
		const errors = [];

		const tests = [
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
				// @ts-expect-error
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
	console.log(typeof (await allGet.getGuild(client, "785107327413911592"))?.id === "string");

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

	console.log("Testing getDMChannel...");
	console.log(typeof (await allGet.getDMChannel(client, "1057686950229852251"))?.id === "string");

	console.log("Testing getAnyThread...");
	console.log(typeof (await allGet.getAnyThread(client, "1264927327951912960"))?.id === "string");

	console.log("All tests trying!");

	await client.destroy();
});

bot.login(process.env.token)