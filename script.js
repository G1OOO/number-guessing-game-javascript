let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessedList = [];

let guessButton = document.getElementById("guessBtn");
let inputField = document.getElementById("userInput");
let countDisplay = document.getElementById("guessCount");
let historyDisplay = document.getElementById("history");
let messageDisplay = document.getElementById("message");

guessButton.onclick = function() {
    let userGuess = Number(inputField.value);

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        messageDisplay.textContent = "Please enter a valid number!";
        return;
    }

    attempts = attempts + 1;
    guessedList.push(userGuess);

    countDisplay.textContent = attempts;
    historyDisplay.textContent = guessedList.join(", ");

    if (userGuess === randomNumber) {
        messageDisplay.textContent = "Correct! You guessed it!";
        messageDisplay.style.color = "green";
        guessButton.disabled = true;
    } else if (userGuess < randomNumber) {
        messageDisplay.textContent = "Your guess is too low!";
        messageDisplay.style.color = "#b31b1b";
    } else {
        messageDisplay.textContent = "Your guess is too high!";
        messageDisplay.style.color = "#b31b1b";
    }

    inputField.value = "";
    inputField.focus();
};