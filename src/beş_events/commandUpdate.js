const client = global.client;
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits, SelectMenuBuilder, ActivityType } = require("discord.js");
const beş_config = require("../../beş_config");
const ms = require('ms');
module.exports = async (oldMessage,newMessage) => {

    if (beş_config.prefix && !newMessage.content.startsWith(beş_config.prefix))return;
    const args = newMessage.content.slice(1).trim().split(/ +/g);
    const commands = args.shift().toLowerCase();
    const cmd = client.commands.get(commands) || [...client.commands.values()].find((e) => e.aliases && e.aliases.includes(commands));
    const beş_embed = new EmbedBuilder()
    .setColor(`#2f3136`)
    .setAuthor({ name: newMessage.member.displayName, iconURL: newMessage.author.avatarURL({ dynamic: true, size: 2048 }) })
    .setFooter({ text: beş_config.footer ? beş_config.footer : `SEHER BİR TANE`, iconURL: newMessage.author.avatarURL({ dynamic: true, size: 2048 }) })
    if (cmd) {
        cmd.execute(client, newMessage, args, beş_embed);
    }
}

module.exports.conf = { 
name: "messageUpdate"
}