//Import the Module
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectmenu, MessageAttachment, Interaction, Discord, InteractionCreate, Client, Collection } = require('discord.js');
const { QuickDB } = require("quick.db");
const clientSettingsObject = require(`${process.cwd()}/Structures/Functions/clientSettingsObject.js`);
const client = new Client(clientSettingsObject());
require('dotenv').config();
require('colors');
require('ms');

// loading JSON's files
const connections = require('./Structures/Settings/connections.json')
const settings = require('./Structures/Settings/settings.json')
const channels = require('./Structures/Settings/channels.json')
const emoji = require('./Structures/Settings/emoji.json')

// creating/loading database
 const db = new QuickDB({ filePath: "Database/settings.sqlite"});

//check if in connections hosting is set to true
    if( `${connections.hosting}` || process.env.hosting === "true"){

//if set to true it create a server 
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
    }

//login to bot
