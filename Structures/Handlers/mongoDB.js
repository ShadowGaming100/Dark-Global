//=====================================| Import the Module |=====================================\\
const mongoose = require("mongoose");

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
    if( `${handlers.mongoDB}` || process.env.mongoDB === "true"){

async function mongoose(client, color) {


    mongoose.set("strictQuery", false);
    mongoose.connection.on("connecting", async () => {
        console.log(`${color.bold.yellow(`[DATABASE]`)} ` + `Mongoose is connecting...`.yellow);
    });

    mongoose.connect(process.env.MONGO_URI,  {
        keepAlive: true,
        autoIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 10000
    });

    mongoose.connection.on("connected", async () => {
        console.log(`${color.bold.green(`[DATABASE]`)} ` + `Mongoose successfully connected!`.yellow);
    });
    mongoose.connection.on("disconnected", async () => {
        console.log(`${color.bold.red(`[DATABASE]`)} ` + `Mongoose connection lost!`.yellow);
    });
    mongoose.connection.on("error", async (error) => {
        console.log(`${color.bold.red(`[DATABASE]`)} ` + `Mongoose connection error! `.yellow + `\n${error.stack}`.bgRed);
    });
};
    }
}


module.exports = { mongoose };