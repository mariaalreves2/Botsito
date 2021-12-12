"use strict";
class Pila{
  constructor(){
      this.items = {};
      this.top = 0;
  };
  
  push(data){
      this.top++;
      this.items[this.top] = data;
  };

  pop(){
      let deletedData;

      if(this.top !== 0){
          deletedData = this.items[this.top];
          delete this.items[this.top];
          this.top--;
          return deletedData;
      };
  };

  getSize(){
      return this.top;
  };

  isEmpty(){
      if(!this.getSize()){
          return true;
      }else{
          return false;
      }
  };

  peek(){
      if(this.isEmpty()){
          return null;
      };

      return this.items[this.top];
  };

  print(){
      let result = '';
      for(let i = this.top; i > 0; i--){
          result += this.items[i] + ' ';
      };
      return result;
  };
};
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
    
    /*cadena[]=='A'||cadena[]=='B'||cadena[]=='C'||cadena[]=='D'||cadena[]=='E'||cadena[]=='F'
    ||cadena[]=='0'||cadena[]=='1'||cadena[]=='2'||cadena[]=='3'||cadena[]=='4'||cadena[]=='5'
    ||cadena[]=='6'||cadena[]=='7'||cadena[]=='8'||cadena[]=='9'*/
    //let =['A','B','C','D','E','F','0','1','2','3','4','5','6','7','8','9']
    //let Σ = [['0','1', '2', '3', '4', '5', '6', '7', '8', '9'], ['A', 'B', 'C', 'D', 'E', 'F']];
    /*for(inti=0;i<Σ[1].length;i++ ){
      if(cadena)
    }*/
    message.channel.send("Revisando que sea un color cálido...");
    message.channel.send("q0");
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
                      band=true;
                    }
                    else{
                      band=false;
                    }
                }
                
            }
      }
    }
  }
  if(band){
    message.channel.send("El valor de "+cadena+" es un color cálido");
  }
  else{
    message.channel.send("El valor de "+cadena+" no es un color cálido");
    message.channel.send("Revisando que sea un color frío...");
    let Q = ["q0", "q1", "q2", "q3"];
    let Σ = [['0','1', '2', '3', '4', '5', '6', '7', '8', '9'], ['A', 'B', 'C', 'D', 'E', 'F']];
    let Γ = ["Z", "0", "1"];
    //let δ = [ [Q[0], Σ[0], Γ[0]], [Q[1], Σ, Γ[2]], [Q[1], Σ[1], Γ[1]], [Q[2], Σ, Γ[2]] ];
    //let δ = [ ["q0", Σ[0], "Z"], ["q1", Σ, "1"], ["q1", Σ[1], "0"], ["q2", Σ, "1"]];
    var qi = Q[0];
    var qf = Q[3];
    var S = Γ[0];
  
    //Definir el estado y transición actual
    var q = qi;
    //let δ_actual = δ[0];
  
    //Crear e inicializar la pila con el símbolo inicial
    const pila = new Pila();
    pila.push(S);
  
    var no_aceptada = false;
    var siguiente_estado = false;
  
    //var cadena = "1111FF";
  
    //while(no_aceptada != true){
  
        if(q == Q[0] && pila.peek() == 'Z'){
          message.channel.send("q0");
            for(var i = 0; i < Σ[0].length; i++){
                if(cadena[0] == Σ[0][i]){
                    pila.pop();
                    pila.push("1"); 
                    pila.push("0");
                    pila.push("1");
                    pila.push("1");
                    pila.push("1");
                    q = Q[1];
                    siguiente_estado = true;
                    break;
                };
            };
  
            if(siguiente_estado == false){
                no_aceptada = true;
            };
            siguiente_estado = false;
        };
  
        if(q == Q[1] && pila.peek() == '1'){
          message.channel.send("q1");
            for(var j = 0; j < 3; j++){
                for(var k = 0; k < Σ[0].length; k++){
                    if(cadena[j] == Σ[0][k]){
                        pila.pop(); 
                        q = Q[1];
                        siguiente_estado = true;
                        break;
                    };
                };
        
                for(var k = 0; k < Σ[1].length; k++){
                    if(cadena[j] == Σ[1][k]){
                        pila.pop();
                        q = Q[1];
                        siguiente_estado = true;
                        break;
                    }
                };
            };
  
            if(siguiente_estado == false){
                no_aceptada = true;
            };
            siguiente_estado = false;
        };
  
        if(q == Q[1] && pila.peek() == '0'){
            for(var i = 0; i < Σ[1].length; i++){
                if(cadena[4] == Σ[1][i]){
                    pila.pop();
                    q = Q[2];
                    siguiente_estado = true;
                    break;
                };
            };  
            if(siguiente_estado == false){
                no_aceptada = true;
            };
            siguiente_estado = false;
        };
  
        if(q == Q[2] && pila.peek() == '1'){
          message.channel.send("q2");
            for(var k = 0; k < Σ[0].length; k++){
                if(cadena[5] == Σ[0][k]){
                    pila.pop(); 
                    q = Q[3];
                    break;
                };
            };
  
            for(var i = 0; i < Σ[1].length; i++){
                if(cadena[5] == Σ[1][i]){
                    pila.pop(); 
                    q = Q[3];
                    break;
                };
            };
        };
        
        
    //};
    /*console.log(q);
    console.log(pila);
    console.log(pila.isEmpty);
    console.log(no_aceptada);*/
    if(q == qf && pila.isEmpty && no_aceptada == false){
        message.channel.send("q3");
        message.channel.send("El valor de "+cadena+" es un color frío");
        //message.channel.send("El color ingresado es cálido");
    }else{  
        message.channel.send("No se conoce su clasicación");
    }
  }
  //if(cadena[0])
  
}

}

client.on("messageCreate",gotMessage);

// Login to Discord with your client's token
client.login(TOKEN);
