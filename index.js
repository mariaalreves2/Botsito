"use strict";
class Pila{//clase con la que se manejará la pila
  constructor(){//se inicia una lista
      this.items = {};
      this.top = 0;
  };
  
  push(data){//para insertar elementos los guarda al principio de la lista para que funcione como una pila
      this.top++;
      this.items[this.top] = data;
  };

  pop(){//quita el primer elemento de la lista para que funcione como una pila
      let deletedData;

      if(this.top !== 0){
          deletedData = this.items[this.top];
          delete this.items[this.top];
          this.top--;
          return deletedData;
      };
  };

  getSize(){//regresa el tamaño de la pila
      return this.top;
  };

  isEmpty(){//revisa que la pila esté vacía
      if(!this.getSize()){
          return true;
      }else{
          return false;
      }
  };

  peek(){//regresa el elemento que esté al principio de la pila
      if(this.isEmpty()){
          return null;
      };

      return this.items[this.top];
  };

  print(){//imprime la pila
      let result = '';
      for(let i = this.top; i > 0; i--){
          result += this.items[i] + ' ';
      };
      return result;
  };
};
//código necesario para poder hacer que funcione el bot
require("dotenv").config();
const { Client, Intents } = require("discord.js");

console.log("Here we go again 🕶");

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});
const TOKEN = process.env.TOKEN;
const BOT_CHANNEL = process.env.BOTCHANNEL;


client.once("ready", () => {
  console.log("Ready! 🤖");
});

function gotMessage(message){//tiene como parámetro lo que ingrese el usuario en el chat del bot
 
  if(message.channel.id===BOT_CHANNEL && !message.author.bot){//si se encuentra en el canal del bot y el mensaje no lo dio el bot
    let cadena=message.content;//guarda como cadena el contenido de lo que ingreso el usuario
    let Σ = [['0','1', '2', '3', '4', '5', '6', '7', '8', '9'], ['A', 'B', 'C', 'D', 'E', 'F']];//alfabeto que tendrán los aceptadores
    var estado=0;
    message.channel.send("Revisando que sea un color cálido...");
    message.channel.send("q0");
    //parte con NFA
    for(var i=0; i<Σ[1].length;i++){//Revisa si se pasa al estado q1 
      if(cadena[0]==Σ[1][i]){//Revisa si la posición de la cadena cuenta con los valores A,B,C,D,E o F
        message.channel.send("q1");
        estado=1;
        break;
      }
    }
    if(estado==1){//Revisa si pasa al estado q2
      for(var i=0; i<Σ[0].length;i++){
        if(cadena[1]==Σ[0][i]){//Revisa si la posición de la cadena cuenta con los valores 0,1,2,3,4,5,6,7,8,9
          message.channel.send("q2");
          estado=2;
          break;
        }
      }
      for(var i=0; i<Σ[1].length;i++){
        if(cadena[1]==Σ[1][i]){//Revisa si la posición de la cadena cuenta con los valores A,B,C,D,E o F
          message.channel.send("q2");
          estado=2;
          break;
        }
      }
    }
    if(estado==2){//Revisa si pasa al estado q3
      for(var i=0; i<Σ[0].length;i++){
        if(cadena[2]==Σ[0][i]){//Revisa si la posición de la cadena cuenta con los valores 0,1,2,3,4,5,6,7,8,9
          message.channel.send("q3");
          estado=3;
          break;
        }
      }
      for(var i=0; i<Σ[1].length;i++){
        if(cadena[2]==Σ[1][i]){//Revisa si la posición de la cadena cuenta con los valores A,B,C,D,E o F
          message.channel.send("q3");
          estado=3;
          break;
        }
      }
    }
    if(estado==3){//Revisa si pasa al estado q4
      for(var i=0; i<Σ[0].length;i++){
        if(cadena[3]==Σ[0][i]){//Revisa si la posición de la cadena cuenta con los valores 0,1,2,3,4,5,6,7,8,9
          message.channel.send("q4");
          estado=4;
          break;
        }
      }
      for(var i=0; i<Σ[1].length;i++){
        if(cadena[3]==Σ[1][i]){//Revisa si la posición de la cadena cuenta con los valores A,B,C,D,E o F
          message.channel.send("q4");
          estado=4;
          break;
        }
      }
    }
    if(estado==4){//Revisa si pasa al estado q5
      for(var i=0; i<Σ[1].length;i++){
        if(cadena[4]==Σ[0][i]){//Revisa si la posición de la cadena cuenta con los valores 0,1,2,3,4,5,6,7,8,9
          message.channel.send("q5");
          estado=5;
          break;
        }
      }
    }
    if(estado==5){//Revisa si pasa al estado q6
      for(var i=0; i<Σ[0].length;i++){
        if(cadena[5]==Σ[0][i]){//Revisa si la posición de la cadena cuenta con los valores 0,1,2,3,4,5,6,7,8,9
          message.channel.send("q6");
          estado=6;
          break;
        }
      }
      for(var i=0; i<Σ[1].length;i++){
        if(cadena[5]==Σ[1][i]){//Revisa si la posición de la cadena cuenta con los valores A,B,C,D,E o F
          message.channel.send("q6");
          estado=6;
          break;
        }
      }
    }
    if(estado==6&&cadena[6]==null){//si llega al estado q6 y ya no hay más elementos en la cadena es un color cálido
      message.channel.send("El valor de "+cadena+" es un color cálido");
    }
   
  else{//si no llega al estado q6 se revisa si es un color frío
    message.channel.send("El valor de "+cadena+" no es un color cálido");
    message.channel.send("Revisando que sea un color frío...");
    let Q = ["q0", "q1", "q2", "q3"];//lista con los estados
    let Γ = ["Z", "0", "1"];//lista con los valores posibles de la pila
    //let δ = [ [Q[0], Σ[0], Γ[0]], [Q[1], Σ, Γ[2]], [Q[1], Σ[1], Γ[1]], [Q[2], Σ, Γ[2]] ];
    //let δ = [ ["q0", Σ[0], "Z"], ["q1", Σ, "1"], ["q1", Σ[1], "0"], ["q2", Σ, "1"]];
    var qi = Q[0];//se guarda como es estado actual a q0
    var qf = Q[3];//se guarda como estado final a q3
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
  
        if(q == Q[0] && pila.peek() == 'Z'){//revisa si el estado está en q0 y el inicio de la pila tenga una Z
          message.channel.send("q0");//manda el estado q0
            for(var i = 0; i < Σ[0].length; i++){
                if(cadena[0] == Σ[0][i]){//si la cadena en la posición tiene algún valor de 0,1,2,3,4,5,6,7,8,9
                  //no saca nada de la pila y queda la pila 11101Z
                    pila.pop();//saca un elemento de la pila
                    pila.push("1"); 
                    pila.push("0");
                    pila.push("1");
                    pila.push("1");
                    pila.push("1");
                    q = Q[1];
                    siguiente_estado = true;//indica que hace la transición de estado
                    break;
                };
            };
  
            if(siguiente_estado == false){//si no hace la transición de estado, la cadena no es aceptada
                no_aceptada = true;
            };
            siguiente_estado = false;//se marca que todavia 
        };
  
        if(q == Q[1] && pila.peek() == '1'){//si se está en el estado q1 y la pila tiene un 1
          message.channel.send("q1");
          /*va a pasar al estado q2 si tiene alguno de los elementos del alfabeto 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F 
          en las tres posiciones siguientes*/
            for(var j = 0; j < 3; j++){
                for(var k = 0; k < Σ[0].length; k++){
                    if(cadena[j] == Σ[0][k]){
                        pila.pop(); //saca un elemento de la pila
                        q = Q[1];//se pasa al estado q1
                        siguiente_estado = true;//indica que hace la transición 
                        break;
                    };
                };
        
                for(var k = 0; k < Σ[1].length; k++){
                    if(cadena[j] == Σ[1][k]){
                        pila.pop();//saca un elemento de la pila
                        q = Q[1];//se pasa al estado q1
                        siguiente_estado = true;//indica que hace la transición 
                        break;
                    }
                };
            };
  
            if(siguiente_estado == false){//si no hace la transición de estado, la cadena no es aceptada
                no_aceptada = true;
            };
            siguiente_estado = false;//reinicia la bandera de la transición 
        };
  
        if(q == Q[1] && pila.peek() == '0'){//si esta en el estado q1 y la pila tiene un cero
            for(var i = 0; i < Σ[1].length; i++){//va a revisar que el elemento de la cadena sea A,B,C,D,E o F
                if(cadena[4] == Σ[1][i]){
                    pila.pop();
                    q = Q[2];//se pasa al estado q2
                    siguiente_estado = true;
                    break;
                };
            };  
            if(siguiente_estado == false){//si no hace la transición de estado, la cadena no es aceptada
                no_aceptada = true;
            };
            siguiente_estado = false;//reinicia la bandera de la transición 
        };
  
        if(q == Q[2] && pila.peek() == '1'){//si llega al estado q2 y tiene un 1 en la pila
          message.channel.send("q2");//manda que llegó al estado q2
            for(var k = 0; k < Σ[0].length; k++){
              //revisa si en esa posición tiene algún elemento del alfabeto
                if(cadena[5] == Σ[0][k]){
                    pila.pop(); //saca un elemento de la pila
                    q = Q[3];//se pasa al estado q3
                    break;
                };
            };
  
            for(var i = 0; i < Σ[1].length; i++){
                if(cadena[5] == Σ[1][i]){
                    pila.pop(); //saca un elemento de la pila
                    q = Q[3];//se pasa al estado q3
                    break;
                };
            };
        };
        
        
    //};
    /*console.log(q);
    console.log(pila);
    console.log(pila.isEmpty);
    console.log(no_aceptada);*/
    if(q == qf && pila.isEmpty && no_aceptada == false){//si la pila está vacía, se llega al estado final y la cadena ha sido aceptada
        message.channel.send("q3");//se manda que llegó al estado q3
        if(cadena[6]==null){//si ya no hay más elementos en la cadena, es uncolor frío
          message.channel.send("El valor de "+cadena+" es un color frío");
        }
        else{//si hay más elementos de la cadena no es un color válido
          message.channel.send("La cadena tiene más elementos de los esperados");
        }
    }else{  //en caso de que no esté dentro de la clasificación de frío o cálido, no se puede determinar por este método
        message.channel.send("No se conoce su clasificación");
    }
  }
  
}

}

client.on("messageCreate",gotMessage);

client.login(TOKEN);
