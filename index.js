// loading JSON's files
const connections = require('./Structures/Settings/connections.json')
const settings = require('./Structures/Settings/settings.json')
const channels = require('./Structures/Settings/channels.json')
const emoji = require('./Structures/Settings/emoji.json')
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
