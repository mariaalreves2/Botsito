"use strict";

require("dotenv").config();
const { Client, Intents } = require("discord.js");

console.log("Here we go again 🕶");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;
const BOT_CHANNEL = process.env.BOTCHANNEL;

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready! 🤖");
});
const MESSAGE_RESPONSE = ["Mundo 🌍", "Cómo estás?", "Qué tal?"];
//
function gotMessage(message){
  //console.log("New Message!");
  /*if (message.content === "hola"){
      message.reply("mundo ");
  }*/
  /*if (message.content.match(/([])/)){//expresiones regulares
    message.reply("mundo ");
  }*/
  /*if (message.channel.id === "912661835705106486'" &&
      message.content === "hola"){
        message.channel.send("mundo :earth_americas: ")
    }*/
  if (message.channel.id === BOT_CHANNEL && message.content === "hola" && !message.author.bot){
      let randomIndex = Math.floor(Math.random() * MESSAGE_RESPONSE.length);
      message.channel.send(MESSAGE_RESPONSE[randomIndex]);
  }
}

client.on("messageCreate",gotMessage);

// Login to Discord with your client's token
client.login(TOKEN);
