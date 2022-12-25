//=====================================| Import the Module |=====================================\\
const { Client, EmbedBuilder } = require("discord.js")
const ChannelID = process.env.
require('colors');
//======================< Json's Files >======================\\

const connections = (`${process.cwd()}/Structures/Settings/connections.json`)
const settings = require(`${process.cwd()}/Structures/Settings/settings.json`)
const channels = require(`${process.cwd()}/Structures/Settings/channels.json`)
const emoji = require(`${process.cwd()}/Structures/Settings/emoji.json`)
const slashCommands = require(`${process.cwd()}/Structures/Settings/slashCommands.json`)
const module_exports = require(`${process.cwd()}/Structures/Settings/module_export.json`)
const embed = require(`${process.cwd()}/Structures/Settings/embed.json`)
const handlers = require(`${process.cwd()}/Structures/Settings/handlers.json`)

// ========================================| Code |======================================= \\

module.exports = async (client) => {
    if( `${handlers.antiCrash}` || process.env.antiCrash === "true"){
      
    process.on('multipleResolves', (type, promise, reason) => {
        console.log(`[MULTIPLE RESOLVES] `.bold.red);
        console.log(type, promise, reason)
    })

    process.on('unhandledRejection', (reason, promise) => {
        console.log(`[UNHANDLED REJECTION] `.bold.red);
        console.log(reason, promise)
    })

    process.on('uncaughtException', (err, origin) => {
        console.log(`[UNCAUGHT EXCEPTION] `.bold.red);
        console.log(err, origin)
    })

    process.on('uncaughtExceptionMonitor', (err, origin) => {
        console.log(`[UNCAUGHT EXCEPTION MONITOR] `.bold.red);
        console.log(err, origin)
    })

    process.on('warning', (warning) => {
        console.log(`[WARNING] `.bold.red + `${warning}`.yellow);
    })

     process.on('message', (message) => {
         console.log(`[MESSAGE] `.bold.red + `${message}`.yellow);
     })
    }
    }