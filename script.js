"use strict";

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const active0 = document.querySelector(".player--0");
const active1 = document.querySelector(".player--1");

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
const target = 100;

//Rolling dice functionality

btnRoll.addEventListener("click", function () {
  // 1 generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2 Display dice
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${dice}.png`;

  //3 check for rolled ; if true,switch to next player
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    if (activePlayer === 0) {
      active1.classList.remove("player--active");
      active0.classList.add("player--active");
    } else {
      active0.classList.remove("player--active");
      active1.classList.add("player--active");
    }
  }

  if (currentScore >= 100) {
    if (activePlayer === 0) {
      score0El.textContent = "Winner";
      score0El.style.color = "rgb(38, 197, 144)";
      score1El.style.color = "#c7365f";
      score1El.textContent = "Looser";
    } else {
      score0El.textContent = "Winner";
      score0El.style.color = "rgb(38, 197, 144)";
      score1El.style.color = "#c7365f";
      score1El.textContent = "Looser";
    }
  }
});
