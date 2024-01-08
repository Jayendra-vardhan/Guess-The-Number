'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent=`🥳 Correct Number!!`

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=20;

const secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score = 10;

document.querySelector('.again').addEventListener('click',function(){
    score = 10;
    const secretNumber = Math.trunc(Math.random()*20)+1;
    console.log(secretNumber);
    
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
});

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    
    //No input
    if(!guess){
        document.querySelector('.message').textContent=`⛔Oh..No Number Try Harder⛔`
    }
    //Players Wins
    else if(guess === secretNumber){
        document.querySelector('.message').textContent=`🥳 Correct Number!!`;

        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width = '30rem';

        document.querySelector('.highscore').textContent=score;
    }

    //when guess is almost there
    else if(guess===(secretNumber+1)||guess===(secretNumber-1)){
        if(score>1){
        document.querySelector('.message').textContent=`Almost there`;
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{

        document.querySelector('body').style.backgroundColor='#ff0000';

        document.querySelector('.message').textContent=`💥You lost the game!`;
        document.querySelector('.score').textContent=0;
        }
        
    }

    //when guess is Too high
    else if(guess>secretNumber){
        if(score>1){
        document.querySelector('.message').textContent=`Too high 📈`;
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('body').style.backgroundColor='#ff0000';

            document.querySelector('.message').textContent=`💥You lost the game!`;
            document.querySelector('.score').textContent=0;
        }
    }

    //when guess is too low
    else if(guess<secretNumber){
        if(score>1){
        document.querySelector('.message').textContent=`Too low 📉`;
        score--;
        document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('body').style.backgroundColor='#ff0000';

            document.querySelector('.message').textContent=`💥You lost the game!`;
            document.querySelector('.score').textContent=0;
            }
    }

});
