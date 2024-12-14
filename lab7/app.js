const questions = ['Biggest Mammal?', 'Fastest vehicle?'];
const answers = ['Whale', 'Jet'];
let selectedQuestionIndex;
let selectedAnswer;
let remainingLives;
let displayedAnswer;

const startButton = document.getElementById('start-btn');
const letterInput = document.getElementById('letter-input');
const remainingLivesElement = document.getElementById('remaining-lives');
const answerElement = document.getElementById('answer');
const hangmanElement = document.getElementById('hangman');
const messageElement = document.getElementById('message');

const hangmanImages = [
  'O', 'O-', 'O-|', 'O-|\\', 'O-|\\/\\', 'O-|\\/\\|'
];

function startGame() {
  selectedQuestionIndex = Math.floor(Math.random() * questions.length);
  selectedAnswer = answers[selectedQuestionIndex].toUpperCase();
  remainingLives = 6;
  displayedAnswer = Array(selectedAnswer.length).fill('_');
  updateUI();
}

function updateUI() {
  document.getElementById('question').innerText = `Question: ${questions[selectedQuestionIndex]}`;
  answerElement.innerText = displayedAnswer.join(' ');
  remainingLivesElement.innerText = `Remaining Lives: ${remainingLives}`;
  hangmanElement.innerText = hangmanImages[6 - remainingLives] || '';
  messageElement.innerText = '';
}

function handleLetterInput(event) {
  const letter = event.target.value.toUpperCase();
  if (letter && selectedAnswer.includes(letter)) {
    for (let i = 0; i < selectedAnswer.length; i++) {
      if (selectedAnswer[i] === letter) {
        displayedAnswer[i] = letter;
      }
    }
  } else {
    remainingLives--;
  }
  event.target.value = '';
  updateUI();
  checkGameStatus();
}

function checkGameStatus() {
  if (remainingLives === 0) {
    messageElement.innerText = 'Game Over! You lost!';
  } else if (displayedAnswer.join('') === selectedAnswer) {
    messageElement.innerText = 'Congratulations! You won!';
  }
}

startButton.addEventListener('click', startGame);
letterInput.addEventListener('input', handleLetterInput);
