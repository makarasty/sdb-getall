const Discord = require("discord.js");

/**
 * @param {Discord.ChannelManager
 * | Discord.GuildManager
 * | Discord.UserManager
 * | Discord.ThreadManager
 * | Discord.BaseGuildEmojiManager
 * | Discord.GuildMemberManager
 * | Discord.GuildInviteManager
 * | Discord.GuildBanManager
 * | Discord.PresenceManager
 * | Discord.RoleManager
 * | Discord.GuildScheduledEventManager
 * | Discord.GuildStickerManager
 * | Discord.VoiceStateManager} base
 * @param {Discord.Snowflake} id
 */
async function getAnythingFrom(base, id) {
	if (!base || !id) return null;

	try {
		return base.cache.has(id)
			? base.cache.get(id) || null
			: 'fetch' in base
				? (await base.fetch(id)) || null
				: null;
	} catch (error) {
		return null;
	}
}

/**
 * @param {Discord.Client<true>} client
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.Guild?>}
 */
async function getGuild(client, id) {
	const guild = await getAnythingFrom(client?.guilds, id);

	return guild instanceof Discord.Guild ? guild : null;
}

/**
 * @param {Discord.Client<true>} client
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.User?>}
 */
async function getUser(client, id) {
	const user = await getAnythingFrom(client?.users, id);

	return user instanceof Discord.User ? user : null;
}

/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.BaseChannel?>}
 */
async function getChannel(entry, id) {
	const channel = await getAnythingFrom(entry?.channels, id);

	return channel instanceof Discord.BaseChannel ? channel : null;
}

/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.TextBasedChannel?>}
 */
async function getTextChannel(entry, id) {
	const text = await getChannel(entry, id);

	return text?.isTextBased() ? text : null;
}

/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.VoiceBasedChannel?>}
 */
async function getVoiceChannel(entry, id) {
	const voice = await getChannel(entry, id);

	return voice?.isVoiceBased() ? voice : null;
}

/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.CategoryChannel?>}
 */
async function getCategoryChannel(entry, id) {
	const category = await getChannel(entry, id);

	return category instanceof Discord.CategoryChannel ? category : null;
}

/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 * @returns {Promise<(Discord.PartialGroupDMChannel
 * | Discord.DMChannel
 * | Discord.PartialDMChannel)?>}
 */
async function getDMChannel(entry, id) {
	const dm = await getChannel(entry, id);

	return dm?.isDMBased() ? dm : null;
}

/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 * @returns {Promise<(Discord.AnyThreadChannel)?>}
 */
async function getAnyThread(entry, id) {
	const thread = await getChannel(entry, id);

	return thread?.isThread() ? thread : null;
}

/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.GuildEmoji?>}
 */
async function getEmoji(entry, id) {
	const emoji = await getAnythingFrom(entry?.emojis, id)

	return emoji instanceof Discord.GuildEmoji ? emoji : null;
}

/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.GuildMember?>}
 */
async function guildGetMember(guild, id) {
	const member = await getAnythingFrom(guild?.members, id)

	return member instanceof Discord.GuildMember ? member : null;
}

/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.Invite?>}
 */
async function guildGetInvite(guild, id) {
	const invite = await getAnythingFrom(guild?.invites, id)

	return invite instanceof Discord.Invite ? invite : null;
}

/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.GuildBan?>}
 */
async function guildGetBan(guild, id) {
	const ban = await getAnythingFrom(guild?.bans, id)

	return ban instanceof Discord.GuildBan ? ban : null;
}

/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.Presence?>}
 */
async function guildGetPresence(guild, id) {
	const presence = await getAnythingFrom(guild?.presences, id)

	return presence instanceof Discord.Presence ? presence : null;
}

/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.Role?>}
 */
async function guildGetPresence(guild, id) {
	const role = await getAnythingFrom(guild?.roles, id)

	return role instanceof Discord.Role ? role : null;
}

/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.GuildScheduledEvent<Discord.GuildScheduledEventStatus>?>}
 */
async function guildGetScheduledEvent(guild, id) {
	const scheduledEvent = await getAnythingFrom(guild?.scheduledEvents, id)

	return scheduledEvent instanceof Discord.GuildScheduledEvent ? scheduledEvent : null;
}

/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.Sticker?>}
 */
async function guildGetSticker(guild, id) {
	const sticker = await getAnythingFrom(guild?.stickers, id)

	return sticker instanceof Discord.Sticker ? sticker : null;
}

/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 * @returns {Promise<Discord.VoiceState?>}
 */
async function guildGetVoiceState(guild, id) {
	const voiceState = await getAnythingFrom(guild?.voiceStates, id)

	return voiceState instanceof Discord.VoiceState ? voiceState : null;
}

module.exports = {
	getGuild,
	getUser,
	getEmoji,

	getChannel,
	getTextChannel,
	getVoiceChannel,
	getCategoryChannel,
	getDMChannel,

	getAnyThread,

	guildGetMember,
	guildGetInvite,
	guildGetBan,
	guildGetPresence,
	guildGetScheduledEvent,
	guildGetSticker,
	guildGetVoiceState,

}