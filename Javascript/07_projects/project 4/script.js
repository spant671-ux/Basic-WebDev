
// ==================== Project 4: Guess the Number Game ====================

// Generate a random integer target number between 1 and 100:
let randomNumber = parseInt(Math.random() * 100 + 1);

// DOM Element Selections:
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi') || document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

// Create a new paragraph element node to hold the "Start New Game" button:
const p = document.createElement('p');

// Game State Tracking Variables:
let prevGuess = [];
let numGuess = 1;
let playGame = true;

// Event Listener for Guess Submission:
if (playGame) {
  submit.addEventListener('click', function (e) {
    // Prevent default form submit action (page refresh):
    e.preventDefault();

    // If game state is false, do not process clicks:
    if (!playGame) return;

    // Parse user input value into an integer number:
    const guess = parseInt(userInput.value);
    
    // Pass user guess for input validation:
    validateGuess(guess);
  });
}

// 1. Input Validation Function:
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than or equal to 1');
  } else if (guess > 100) {
    alert('Please enter a number less than or equal to 100');
  } else {
    // Save valid guess into array history:
    prevGuess.push(guess);

    // Update UI display slot & decrement remaining turns:
    displayGuess(guess);

    // Evaluate guess accuracy:
    checkGuess(guess);
  }
}

// 2. Guess Logic Evaluation Function:
function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right! The number was ${randomNumber}`);
    endGame();
  } else if (numGuess > 10) {
    displayMessage(`Game Over. Random number was ${randomNumber}`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOO High`);
  }
}

// 3. UI Display Update Function for Guesses & Remaining Attempts:
function displayGuess(guess) {
  // Clear input box value:
  userInput.value = '';

  // Append user's guess to the previous guesses list:
  guessSlot.innerHTML += `${guess}, `;

  // Increment guess count:
  numGuess++;

  // Update remaining attempts display (max 10 attempts):
  remaining.innerHTML = `${Math.max(0, 11 - numGuess)}`;
}

// 4. Message Rendering Function:
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// 5. End Game Function (Disables input & renders new game button):
function endGame() {
  userInput.value = '';
  // Disable user input field:
  userInput.setAttribute('disabled', '');

  // Add button class and HTML markup to the paragraph node:
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame" style="cursor: pointer; background: #fff; color: #000; padding: 10px; border-radius: 5px; display: inline-block;">Start new Game</h2>`;
  
  // Append new game button node to the UI container:
  startOver.appendChild(p);

  // Set game state flag to false:
  playGame = false;

  // Attach event listener to the newly created New Game button:
  newGame();
}

// 6. New Game Initialization Function:
function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    // Generate a fresh random target number:
    randomNumber = parseInt(Math.random() * 100 + 1);

    // Reset game state tracking variables:
    prevGuess = [];
    numGuess = 1;

    // Reset UI displays:
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    lowOrHi.innerHTML = '';

    // Enable input field & remove new game button node:
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    // Set game state flag back to active:
    playGame = true;
  });
}


