
const colorBox = document.querySelector('[data-testid="colorBox"]');
const colorButtons = document.querySelectorAll('[data-testid="colorOption"]');
const gameStatus = document.querySelector('[data-testid="gameStatus"]');
const scoreDisplay = document.querySelector('[data-testid="score"]');
const newGameButton = document.querySelector('[data-testid="newGameButton"]');

let targetColor;
let score = 0;

// Generate a random RGB color
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Start a new game
function startNewGame() {
  gameStatus.textContent = '';
  targetColor = getRandomColor();
  colorBox.style.backgroundColor = targetColor;

  const randomColors = Array.from({ length: 6 }, getRandomColor);
  const correctIndex = Math.floor(Math.random() * 6);
  randomColors[correctIndex] = targetColor;


  colorButtons.forEach((button, index) => {
    button.style.backgroundColor = randomColors[index];
    button.onclick = () => handleGuess(randomColors[index]);
  });
}

// Handle a color guess
function handleGuess(color) {
  if (color === targetColor) {
    gameStatus.textContent = 'Correct!';
    gameStatus.style.color = 'green';
    score++;
    scoreDisplay.textContent = score;
    setTimeout(startNewGame, 500);  
  } else {
    gameStatus.textContent = 'Wrong, try again!';
    gameStatus.style.color = 'red';
  }
}

// Event Listener for New Game Button
newGameButton.addEventListener('click', startNewGame);

startNewGame();
