declare module "sdb-getall" {
	import * as Discord from "discord.js";
	import { BaseManagers } from "./types";

	export function baseFetchIfCan(
		base: BaseManagers,
		id: Discord.Snowflake,
	): Promise<any | null>;

	export function getAnythingFrom(
		base: BaseManagers,
		id: Discord.Snowflake,
		fetchOnly?: boolean,
	): Promise<any | null>;

	export function getGuild(
		client: Discord.Client<true>,
		id: Discord.Snowflake,
	): Promise<Discord.Guild | null>;

	export function getUser(
		client: Discord.Client<true>,
		id: Discord.Snowflake,
	): Promise<Discord.User | null>;

	export function getChannel(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.BaseChannel | null>;

	export function getTextChannel(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.TextBasedChannel | null>;

	export function getVoiceChannel(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.VoiceBasedChannel | null>;

	export function getCategoryChannel(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.CategoryChannel | null>;

	export function getDMChannel(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.DMChannel | null>;

	export function getAnyThread(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.AnyThreadChannel | null>;

	export function getEmoji(
		entry: Discord.Client<true> | Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.GuildEmoji | null>;

	export function guildGetMember(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.GuildMember | null>;

	export function guildGetChannel(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.GuildBasedChannel | null>;

	export function guildGetTextBasedChannel(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.GuildTextBasedChannel | null>;

	export function guildGetVoiceChannel(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.VoiceBasedChannel | null>;

	export function guildGetInvite(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.Invite | null>;

	export function guildGetBan(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.GuildBan | null>;

	export function guildGetPresence(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.Presence | null>;

	export function guildGetRole(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.Role | null>;

	export function guildGetScheduledEvent(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.GuildScheduledEvent | null>;

	export function guildGetSticker(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.Sticker | null>;

	export function guildGetVoiceState(
		guild: Discord.Guild,
		id: Discord.Snowflake,
	): Promise<Discord.VoiceState | null>;


	export function channelGetMessage(
		channel: Discord.TextBasedChannel | Discord.VoiceBasedChannel | Discord.DMChannel | Discord.ThreadChannel | Discord.GuildTextBasedChannel | Discord.BaseGuildTextChannel | Discord.BaseGuildVoiceChannel,
		id: Discord.Snowflake,
	): Promise<Discord.Message | null>;
}
