//Generate a random number
//Give the user the ability to guess
//If they guess and they are wrong, ask them again (hint);
//If they win - say that they won

function guessGame() {
  let randomNbr = Math.floor(Math.random() * 11);
  let guess;

  do {
    guess = prompt("Guess a number between 1 and 10");
    // console.log(guess, randomNbr);
    if (randomNbr > guess) {
      console.log("You guessed too low");
    } else if (randomNbr < guess) {
      console.log("You guessed too high");
    }
  } while (guess != randomNbr);
  console.log("You guessed the number! You won!");
}

guessGame();
