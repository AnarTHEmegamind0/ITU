const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");
const timerDisplay = document.querySelector(".timer");

let currentWord, correctLetters, wrongGuessCount, timer, timeLeft;
const maxGuesses = 6;
const gameDuration = 60; 

const resetGame = () => {
    correctLetters = [];
    wrongGuessCount = 0;
    timeLeft = gameDuration;
    hangmanImage.src = `./images/hangman-${wrongGuessCount}.svg`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => (btn.disabled = false));
    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
    updateTimerDisplay();
    startTimer();
};

const getRandomWord = () => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    currentWord = word;
    console.log(word);
    document.querySelector(".hint-text b").innerText = hint;
    resetGame();
};

const gameOver = (isVictory) => {
    clearInterval(timer); // Stop the timer when the game ends.
    setTimeout(() => {
        const modalText = isVictory ? `Ta ugiig olj chadlaa:` : `Zuw ug bol:`;
        gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isVictory ? 'Congrats!' : 'Game Over!'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }, 300);
};

const startTimer = () => {
    clearInterval(timer); // Clear any existing timer.
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            gameOver(false); // Trigger game over when time runs out.
        }
    }, 1000);
};

const updateTimerDisplay = () => {
    timerDisplay.innerText = `Time Left: ${timeLeft}s`;
};

const initGame = (button, clickedLetter) => {
    if (currentWord.includes(clickedLetter)) {
        [...currentWord].forEach((letter, index) => {
            if (letter == clickedLetter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll("li")[index].innerText = letter;
                wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
            }
        });
    } else {
        wrongGuessCount++;
        hangmanImage.src = `./images/hangman-${wrongGuessCount}.svg`;
        console.log(wrongGuessCount);
        console.log(clickedLetter, "ene useg baihgu baina.");
    }
    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    if (wrongGuessCount == maxGuesses) return gameOver(false);
    if (correctLetters.length == currentWord.length) return gameOver(true);
};

for (let i = 97; i <= 122; i++) {
    const button = document.createElement("button");
    button.textContent = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", (e) => initGame(e.target, String.fromCharCode(i)));
}

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);
