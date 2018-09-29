const Discord = require("discord.js");

const TOKEN = "NDk1MTkzOTk1ODAzMzYxMjgw.DpFDxw.h4dIuEb7oXPVq2sBwQTpbc7RCHE"
const PREFIX = "!"

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "IDK"
];

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("PatronBot ready to go!");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong:ping_pong: ");
            break;
        case "info":
            message.channel.sendMessage("I'm PatronBot :smiley: , created by Ron{Owner}:wink: ");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]); 
            else message.channel.sendMessage("Can't read that");
            break;
        default:
            message.channel.sendMessage("Invalid command");
    }
});

bot.login(TOKEN);
