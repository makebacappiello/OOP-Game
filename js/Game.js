/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      //creating an array
      new Phrase("to be or not to be"), //will total 5 objects
      new Phrase("mary mary quite contrary"),
      new Phrase("hey diddle diddle"),
      new Phrase("in God we trust"),
      new Phrase("whose line is it anyway"),
    ];
    this.activePhrase = null; //no value yet at begin of game
  }
  //returns one randomPhrase object
  getRandomPhrase() {
    const index = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[index];
  }

  startGame() {
    //Clear the old phrases and each li (aka letters) via the innerHTML
    document.querySelector("#phrase ul").innerHTML = "";

    //Reset the keys
    const keysForClearing = document.querySelectorAll(".key");

    for (let i = 0; i < keysForClearing.length; i++) {
      //Loop through the keys,
      keysForClearing[i].classList.remove("chosen"); //Remove chosen ones,
      keysForClearing[i].classList.remove("wrong"); //remove the wrong ones,
      keysForClearing[i].disabled = false; //and set disabled to false.
    }

    //Reset the hearts
    const heartsForClearing = document.querySelectorAll(".tries img");

    //Loop through the hearts,
    for (let i = 0; i < heartsForClearing.length; i++) {
      heartsForClearing[i].src = "images/liveHeart.png"; //Change src back to  live hearts
    }

    const startScreen = document.getElementById("overlay"); //Find the overlay
    startScreen.classList.remove("win", "lose"); //remove the last win/lose
    startScreen.classList.add("start"); //change the class to start
    startScreen.style.display = "none"; // hide the start screen

    this.activePhrase = this.getRandomPhrase(); //picks random phrase
    this.activePhrase.addPhraseToDisplay(); //shows it on the board
  }

  //replaces a full heart with a lost heart and ends the game after 5 misses
  removeLife() {
    const hearts = document.querySelectorAll(".tries img");
    hearts[this.missed].src = "images/lostHeart.png";
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }
  //check if there are no more remaining hidden letters true/false
  checkForWin() {
    const hiddenLetters = document.querySelectorAll(".hide.letter");
    return hiddenLetters.length === 0;
  }
  //show the overlay with a win/loss message
  gameOver(winner) {
    const overlay = document.getElementById("overlay");
    const gameOverMessage = document.getElementById("game-over-message");
    overlay.style.display = "flex";

    //if win or otherwise display appropriate message on the overlay and class attributes
    if (winner) {
      gameOverMessage.textContent = "Congratulations! You Won";
      overlay.classList.replace("start", "win");
    } else {
      gameOverMessage.textContent = "Better Luck Next Time! Try Again.";
      overlay.classList.replace("start", "lose");
    }
  }

  //handles a letter guess from the interface keyboard
  handleInteraction(button) {
    button.disabled = true;
    const letter = button.textContent;

    if (this.activePhrase.checkLetter(letter)) {
      //true : the input was correct
      button.classList.add("chosen");
      this.activePhrase.showMatchedLetter(letter);
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    } else {
      //false: the input was wrong
      button.classList.add("wrong");
      this.removeLife();
    }
  }
}
