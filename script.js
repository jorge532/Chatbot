<<<<<<< HEAD
let user = document.getElementById("int");
user.addEventListener("keydown", function(e){
    if(e.code === "Enter"){
        let userValue = user.value;
        user.value = "";
        document.getElementById('rep').innerHTML = reponse(userValue);
        //console.log(userValue);
    }
});

function dialog(){
    let dial = document.getElementById('rep');
    let usermsg = document.createElement('p');
    usermsg.id = 'userSay';
    dial.appendChild(usermsg);

    let botmsg = document.createElement('p');
    botmsg.id = 'botSay';
    dial.appendChild(botmsg);

    setTimeout(() => {
        botmsg.innerText = '$(userSay.value';
    },2000
    )
}
function reponse(userReply){
    userReply = "";
    userReply = document.getElementById('userSay').value;
    let botAnsw;
    if(userReply.includes('oui')){
        botAnsw = botIfYes[Math.floor(math.random() * botIfYes.length)];
    }else if(userReply.includes('non')){
        botAnsw = botIfNo[Math.floor(math.random() * botIfNo.length)];
    }else{
        botAnsw = botConfused;
        botAnsw = 0;
        while(botAnsw < 9){
            botAnsw++;
        }
        botAnsw = botBye;
    }
    
    dialog();
    return botAnsw;
}
//function reponse(){
 //   let sortie;
 //   let userReply = document.getElementById('userSay').value;
  //  sortie = ifYesorNo(userReply)
 //   dialog();
//}
const botWelcom = [
    "Hey mon ami(e)", 
    "Bienvenue cher humain",
    "Oh! Mon ami! Bon retour", 
    "Je te reconnais toi",
    "Comment ça va mon ami"
    ];

const botSalut = "Est-ce que tout vas bien aujourd'hui";

const botIfYes = [
    "Cool! Tu as quelques choses à me raconter", 
    "Bien! Je parie que tu as pleins de trucs sympats à me raconter", 
    "Parfait. Alors, quoi de neuf?" 
];

const botIfNo = [
    "Désolé pour toi. Je ne sais pas quoi dire de plus",
    "Reviens me voir quand tu sera de bonne humeur",
    "Je ne suis pas doué pour les consolation. Je ne suis qu'un robot"
    
=======
var botWelcom = [
  "Hey mon ami(e)", 
  "Bienvenue cher humain",
  "Oh! Mon ami! Bon retour", 
  "Je te reconnais toi",
  "Comment ça va mon ami"
  ];

var botSalut = "Est-ce que tout vas bien aujourd'hui";

var botIfYes = [
  "Cool! Tu as quelques choses à me raconter", 
  "Bien! Je parie que tu as pleins de trucs sympats à me raconter", 
  "Parfait. Alors, quoi de neuf?" 
];

var botIfNo = [
  "Désolé pour toi. Je ne sais pas quoi dire de plus",
  "Reviens me voir quand tu sera de bonne humeur",
  "Je ne suis pas doué pour les consolation. Je ne suis qu'un robot"

>>>>>>> 0ad60d02f08a939b1ae0c11a2e05922277f636f1
];

var botConfused = "Je ne comprends pas. Peux-tu répéter stp?";

var botFurious = "Mec, tu es sûr que sais lire?";

var botBye = "Bye";


let dial = document.getElementById('rep');
let usermsg = document.createElement('p');
usermsg.id = 'userSay';
dial.appendChild(usermsg);

let botmsg = document.createElement('p');
botmsg.id = 'botSay';
dial.appendChild(botmsg);

let welcom = botWelcom[Math.floor(Math.random() * botWelcom.length)];
let com = document.getElementById('userSay').innerHTML = welcom;

function bot(){
  const oui = 'oui';
  const non = 'non'; 
  let userReply = document.getElementById('userSay').value;
  console.log(userReply);

  if(userReply.indexOf(oui)>=0){
      botAnsw = botIfYes[Math.floor(math.random() * botIfYes.length)];
  }else if(userReply.indexOf(non)>=0){
      botAnsw = botIfNo[Math.floor(math.random() * botIfNo.length)];
  }else{
      let i = 0
      while(i < 3){
          botAnsw = botConfused;
          i++;
      }
      botAnsw = botBye;
  }
  return botAnsw;
}

<<<<<<< HEAD
const botFurious = "Mec, tu es sûr que sais lire?";

const botBye = "Bye";

let welcom = botWelcom[Math.floor(Math.random() * botWelcom.length)];
let com = document.getElementById('rep').innerHTML = welcom;
//console.log(com);
    

//function reponse(){
//   
//}

//var position = chaine.search(/world/i)
=======
let user = document.getElementById("int");
user.addEventListener("keydown", function(e){
  if(e.code === "Enter"){
      let userValue = user.value;
      user.value = "";
      document.getElementById('rep').innerHTML = bot(userValue);

  }
});
>>>>>>> 0ad60d02f08a939b1ae0c11a2e05922277f636f1
