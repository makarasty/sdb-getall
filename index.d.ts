declare module "sdb-getall" {
	import * as Discord from "discord.js";
	import { BaseManagers } from "types";

	function baseFetchIfCan(
		base: BaseManagers,
		id: Discord.Snowflake,
	): Promise<any | null>;
	function getAnythingFrom(
		base: BaseManagers,
		id: Discord.Snowflake,
		fetchOnly?: boolean,
	): Promise<any | null>;

	function getGuild(
		client: Discord.Client<true>,
		id: Discord.Snowflake,
	): Promise<Discord.Guild | null>;
	function getUser(
		client: Discord.Client<true>,
		id: Discord.Snowflake,
	): Promise<Discord.User | null>;
	function getChannel(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.BaseChannel | null>;
	function getTextChannel(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.TextBasedChannel | null>;
	function getVoiceChannel(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.VoiceBasedChannel | null>;
	function getCategoryChannel(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.CategoryChannel | null>;
	function getDMChannel(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<
		| Discord.PartialGroupDMChannel
		| Discord.DMChannel
		| Discord.PartialDMChannel
		| null
	>;
	function getAnyThread(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.AnyThreadChannel | null>;
	function getEmoji(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.GuildEmoji | null>;
	function guildGetMember(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.GuildMember | null>;
	function guildGetInvite(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.Invite | null>;
	function guildGetBan(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.GuildBan | null>;
	function guildGetPresence(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.Presence | null>;
	function guildGetRole(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.Role | null>;
	function guildGetScheduledEvent(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.GuildScheduledEvent<Discord.GuildScheduledEventStatus> | null>;
	function guildGetSticker(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.Sticker | null>;
	function guildGetVoiceState(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.VoiceState | null>;
	function channelGetMessage(
		channel: Discord.TextBasedChannel,
		id: Discord.Snowflake,
	): Promise<Discord.Message | null>;
}
