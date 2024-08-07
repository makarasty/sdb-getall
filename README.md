# sdb-getall

`sdb-getall` is a lightweight and optimized library for `discord.js` version `14` and above. It simplifies the process of retrieving various objects from manager classes in `discord.js`. This library is fully typed with `JSDoc`, making it suitable for bots of any size.

## Installation

```sh
npm install sdb-getall
```

## Dependencies

- `discord.js` version `14`+
- `Node.js` version `16`+

## Usage Example

```js
const allGet = require("sdb-getall");
const Discord = require("discord.js");
const bot = new Discord.Client({ intents: 47007 });

bot.once("ready", async (client) => {
    const guild = await allGet.getGuild(client, "785107327413911592");
    console.log(guild);

    console.log(await allGet.getUser(client, "785082790089719828"));
    console.log(await allGet.getChannel(client, "1157047546657652786"));
    console.log(await allGet.getEmoji(client, "1260198905564499990"));
    console.log(await allGet.getTextChannel(client, "1157047546657652786"));
    console.log(await allGet.getVoiceChannel(client, "1247459651436548168"));
    console.log(await allGet.getCategoryChannel(client, "1064500387995983872"));
    console.log(await allGet.getDMChannel(client, "1057686950229852251"));
    console.log(await allGet.getAnyThread(client, "1264927327951912960"));

    if (!guild) return console.log("No guild :(");

    console.log(await allGet.guildGetMember(guild, "785082790089719828"));
    console.log(await allGet.guildGetInvite(guild, "KYpE44UxCP"));
    console.log(await allGet.guildGetBan(guild, "310848622642069504"));
    console.log(await allGet.guildGetPresence(guild, "1090762494366187630"));
    console.log(await allGet.guildGetRole(guild, "1090928583482036275"));
    console.log(await allGet.guildGetSticker(guild, "1265657039728803934"));
    console.log(await allGet.guildGetVoiceState(guild, "509734900182548489"));
});

bot.login(process.env.TOKEN);
```

## Functions

### Base Functions

- **baseFetchIfCan(base, id)**: Attempts to fetch an object if the base has a fetch method.
- **getAnythingFrom(base, id, fetchOnly = false)**: Retrieves an object from the base, optionally bypassing the cache.

### Client Functions

- **getGuild(client, id)**: Retrieves a Guild by its ID.
- **getUser(client, id)**: Retrieves a User by its ID.
- **getChannel(client, id)**: Retrieves a Channel by its ID.
- **getTextChannel(client, id)**: Retrieves a Text Channel by its ID.
- **getVoiceChannel(client, id)**: Retrieves a Voice Channel by its ID.
- **getCategoryChannel(client, id)**: Retrieves a Category Channel by its ID.
- **getDMChannel(client, id)**: Retrieves a DM Channel by its ID.
- **getAnyThread(client, id)**: Retrieves any Thread by its ID.
- **getEmoji(client, id)**: Retrieves an Emoji by its ID.

### Guild Functions

- **guildGetMember(guild, id)**: Retrieves a Guild Member by its ID.
- **guildGetInvite(guild, id)**: Retrieves an Invite by its ID.
- **guildGetBan(guild, id)**: Retrieves a Ban by its ID.
- **guildGetPresence(guild, id)**: Retrieves a Presence by its ID.
- **guildGetRole(guild, id)**: Retrieves a Role by its ID.
- **guildGetScheduledEvent(guild, id)**: Retrieves a Scheduled Event by its ID.
- **guildGetSticker(guild, id)**: Retrieves a Sticker by its ID.
- **guildGetVoiceState(guild, id)**: Retrieves a Voice State by its ID.

### Channel Functions

- **channelGetMessage(channel, id)**: Retrieves a Message by its ID.

## Notes

Some functions have alternative versions not recommended for use:
- **guildGetChannel(guild, id)**: Retrieves any Channel in the guild.
- **guildGetTextBasedChannel(guild, id)**: Retrieves any Text-based Channel in the guild.
- **guildGetVoiceChannel(guild, id)**: Retrieves any Voice-based Channel in the guild.

*Made with ♥*