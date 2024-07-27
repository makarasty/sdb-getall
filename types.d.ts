import * as Discord from "discord.js";

export type BaseManagers =
	| Discord.ChannelManager
	| Discord.GuildManager
	| Discord.UserManager
	| Discord.ThreadManager
	| Discord.BaseGuildEmojiManager
	| Discord.GuildMemberManager
	| Discord.GuildInviteManager
	| Discord.GuildBanManager
	| Discord.PresenceManager
	| Discord.RoleManager
	| Discord.GuildScheduledEventManager
	| Discord.GuildStickerManager
	| Discord.VoiceStateManager
	| Discord.CachedManager<any, any, any>;
