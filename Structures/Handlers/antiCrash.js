//=====================================| Import the Module |=====================================\\

require('colors');
const settings = require(`${process.cwd()}/Structures/Settings/settings.json`)
// ========================================| Code |======================================= \\

module.exports = async (client) => {

    if( `${settings.Handlers.antiCrash}` || process.env.antiCrash === "true"){

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

    // process.on('message', (message) => {
    //     console.log(`[MESSAGE] `.bold.red + `${message}`.yellow);
    // })
    }
}