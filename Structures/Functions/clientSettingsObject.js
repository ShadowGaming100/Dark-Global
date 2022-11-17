
 // Import the Module
const { Client, GatewayIntentBits, Partials } = require('discord.js');
// loading jsons
const settings = require(`${process.cwd()}/Structures/Settings/settings.json`)
//Code

function clientSettingsObject() {
    return {
        shards: 'auto',
        allowedMentions: {
            parse: ['roles', 'users', 'everyone'],
            repliedUser: settings.Bot.repliedUser,
        },
        failIfNotExists: false,
        partials: [
            Partials.Channel,
            Partials.GuildMember,
            Partials.GuildScheduledEvent,
            Partials.Message,
            Partials.Reaction,
            Partials.ThreadMember,
            Partials.User
        ],
        // intents: 32767,
        intents: [
            GatewayIntentBits.DirectMessageReactions,
            GatewayIntentBits.DirectMessageTyping,
            GatewayIntentBits.DirectMessages,
            GatewayIntentBits.GuildBans,
            GatewayIntentBits.GuildEmojisAndStickers,
            GatewayIntentBits.GuildIntegrations,
            GatewayIntentBits.GuildInvites,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessageReactions,
            GatewayIntentBits.GuildMessageTyping,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildPresences,
            GatewayIntentBits.GuildScheduledEvents,
            GatewayIntentBits.GuildVoiceStates,
            GatewayIntentBits.GuildWebhooks,
            GatewayIntentBits.Guilds,
            GatewayIntentBits.MessageContent,
        ],
        messageCacheMaxSize: 50,
        messageCacheLifetime: 60,
        messageSweepInterval: 60,
    };
};

module.exports = clientSettingsObject;
