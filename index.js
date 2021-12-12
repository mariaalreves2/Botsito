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
  if(message.channel.id===BOT_CHANNEL && !message.author.bot){
    let cadena=message.content;
    let band=false;
    let i=0;
    //message.channel.send("q0");
    /*if(cadena[0]=='b'){
      do{
        //message.channel.send("q1");
        i++;
      }while(cadena[i]=='b');
      if(cadena[i]=='a'){
        band=true;
        i++;
        while(cadena[i]=='a'){
          i++;
        }
        if(cadena.length!=i){
          band=false;
        }
      }
      else{
        band=false;
      }
    }
    if(cadena[0]=='a'){
      band=true;
      i++;
      while(cadena[i]=='a'){
        i++;
      }
      if(cadena.length!=i){
        band=false;
      }
    }
    if(band==true){
      message.channel.send("Desbloqueo completado con el lenguaje {b^ma^n:m>=0,n>0}");
    }
    else{
      message.channel.send("Desbloqueo sin éxito");
    }
    band=false;
    if(cadena[0]=='a'){

    }*///código de los lenguajes 
    /*cadena[]=='A'||cadena[]=='B'||cadena[]=='C'||cadena[]=='D'||cadena[]=='E'||cadena[]=='F'
    ||cadena[]=='0'||cadena[]=='1'||cadena[]=='2'||cadena[]=='3'||cadena[]=='4'||cadena[]=='5'
    ||cadena[]=='6'||cadena[]=='7'||cadena[]=='8'||cadena[]=='9'*/
    if(cadena[0]=='A'||cadena[0]=='B'||cadena[0]=='C'||cadena[0]=='D'||cadena[0]=='E'||cadena[0]=='F'){
      message.channel.send("q1");
      if(cadena[1]=='A'||cadena[1]=='B'||cadena[1]=='C'||cadena[1]=='D'||cadena[1]=='E'||cadena[1]=='F'
      ||cadena[1]=='0'||cadena[1]=='1'||cadena[1]=='2'||cadena[1]=='3'||cadena[1]=='4'||cadena[1]=='5'
      ||cadena[1]=='6'||cadena[1]=='7'||cadena[1]=='8'||cadena[1]=='9'){
        message.channel.send("q2");
          if(cadena[2]=='A'||cadena[2]=='B'||cadena[2]=='C'||cadena[2]=='D'||cadena[2]=='E'||cadena[2]=='F'
          ||cadena[2]=='0'||cadena[2]=='1'||cadena[2]=='2'||cadena[2]=='3'||cadena[2]=='4'||cadena[2]=='5'
          ||cadena[2]=='6'||cadena[2]=='7'||cadena[2]=='8'||cadena[2]=='9'){
            message.channel.send("q3");
            if(cadena[3]=='A'||cadena[3]=='B'||cadena[3]=='C'||cadena[3]=='D'||cadena[3]=='E'||cadena[3]=='F'
            ||cadena[3]=='0'||cadena[3]=='1'||cadena[3]=='2'||cadena[3]=='3'||cadena[3]=='4'||cadena[3]=='5'
            ||cadena[3]=='6'||cadena[3]=='7'||cadena[3]=='8'||cadena[3]=='9'){
              message.channel.send("q4");
                if(cadena[4]=='0'||cadena[4]=='1'||cadena[4]=='2'||cadena[4]=='3'||cadena[4]=='4'||cadena[4]=='5'
                ||cadena[4]=='6'||cadena[4]=='7'||cadena[4]=='8'||cadena[4]=='9'){
                  message.channel.send("q5");
                    if(cadena[5]=='A'||cadena[5]=='B'||cadena[5]=='C'||cadena[5]=='D'||cadena[5]=='E'||cadena[5]=='F'
                    ||cadena[5]=='0'||cadena[5]=='1'||cadena[5]=='2'||cadena[5]=='3'||cadena[5]=='4'||cadena[5]=='5'
                    ||cadena[5]=='6'||cadena[5]=='7'||cadena[5]=='8'||cadena[5]=='9'){
                      message.channel.send("q6");
                    }
                    if(cadena[6]==null){
                      message.channel.send("El valor de "+cadena+" es un color cálido");
                    }
                    else{
                      message.channel.send("El color ingresado no es válido");
                    }
                }
                
            }
      }
    }
  }
}

}

client.on("messageCreate",gotMessage);

// Login to Discord with your client's token
client.login(TOKEN);
