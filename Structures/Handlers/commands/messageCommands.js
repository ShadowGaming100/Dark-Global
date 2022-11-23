//=====================================| Import the Module |=====================================\\

const { readdirSync, read } = require('fs');
require('colors')

// ========================================| Code |======================================= \\

module.exports = async (client) => {
    const commandFolders = readdirSync(`${process.cwd()}/Commands`);
    for (const folder of commandFolders) {
        const commandFiles = readdirSync(`${process.cwd()}/Commands/${folder}/`).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const command = require(`${process.cwd()}/Commands/${folder}/${file}`);
            client.commands.set(command.name, command);
        }
        console.log(`[MESSAGE COMMANDS] `.bold.green + `[${commandFiles.length}] `.cyan + `in `.yellow + `${folder} `.magenta + `was loaded!`.yellow);
    };
};