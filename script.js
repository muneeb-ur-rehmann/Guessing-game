let randomnumber = parseInt(Math.random() *100 + 1);

let input = document.querySelector('#input');
let userinput = document.querySelector('#userinput');
let previous = document.querySelector('#previous');
let remaning = document.querySelector('#remaning');
let loworhigh = document.querySelector('#loworhigh');
let contain = document.querySelector('#contain');
var p = document.createElement('p');

previousguess = [];
numguess = 1;
let playgame = true;

if(playgame){
   userinput.addEventListener('click', function(e){
        e.preventDefault();
        let guess = parseInt(input.value);
        console.log(guess);
        validinput(guess);
    });
}

function validinput(guess){
    
if(guess < 1 ){
    alert('please input a number greater than zero');
}
else if(guess > 100 ){
    alert('please input a number smaller than hundred');
}
else if(isNaN(guess) ){
    alert('please input a valid number');
}
else{
previousguess.push(guess);
if (numguess === 11) {
    displayguess(guess);
displaymessage(`Game Over. Random number was ${randomnumber}`);
endgame();
}
else {
    displayguess(guess);
    checkguess(guess);
}
}
}
function checkguess(guess){
    if(guess === randomnumber){
        displaymessage('Your guess it right');
        endgame();
    }
    else if(guess < randomnumber){
        displaymessage('Try higher number');
    }
    else if(guess > randomnumber){
        displaymessage('Try lower number');
    }
}
function displayguess(guess){
    input.value = '';
previous.innerHTML += `${guess}, `;
numguess++;
remaning.innerHTML = ` ${11 - numguess}`;
}

function displaymessage(message){
loworhigh.innerHTML = `<h2>${message}</h2>`;

}
function endgame(){
    input.value = ''
input.setAttribute('disabled','');
p.classList.add('button');
p.innerHTML = `<h2 id="newgame">Click Start New Game</h2>`;
contain.appendChild(p);
playgame=false;
startgame();
}

function startgame(){
    const newgamebutton = document.querySelector('#newgame');
    newgamebutton.addEventListener('click', function(e){
        randomnumber = parseInt(Math.random() *100 + 1);
        previousguess = [];
        numguess = 1;
        previous.innerHTML ='';
        remaning.innerHTML = `${11 - numguess} `;
        input.removeAttribute('disabled');
        contain.removeChild(p);
        playgame = true;
    });
}
