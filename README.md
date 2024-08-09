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
  ```js
  const result = await allGet.baseFetchIfCan(client.guilds, "785107327413911592");
  ```

- **getAnythingFrom(base, id, fetchOnly = false)**: Retrieves an object from the base, optionally bypassing the cache.
  ```js
  const result = await allGet.getAnythingFrom(client.guilds, "785107327413911592", true);
  ```

### Client Functions

- **getGuild(client, id)**: Retrieves a Guild by its ID.
  ```js
  const guild = await allGet.getGuild(client, "785107327413911592");
  ```

- **getUser(client, id)**: Retrieves a User by its ID.
  ```js
  const user = await allGet.getUser(client, "785082790089719828");
  ```

- **getChannel(client, id)**: Retrieves a Channel by its ID.
  ```js
  const channel = await allGet.getChannel(client, "1157047546657652786");
  ```

- **getTextChannel(client, id)**: Retrieves a Text Channel by its ID.
  ```js
  const textChannel = await allGet.getTextChannel(client, "1157047546657652786");
  ```

- **getVoiceChannel(client, id)**: Retrieves a Voice Channel by its ID.
  ```js
  const voiceChannel = await allGet.getVoiceChannel(client, "1247459651436548168");
  ```

- **getCategoryChannel(client, id)**: Retrieves a Category Channel by its ID.
  ```js
  const categoryChannel = await allGet.getCategoryChannel(client, "1064500387995983872");
  ```

- **getDMChannel(client, id)**: Retrieves a DM Channel by its ID.
  ```js
  const dmChannel = await allGet.getDMChannel(client, "1057686950229852251");
  ```

- **getAnyThread(client, id)**: Retrieves any Thread by its ID.
  ```js
  const thread = await allGet.getAnyThread(client, "1264927327951912960");
  ```

- **getEmoji(client, id)**: Retrieves an Emoji by its ID.
  ```js
  const emoji = await allGet.getEmoji(client, "1260198905564499990");
  ```

### Guild Functions

- **guildGetMember(guild, id)**: Retrieves a Guild Member by its ID.
  ```js
  const member = await allGet.guildGetMember(guild, "785082790089719828");
  ```

- **guildGetInvite(guild, id)**: Retrieves an Invite by its ID.
  ```js
  const invite = await allGet.guildGetInvite(guild, "KYpE44UxCP");
  ```

- **guildGetBan(guild, id)**: Retrieves a Ban by its ID.
  ```js
  const ban = await allGet.guildGetBan(guild, "310848622642069504");
  ```

- **guildGetPresence(guild, id)**: Retrieves a Presence by its ID.
  ```js
  const presence = await allGet.guildGetPresence(guild, "1090762494366187630");
  ```

- **guildGetRole(guild, id)**: Retrieves a Role by its ID.
  ```js
  const role = await allGet.guildGetRole(guild, "1090928583482036275");
  ```

- **guildGetScheduledEvent(guild, id)**: Retrieves a Scheduled Event by its ID.
  ```js
  const event = await allGet.guildGetScheduledEvent(guild, "1265657039728803934");
  ```

- **guildGetSticker(guild, id)**: Retrieves a Sticker by its ID.
  ```js
  const sticker = await allGet.guildGetSticker(guild, "1265657039728803934");
  ```

- **guildGetVoiceState(guild, id)**: Retrieves a Voice State by its ID.
  ```js
  const voiceState = await allGet.guildGetVoiceState(guild, "509734900182548489");
  ```

### Channel Functions

- **channelGetMessage(channel, id)**: Retrieves a Message by its ID.
  ```js
  const message = await allGet.channelGetMessage(textChannel, "1265657039728803934");
  ```

## Notes

Some functions have alternative versions:
- **guildGetChannel(guild, id)**: Retrieves any Channel in the guild.
- **guildGetTextBasedChannel(guild, id)**: Retrieves any Text-based Channel in the guild.
- **guildGetVoiceChannel(guild, id)**: Retrieves any Voice-based Channel in the guild.

These functions are available but may not be as type-safe as their more specific counterparts.

*Made with ♥*