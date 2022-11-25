// Import the Module

const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectmenu, MessageAttachment, Interaction, Discord, InteractionCreate, Client, Collection } = require('discord.js');
const { QuickDB } = require("quick.db");
const clientSettingsObject = require(`${process.cwd()}/Structures/Functions/clientSettingsObject.js`);
const client = new Client(clientSettingsObject());
require('dotenv').config();
require('colors');
require('ms');

// LOADING.JSON`S FILES

const connections = (`${process.cwd()}/Structures/Settings/connections.json`)
const settings = require(`${process.cwd()}/Structures/Settings/settings.json`)
const channels = require(`${process.cwd()}/Structures/Settings/channels.json`)
const emoji = require(`${process.cwd()}/Structures/Settings/emoji.json`)
const slashCommands = require(`${process.cwd()}/Structures/Settings/slashCommands.json`)
const module_export = require(`${process.cwd()}/Structures/Settings/module_export.json`)
const Embed = require(`${process.cwd()}/Structures/Settings/embed.json`)

// COLLECTIONS

client.slashCommands = new Collection();
client.categories = new Collection();
client.cooldowns = new Collection();
client.commands = new Collection();
client.buttons = new Collection();
client.aliases = new Collection();
client.events = new Collection();

// HANDLERS 

['antiCrash.js', `events.js`, `messageCommands`]
.forEach(handler => {
    require(`${process.cwd()}/Structures/Handlers/${handler}`)(client);
});
// CREATING OR LOADING DATABASE

 const db = new QuickDB({ filePath: "Database/settings.sqlite"});

client.on("ready", () => {
// CHECKING IF SET TRUE IN connections.json IN hosting
    if( `${connections.hosting}` || process.env.hosting === "true"){

// CREATING SERVER IF SET TO TRUE IN connections.json IN hosting
const express = require('express');
const path = require('path');
const app = express();
const { rateLimit } = require('express-rate-limit')
const port = process.env.PORT || connections.port || 80;

// sendFile will go here

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
app.use(limiter)
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/Website/index.html'));
});

app.listen(port);
console.log(`Server started at ${port}`);
    }
})

// LOGIN TO BOT

client.login(process.env.Token || settings.Application.token);
 