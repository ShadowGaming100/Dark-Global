const connections = (`${process.cwd()}/Structures/Settings/connections.json`)
const settings = require(`${process.cwd()}/Structures/Settings/settings.json`)
const channels = require(`${process.cwd()}/Structures/Settings/channels.json`)
const emoji = require(`${process.cwd()}/Structures/Settings/emoji.json`)
const slashCommands = require(`${process.cwd()}/Structures/Settings/slashCommands.json`)
const module_export = require(`${process.cwd()}/Structures/Settings/module_export.json`)
const Embed = require(`${process.cwd()}/Structures/Settings/embed.json`)

module.exports = (client, id) => {
    console.log(` || <==> || [${String(new Date).split(" ", 5).join(" ")}] || <==> || Shard #${id} Ready || <==> ||`)
}