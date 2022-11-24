const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu, MessageAttachment } = require('discord.js');
const { author, version } = require(`${process.cwd()}/package.json`);
const connections = (`${process.cwd()}/Structures/Settings/connections.json`)
const settings = require(`${process.cwd()}/Structures/Settings/settings.json`)
const channels = require(`${process.cwd()}/Structures/Settings/channels.json`)
const emoji = require(`${process.cwd()}/Structures/Settings/emoji.json`)
const slashCommands = require(`${process.cwd()}/Structures/Settings/slashCommands.json`)
const module_export = require(`${process.cwd()}/Structures/Settings/module_export.json`)
const Embed = require(`${process.cwd()}/Structures/Settings/embed.json`)
const os = require('os');
require('ms');

//=====================================| Code |=====================================\\

module.exports = {
    name: 'ping',
    aliases: ['ping', 'latency', 'pong'],
    cooldown: 15,
    category: 'Info',
    ownerOnly: false,
    guildOnly: false,
    nsfwOnly: false,
    botPerms: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'USE_EXTERNAL_EMOJIS', 'USE_EXTERNAL_STICKERS', 'SEND_MESSAGES_IN_THREADS'],
    userPerms: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
    descriptions: 'Show the bot\'s ping to the Discord API.',
    usage: 'ping',

    async execute(message, args, client, prefix) {
        try {
            // First
            const msg = await message.reply({
                embeds: [
                    new MessageEmbed()
                        .setColor(Embed.stanbycolor)
                        .setAuthor('Pinging... Please wait.', Embed.loadingicon1)
                ]
            })
            setTimeout(() => {
                // Function Uptime
                    let days = Math.floor(client.uptime / 86400000)
                    let hours = Math.floor(client.uptime / 3600000) % 24
                    let minutes = Math.floor(client.uptime / 60000) % 60
                    let seconds = Math.floor(client.uptime / 1000) % 60

                // Latency Check
                    let webLatency = new Date() - message.createdAt
                    let apiLatency = client.ws.ping
                    let totalLatency = webLatency + apiLatency

                // Emoji
                    let emLatency = {
                        Green: '🟢',
                        Yellow: '🟡',
                        Red: '🔴'
                    }

            // Second
            msg.edit({
                embeds: [
                    new MessageEmbed()
                        .setColor(totalLatency < 200 ? Embed.successcolor : totalLatency < 500 ? Embed.stanbycolor : Embed.wrongcolor)
                        .setTitle(`Returns Latency And API Ping`)
                        .setFields([
                            {
                                name: `📡 Websocket Latency`,
                                value: `\`${webLatency <= 200 ? emLatency.Green : webLatency <= 400 ? emLatency.Yellow : emLatency.Red}\` \`${webLatency}\`ms`,
                                inline: true
                            },
                            {
                                name: `🛰 API Latency`,
                                value: `\`${apiLatency <= 200 ? emLatency.Green : apiLatency <= 400 ? emLatency.Yellow : emLatency.Red}\` \`${apiLatency}\`ms`,
                                inline: true
                            },
                            {
                                name: `⏲ Uptime`,
                                value: `\`${days}Days\` : \`${hours}Hrs\` : \`${minutes}Mins\` : \`${seconds}Secs\``,
                                inline: true
                            }
                        ])
                        .setFooter(`${Embed.footertext} · v${version}`, message.client.user.displayAvatarURL())
                ]
            })
            }, 1500)

        } catch (error) {
        }
    }
}