'use strict';
// SELECTING ELEMENTS
//  console.log(document.querySelector("body"))
//  console.log(document.querySelector("left"))
//  console.log(document.querySelector("main"))

// document.querySelector(".message").textContent = "Wrong number"
// document.querySelector("h1").textContent = "How are you"
// document.querySelector(".guess").value = 399
//MANIPULATING CSS STYLES
// document.querySelector("body").style.backgroundColor = "#60b347"

//HANDLING CLICK EVENTS
let secretRandomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  if (!guessedNumber) {
    document.querySelector('.message').textContent = 'Pls input a valid number';
  }
  //when guessed number is correct
  else if (guessedNumber === secretRandomNumber) {
    displayMessage('you are correct');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretRandomNumber;
    if (score > highScore) {
      highScore = score;
      console.log(document.querySelector('.highscore'))
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //When guessed number is different
  else if (guessedNumber !== secretRandomNumber) {
    if (score > 1) {
      displayMessage(
        guessedNumber > secretRandomNumber ? 'Too High' : 'Too Low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guessedNumber > secretRandomNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //When guessed number is lower
  // else if (guessedNumber < secretRandomNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
//RESETTING OUR GAME
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  secretRandomNumber = Math.trunc(Math.random() * 20) + 1;
});
// console.log(Math.trunc(Math.random() * 20) + 1)
// console.log(Math.trunc(2.33))
// //math.trunc
// let x = 5;

// function test1() {
//   let y = 2;
//   console.log(x);
// }
// test1();
// console.log(y);
const birthYear = 2000;

if (birthYear === 2000) {
  console.log('born in 2000');
} 
else if (birthYear === 2001) {
  console.log('born in 2001');
} else {
  console.log('you are not considered');
}

if (birthYear === 2000) {
  console.log('born in 2000');
}

 if (birthYear === 2001) {
  console.log('born in 2001');
} else {
  console.log('you are not considered');
}
