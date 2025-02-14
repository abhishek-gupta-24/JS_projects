let randomNumber=parseInt(Math.random()*100+1);

let userInput=document.querySelector('#guessNumber');
let submit=document.querySelector('#submitButton');
let prevGuess=document.querySelector("#prevGuess");
let remGuess=document.querySelector("#remGuess");
let result=document.querySelector("#result");
let info=document.querySelector("#info");

let prevNumber=[];
let playGame=true;
let numGuess=10;

let p=document.createElement('p');

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        let guess=parseInt(userInput.value);
        isVaildate(guess);
    })
}

function isVaildate(guess){
    if(isNaN(guess)){
        alert("Enter a valid Number");
    }else if(guess<=0||guess>100){
        alert("Enter number between 1 and 100");
    }else{
        finalResult(guess);
    }
}
function finalResult(guess){
    prevNumber.push(guess);
    numGuess--;
    if(guess===randomNumber){
        message(`Congrats! Your guess is right`,guess);
        endGame();
    }else{
        if(numGuess===0){
            message(`All attempts are over. Correct Guess is ${randomNumber}`,guess);
            endGame();
        }else if(guess<randomNumber){
            message(`Your guess is too low`,guess);
        }else{
            message(`Your guess is too high`,guess);
        }
    }
}

function message(mes,guess){
    userInput.value='';
    prevGuess.innerHTML+=`${guess} `;
    remGuess.innerHTML=`${numGuess}`;
    p.innerHTML=`<span id="finalMessage">${mes}</span>`;
    result.appendChild(p);

}
function endGame(){
    userInput.setAttribute('disabled','');
    playGame=false;
    newGame();

}
function newGame(){
    let btnDiv=document.createElement('div');
    btnDiv.className='btnDiv';

    let newGameBtn=document.createElement('button');
    newGameBtn.className="newGame";
    newGameBtn.innerHTML=`Start New Game`;

    btnDiv.appendChild(newGameBtn);
    info.appendChild(btnDiv);

    newGameBtn.addEventListener('click',(e)=>{
        prevNumber=[];
        numGuess=10;
        prevGuess.innerHTML=``;
        remGuess.innerHTML=`10`;
        userInput.removeAttribute('disabled');
        p.innerHTML=``;
        btnDiv.removeChild(newGameBtn);
        info.removeChild(btnDiv);
        playGame=true;
        randomNumber=parseInt(Math.random()*100+1);
    })
}

