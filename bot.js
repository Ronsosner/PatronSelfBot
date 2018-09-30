const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const TOKEN = "NDk1MTkzOTk1ODAzMzYxMjgw.DpFDxw.h4dIuEb7oXPVq2sBwQTpbc7RCHE"
const PREFIX = "!"

function generateHex() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "IDK"
];

var bot = new Discord.Client();

var servers = {};

bot.on("ready", function() {
    console.log("PatronBot ready to go!");
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "general".sendMessage(member.toString) + "Welcom to DisPatrons, enjoy:smiley:");

    member.addRole(member.guild.find("name", "Member", "Support", "Bot", "Admin"));

    member.guild.createRole({
        name: member.user.username,
        color: generateHex(),
        permissions: []
    }).then(function(role){
        member.addRole(role);
    });
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
    }

    var arguments = message.content.substring(PREFIX.length).split(" ");

    switch (arguments[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong:ping_pong: ");
            break;
        case "info":
            message.channel.sendMessage("I'm PatronBot:smiley:, created by Ron{Owner}:wink:");
            break;
        case "8ball":
            if (arguments[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]); 
            else message.channel.sendMessage("Can't read that");
            break;
        case "embed":
            var embed = new Discord.RichEmbed()
                .setDescription("Hello, this is an rich embed..")
                .addField("I'm PatronBot:smiley:", "__________",true)
                .addField("created by Ron{Owner}:wink:", "__________",true)
                .addField("Contact the server team if there is any problem:grin:", "__________",true)
                .setColor("#427df4")
                .setThumbnail(message.author.avatarURL)
            message.channel.sendEmbed(embed);
            break;
        case "noticeme":
            message.channel.sendMessage(message.author.toString() + "Staff");
            break;
            default:
                message.channel.sendMessage("Invalid command");
    }
});

bot.login(TOKEN);
