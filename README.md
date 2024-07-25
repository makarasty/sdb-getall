# sdb-getall
library for `discord.js` version `14`+ tested on `discord.js` version `14.15.3`, created to simplify getting the necessary features from manager objects `discord.js` is typed with `JSDoc`, takes up little space, optimized, designed to work in bots of any size

# Installing
install `npm i sdb-getall`

# Dependencies
- `discord.js` version `14`+
- `Node.js` version `16`+

# Some usage example
```js
const allGet = require("./index.js"); // require("sdb-getall")
const Discord = require("discord.js");
const bot = new Discord.Client({ intents: 47007 });

bot.once("ready", async (client) => {

	const guild = await allGet.getGuild(client, "785107327413911592", true)
	console.log(guild);

	console.log(await allGet.getUser(client, "785082790089719828"));

	console.log(await allGet.getChannel(client, "1157047546657652786"));

	console.log(await allGet.getEmoji(client, "1260198905564499990"));

	console.log(await allGet.getTextChannel(client, "1157047546657652786"));

	console.log(await allGet.getVoiceChannel(client, "1247459651436548168"));

	console.log(await allGet.getCategoryChannel(client, "1064500387995983872"));

	console.log(await allGet.getDMChannel(client, "1057686950229852251"));

	console.log(await allGet.getAnyThread(client, "1264927327951912960"));

	if (!guild) return console.log("No guild :c")

	console.log(await allGet.guildGetMember(guild, "785082790089719828"))

	console.log(await allGet.guildGetInvite(guild, "KYpE44UxCP")) // you can stole invite id xd

	console.log(await allGet.guildGetBan(guild, "310848622642069504"))

	console.log(await allGet.guildGetPresence(guild, "1090762494366187630"))

	console.log(await allGet.guildGetRole(guild, "1090928583482036275"))

	//console.log(await allGet.guildGetScheduledEvent(guild, "idk"))

	console.log(await allGet.guildGetSticker(guild, "1265657039728803934"))

	console.log(await allGet.guildGetVoiceState(guild, "509734900182548489"))
});

bot.login(process.env.token)
```

*Made with ♥*