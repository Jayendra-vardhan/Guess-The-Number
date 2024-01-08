'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent=`🥳 Correct Number!!`

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=20;

const secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score = 20;

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        document.querySelector('.message').textContent=`⛔Oh..No Number Try Harder⛔`
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent=`🥳 Correct Number!!`;
        
    }
    else if(guess===(secretNumber+1)||guess===(secretNumber-1)){
        document.querySelector('.message').textContent=`Almost there`;
        score--;
        document.querySelector('.score').textContent=score;
    }
    else if(guess>secretNumber){
        document.querySelector('.message').textContent=`Too high 📈`;
        score--;
        document.querySelector('.score').textContent=score;
    }
    else if(guess<secretNumber){
        document.querySelector('.message').textContent=`Too low 📉`;
        score--;
        document.querySelector('.score').textContent=score;
    }
});
