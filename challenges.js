/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/



var scores,roundScore,activePlayer,dice1,dice2, gamePlaying,lastDice;
var winningScore;
init();

//Setting Value / Setter
// document.querySelector('#current-' + activePlayer).textContent = dice;
// document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>'

// Reading Value / Getter
// var x = document.querySelector('#score-0').textContent;
// console.log(x);




    // Anonymous function                                    callbackFunction

document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
//1. random number
dice1 = Math.floor(Math.random() * 6) + 1;
dice2 = Math.floor(Math.random() * 6) + 1;
// 2. display result
document.getElementById('dice-1').style.display = 'block';
document.getElementById('dice-2').style.display = 'block';
document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

    //change img in js

    // 3. Update the round score IF the rolled number was NOT 1 
    if (dice1 !== 1 && dice2 !== 1) {
        //Add score
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player
        nextPlayer();
    }
    
    // if(dice === 6 && lastDice === 6){
    //     // player looses score
    //     scores[activePlayer] = 0;
    //     document.querySelector('#score-' + activePlayer).textContent = '0';
        
    //     nextPlayer();
    //     }
    //  else if(dice !== 1 || dice2 !== 1) {
    //      //add score
    //      roundScore += dice;
    //      roundScore += dice2;
    //      document.querySelector('#current-'+ activePlayer).textContent = roundScore;
   
    //  }
    //  else{
    //      //next player
    //     nextPlayer();
    //  }
    //  lastDice = dice;

    }
})


document.querySelector('.btn-hold').addEventListener('click',function(){
if(gamePlaying){
// Add Current Score to Gloabl Score
scores[activePlayer] += roundScore;

// Update the UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

// Check if player won the game

 var input = document.getElementById("win-score").value
 if(input) {
     winningScore = input;
 } else{
     winningScore = 100;
 }

 if  (scores[activePlayer] >= winningScore) {
     document.querySelector('#name-'+ activePlayer).textContent = 'Winner!';
     document.getElementById('dice-1').style.display = 'none';
     document.getElementById('dice-2').style.display = 'none';
     
     document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
     gamePlaying = false;
 } else{
     // Next Player
 nextPlayer();
 }
}


})
function nextPlayer(){
     //next player
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';

     document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
    //  document.querySelector('.player-0-panel').classList.remove('active');
    //  document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);
function init(){
    scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
// Js CSS
document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';

// select elemnt by id
document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}


