'use strict';
const player1Score = document.querySelector('#score--0');
const player2Score = document.getElementById('score--1');
const diceImage = document.querySelector('.dice');
const rollDiceButton = document.querySelector('.btn--roll');
const newGameButton = document.querySelector('.btn--new');
const holdGameButton = document.querySelector('.btn--hold');
const currentScorePlayer1 = document.getElementById('current--0');
const player1Panel = document.querySelector('.player--0');
const player2Panel = document.querySelector('.player--1');
//Resetting player scores to zero
player1Score.textContent = 0;
player2Score.textContent = 0;
diceImage.style.display = 'none';
const totalScore = [0, 0];
let activePlayer = 0;
let currentScore = 0;

rollDiceButton.addEventListener('click', function () {
  //1)Generate a random dice roll (1-6)
  const randomDiceNumber = Math.trunc(Math.random() * 6) + 1;
  //   console.log(randomDiceNumber);
  //2)Display the dice
  diceImage.style.display = 'block';
  diceImage.src = `dice-${randomDiceNumber}.png`;
  //3)Check for the dice roll
  if (randomDiceNumber !== 1) {
    currentScore += randomDiceNumber;
    // currentScorePlayer1.textContent = currentScore
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    console.log(currentScore);
  } else {
    //SWITCHING THE ACTIVE PLAYER
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1Panel.classList.toggle('player--active');
    player2Panel.classList.toggle('player--active');
  }
});

holdGameButton.addEventListener("click", function(){
  //1 Add  the current score to the total score

  // 2 check if player's score >= 100

  //3 switch player
})
//LECTURES
// player1Panel.classList.add("arola")
// player1Panel.classList.remove("player")
