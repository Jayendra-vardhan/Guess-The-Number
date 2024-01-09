'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 10;
let highscore = 0;

function youwin(){
    document.querySelector('.message').textContent=`🥳 Correct Number!!`;
    document.querySelector('.number').textContent=secretNumber;
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    //New HighScore
    if(score>highscore){
        highscore = score;
        document.querySelector('.highscore').textContent=score;
        document.querySelector('.message').textContent=`🎊Congratulations on achieving new HighScore🎊`;
        
    }
}
function youlose(){
    if(score<1){
        document.querySelector('body').style.backgroundColor='#ff0000';
        document.querySelector('.message').textContent=`💥You lost the game!`;
        document.querySelector('.score').textContent=0;
        
        return 1;
    }
    else{
        return score;
    }
}
function youlosing(show){
    document.querySelector('.message').textContent=show;
    score--;
    document.querySelector('.score').textContent=youlose();
}

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    //No input
    if(!guess){
        document.querySelector('.message').textContent=`⛔Oh..No Number Try Harder⛔`
    }
    //if the number is not between 1 to 20
    else if(guess<1||guess>20){
        document.querySelector('.message').textContent=`What are you Doing...
        The number must be between 1 to 20 !!`;
    }
    //Players Wins
    else if(guess === secretNumber){
        youwin();
    }
    //when guess is almost there
    else if(guess===(secretNumber+1)||guess===(secretNumber-1)){
        youlosing(`Almost there`);       
    }
    //when guess is Too high
    else if(guess>secretNumber){
        youlosing(`Too high 📈`);        
    }
    //when guess is too low
    else if(guess<secretNumber){
        youlosing(`Too low 📉`);            
    }
});

document.querySelector('.number').addEventListener('click',function(){
    document.querySelector('.message').textContent='Hey! don,t try to cheat';
});

document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('.number').textContent='?';
    secretNumber = Math.trunc(Math.random()*20)+1;
    
    score = 10;
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
        
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.message').textContent='Start guessing...';    
});