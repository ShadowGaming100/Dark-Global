// Import the Module

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectmenu, MessageAttachment, Interaction, Discord, InteractionCreate, Client, Collection } = require('discord.js');

//======================< Client >======================\\

const clientSettingsObject = require(`${process.cwd()}/Structures/Functions/clientSettingsObject.js`);
const client = new Client(clientSettingsObject());
const color = require("colors");

//======================< Json's Files >======================\\

const connections = (`${process.cwd()}/Structures/Settings/connections.json`)
const settings = require(`${process.cwd()}/Structures/Settings/settings.json`)
const channels = require(`${process.cwd()}/Structures/Settings/channels.json`)
const emoji = require(`${process.cwd()}/Structures/Settings/emoji.json`)
const slashCommands = require(`${process.cwd()}/Structures/Settings/slashCommands.json`)
const module_exports = require(`${process.cwd()}/Structures/Settings/module_export.json`)
const embed = require(`${process.cwd()}/Structures/Settings/embed.json`)
const handlers = require(`${process.cwd()}/Structures/Settings/handlers.json`)

//======================< Function >======================\\

const { loadSlashCommands } = require("./Structures/Handlers/Loaders/loadSlashCommands.js");
const { loadCommands } = require("./Structures/Handlers/Loaders/loadCommands.js");
const { loadEvents } = require("./Structures/Handlers/Loaders/loadEvents.js");
const { mongoose } = require("./Structures/Handlers/mongoDB.js");

//======================< Collection >======================\\

client.slashCommands = new Collection();
client.messageCommands = new Collection();
client.events = new Collection();
//======================< Handlers >======================\\

['antiCrash.js']
.forEach(handler => {
    require(`${process.cwd()}/Structures/Handlers/${handler}`)(client);
});
client.on("ready", () => {
  
// CHECKING IF SET TRUE IN connections.json in `hosting` \\
  
    if( `${connections.hosting}` || process.env.hosting === "true"){

// CREATING SERVER IF SET TO TRUE IN connections.json IN hosting \\
      
const express = require('express');
const path = require('path');
const app = express();
const { rateLimit } = require('express-rate-limit')
const port = process.env.PORT || connections.port || 80;

// sendFile will go here \\

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes \\
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes) \\
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers \\
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers \\
})
app.use(limiter)
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/Website/index.html'));
});

app.listen(port);
console.log(`Server started at ${port}`);
    }
})

//======================< Login >======================\\

client.login(process.env.Token).then(() => {
    loadEvents(client, color);
    loadCommands(client, color);
    mongoose(client, color);
}).catch(err => {
    console.log(`${color.bold.red(`[INDEX ERROR]`)} ` + `${err}`.bgRed);
});

module.exports = client;
 