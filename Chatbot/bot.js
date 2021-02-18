  let number = 0;
let question = "<h1>Héeee comment tu t'appelles ?</h1>";

let output = document.getElementById('output');
output.innerHTML = question;

function bot(){
    let input = document.getElementById('input').value;
    console.log(input);

    if(number == 0){
        output.innerHTML = "<h1>Salut " + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1> Bienvenue cher humain</h1>";
        setTimeout(timedQuestion, 3000);
    }
    else if(number == 1){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1> Tu viens de quel pays</h1>";
        setTimeout(timedQuestion, 3000);
    }
    else if(number == 2){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1> Est-ce que tu as fais les etudes ?</h1>";
        setTimeout(timedQuestion, 3000);
    }
    else if(number == 3){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1> Mais est ce que tu peux lire ?</h1>";
        setTimeout(timedQuestion, 3000);
    }
    else if(number == 4){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1> Désolé pour toi. Je ne sais pas quoi faire pour toi.</h1>";
        setTimeout(timedQuestion, 3000);
    }
    else if(number == 5){
        output.innerHTML = "<h1>" + input + "</h1>";
        document.getElementById('input').value = "";
        question = "<h1> Ok cache toi a demain.</h1>";
        setTimeout(timedQuestion, 3000);
    }
}
function timedQuestion(){
    output.innerHTML = question;
} 
document.addEventListener('keypress', (e) => {
    if(e.keyCode == 13){
        bot();
        number++;
    }
});








