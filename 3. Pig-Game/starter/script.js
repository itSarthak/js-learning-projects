'use strict';
//Selecting Elements and Storing them in variables
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const scoreP0 = document.getElementById('score--0');
const scoreP1 = document.getElementById('score--1');
const imgDice = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const scoresArr = [0, 0];

let currentScore = 0;
let playing = true;
let player = 0;

//----------x----------x----------x----------x----------x----------x---------x

//Initial Condition
function init() {
  //Setting Initial Score to zero
  scoreP0.textContent = 0;
  scoreP1.textContent = 0;
  //Hide Dice Before the game is played
  imgDice.classList.add('hidden');

  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;

  //Set Current Score and Player to zero and playing = true since they are ready
  currentScore = 0;
  playing = true;
  player = 0;
}
init();

//Function to switch player when the situation arises
let switchPlayer = player => {
  //Removing UI elements to indicate the turn has switched
  document
    .querySelector(`.player--${player}`)
    .classList.toggle('player--active');
  player = player === 0 ? 1 : 0;
  //Adding UI elements to indicate the turn has switched
  document
    .querySelector(`.player--${player}`)
    .classList.toggle('player--active');
  return player;
};

//Adding an event listener for dice Roll
btnRollDice.addEventListener('click', function () {
  //Checking if the play is still going on
  if (playing === true) {
    //Generating a Random number between 1 to 6 for dice roll
    let diceRoll = Math.trunc(Math.random() * 6) + 1;

    //Making dice visible and changing dice image when button pressed
    imgDice.classList.remove('hidden');
    imgDice.src = `dice-${diceRoll}.png`;

    //Checking if Die roll a 1
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.querySelector(`#current--${player}`).textContent = currentScore;
    } else {
      //Resetting Current Score value to zero
      currentScore = 0;
      document.querySelector(`#current--${player}`).textContent = currentScore;

      player = switchPlayer(player);
    }
  }
});

//Adding EVent Listner for the hold Button
btnHold.addEventListener('click', function () {
  //Check if game is still going on
  if (playing === true) {
    //Set the current PLayer Score to zero
    scoresArr[player] += currentScore;
    document.querySelector(`#score--${player}`).textContent = scoresArr[player];

    currentScore = 0;
    document.querySelector(`#current--${player}`).textContent = currentScore;
    player = switchPlayer(player);
    //Check if winning score has been achieved after holding
    if (scoresArr[1 - player] >= 20) {
      //Set playing to false so that roll dice and hold buttons become unresponsive
      playing = false;

      imgDice.classList.add('hidden');
      //Adding Winning Ui to the element
      document
        .querySelector(`.player--${1 - player}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${player}`)
        .classList.remove('player--active');
    }
  }
});

//Adding Event listener if New Game button is clicked
btnNew.addEventListener('click', init);
