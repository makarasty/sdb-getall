const Discord = require("discord.js");
/**
 * @typedef {import('./types.d.ts').BaseManagers} BaseManagers
 */
/**
 * Attempts to retrieve an object using the 'fetch(id)' method if the 'base' object has a 'fetch' method.
 * @param {BaseManagers} base
 * @param {Discord.Snowflake} id
 */
async function baseFetchIfCan(base, id) {
	try {
		return 'fetch' in base ? (await base.fetch(id)) || null : null;
	} catch (error) {
		return null;
	}
}
/**
 * @param {BaseManagers} base
 * @param {Discord.Snowflake} id
 * @param {boolean} [fetchOnly=false] - If true, always trying to fetch the object, doesn't use cache
 */
async function getAnythingFrom(base, id, fetchOnly = false) {
	if (!base || !id) return null;
	if (fetchOnly) return await baseFetchIfCan(base, id);
	return base.cache?.has(id)
		? base.cache.get(id) || null
		: await baseFetchIfCan(base, id);
}
/**
 * @param {Discord.Client<true>} client
 * @param {Discord.Snowflake} id
 */
async function getGuild(client, id) {
	const guild = await getAnythingFrom(client?.guilds, id);
	return guild instanceof Discord.Guild ? guild : null;
}
/**
 * @param {Discord.Client<true>} client
 * @param {Discord.Snowflake} id
 */
async function getUser(client, id) {
	const user = await getAnythingFrom(client?.users, id);
	return user instanceof Discord.User ? user : null;
}
/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 */
async function getChannel(entry, id) {
	const channel = await getAnythingFrom(entry?.channels, id);
	return channel instanceof Discord.BaseChannel ? channel : null;
}
/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 */
async function getTextChannel(entry, id) {
	const text = await getChannel(entry, id);
	return text?.isTextBased() ? text : null;
}
/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 */
async function getVoiceChannel(entry, id) {
	const voice = await getChannel(entry, id);
	return voice?.isVoiceBased() ? voice : null;
}
/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 */
async function getCategoryChannel(entry, id) {
	const category = await getChannel(entry, id);
	return category instanceof Discord.CategoryChannel ? category : null;
}
/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 */
async function getDMChannel(entry, id) {
	const dm = await getChannel(entry, id);
	return dm?.isDMBased() ? dm : null;
}
/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 */
async function getAnyThread(entry, id) {
	const thread = await getChannel(entry, id);
	return thread?.isThread() ? thread : null;
}
/**
 * @param {Discord.Client<true> | Discord.Guild} entry
 * @param {Discord.Snowflake} id
 */
async function getEmoji(entry, id) {
	const emoji = await getAnythingFrom(entry?.emojis, id)
	return emoji instanceof Discord.GuildEmoji ? emoji : null;
}
/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 */
async function guildGetMember(guild, id) {
	const member = await getAnythingFrom(guild?.members, id)
	return member instanceof Discord.GuildMember ? member : null;
}
/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 */
async function guildGetChannel(guild, id) {
	const channel = await getAnythingFrom(guild?.channels, id);
	return channel ? channel : null;
}
/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 */
async function guildGetTextBasedChannel(guild, id) {
	const text = await guildGetChannel(guild, id);
	return text?.isTextBased() && 'guild' in text ? text : null;
}
/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 */
async function guildGetVoiceChannel(guild, id) {
	const voice = await guildGetChannel(guild, id);
	return voice?.isVoiceBased() && 'guild' in voice ? voice : null;
}
/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 */
async function guildGetInvite(guild, id) {
	const invite = await getAnythingFrom(guild?.invites, id)
	return invite instanceof Discord.Invite ? invite : null;
}
/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 */
async function guildGetBan(guild, id) {
	const ban = await getAnythingFrom(guild?.bans, id)
	return ban instanceof Discord.GuildBan ? ban : null;
}
/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 */
async function guildGetPresence(guild, id) {
	const presence = await getAnythingFrom(guild?.presences, id)
	return presence instanceof Discord.Presence ? presence : null;
}
/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 */
async function guildGetRole(guild, id) {
	const role = await getAnythingFrom(guild?.roles, id)
	return role instanceof Discord.Role ? role : null;
}
/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 */
async function guildGetScheduledEvent(guild, id) {
	const scheduledEvent = await getAnythingFrom(guild?.scheduledEvents, id)
	return scheduledEvent instanceof Discord.GuildScheduledEvent ? scheduledEvent : null;
}
/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 */
async function guildGetSticker(guild, id) {
	const sticker = await getAnythingFrom(guild?.stickers, id)
	return sticker instanceof Discord.Sticker ? sticker : null;
}
/**
 * @param {Discord.Guild} guild
 * @param {Discord.Snowflake} id
 */
async function guildGetVoiceState(guild, id) {
	const voiceState = await getAnythingFrom(guild?.voiceStates, id)
	return voiceState instanceof Discord.VoiceState ? voiceState : null;
}
/**
 * @param {Discord.TextBasedChannel} channel
 * @param {Discord.Snowflake} id
 */
async function channelGetMessage(channel, id) {
	const message = await getAnythingFrom(channel?.messages, id)
	return message instanceof Discord.Message ? message : null;
}
module.exports = {
	baseFetchIfCan,
	getAnythingFrom,
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
	guildGetRole,
	guildGetScheduledEvent,
	guildGetSticker,
	guildGetVoiceState,
	channelGetMessage,
	guildGetChannel,
	guildGetTextBasedChannel,
	guildGetVoiceChannel
}