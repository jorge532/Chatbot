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
    
];

const botConfused = "Je ne comprends pas. Peux-tu répéter stp?<br> N'oublies pas qu'il faut un <br>'oui' ou 'non' dans ta reponse ";

const botFurious = "Mec, tu es sûr que sais lire?";

const botBye = "Bye";

let question = "Salut mec!!!<br>Est-ce que tout va bien aujourd'hui!";
let output = document.getElementById('rep');
output.innerHTML = question;

function bot(){
    let input = document.getElementById('int').value;
    output.innerHTML = "Salut " + input;

    let number = 0;
    var userv = document.getElementById('int').value;
    document.getElementById('int').value = "";
    
    while(number<3){
        if(userv.indexOf('oui')>=0){
            output.innerHTML = input;
            output.innerHTML = botIfYes[Math.floor(Math.random() * botIfYes.length)];
            break;
        }
        else if(userv.indexOf('non')>=0){
            output.innerHTML = input;
            output.innerHTML = botIfNo[Math.floor(Math.random() * botIfNo.length)];
            break;
        }
        else if(userv.indexOf('oui')<0 && userv.indexOf('non')<0){
            output.innerHTML = input;
            output.innerHTML = botConfused;
          
            number++
            console.log(number);
            break;
            
            
        }
        
    }
}
    /*while(number<3){
        var userv = document.getElementById('int').value;
        document.getElementById('int').value = "";
        if(document.getElementById('int').value.indexOf('oui')>=0){
            output.innerHTML = input;
            question = botIfYes[Math.floor(Math.random() * botIfYes.length)];
            setTimeout(timedQuestion, 3000);
        }else if(document.getElementById('int').value.indexOf('non')>=0){
            output.innerHTML = input;
            question = botIfYes[Math.floor(Math.random() * botIfYes.length)];
            setTimeout(timedQuestion, 3000);
        }else if(document.getElementById('int').value.indexOf('oui') && document.getElementById('int').value.indexOf('non')<0){
            output.innerHTML = input;
            question = botConfused;
            number += number;
        }
    }
}
/*let number = 0;
let question = "Salut mec!!!<br>Quel est ton nom";
let output = document.getElementById('rep');
output.innerHTML = question;

function bot(){
    let input = document.getElementById('int').value;
    output.innerHTML = "Salut " + input;
    
    if(number == 0){
        document.getElementById('input').value = "";
        question = botWelcom[Math.floor(Math.random() * botWelcom.length)];
        setTimeout(timedQuestion, 3000);
        number = number + 1;
    }
    if(number == 1){
        output.innerHTML = input;
        let userv = document.getElementById('input').value;
        userv = "";
        let z = 0;
        while(z<3){
            if(userv.indexOf('oui')>=0){
                question = botIfYes[Math.floor(Math.random() * botIfYes.length)];
                z++;
                
            }
            else if(userv.indexOf('non')>=0){
                question = botIfNo[Math.floor(Math.random() * botIfNo.length)];
                z++;
            }
        }
    }*/
    /*else if(number == 2){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1> Est-ce que tout vas bien aujourd'hui</h1>";
        setTimeout(timedQuestion, 3000);
    }else if(number == 3){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1> Cool! Tu as quelques choses à me raconter</h1>";
        setTimeout(timedQuestion, 3000);
    }else if(number == 4){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1> Désolé pour toi. Je ne sais pas quoi dire de plus</h1>";
        setTimeout(timedQuestion, 3000);
    }else if(number == 5){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1> Ok cache toi le con</h1>";
        setTimeout(timedQuestion, 3000);
    }*/

function timedQuestion(){
output.innerHTML = question;
} 
document.addEventListener('keypress', (e) => {
if(e.keyCode == 13){
    bot();
    
}
}); 