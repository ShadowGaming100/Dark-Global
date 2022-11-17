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
const emoji = require('./Structures/Settings/emoji.json')
const slashCommands = require('./Structures/Settings/slashCommands.json')
const module_export = require('./Structures/Settings/module_export.json')

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

// CHECKING IF SET TRUE IN connections.json IN hosting
    if( `${connections.hosting}` || process.env.hosting === "true"){

// CREATING SERVER IF SET TO TRUE IN connections.json IN hosting
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
    }

// LOGIN TO BOT
client.login(process.env.TOKEN || settings.Application.token);