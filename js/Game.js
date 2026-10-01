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
    document.getElementById("overlay").style.display = "none"; //hides start screen
    this.activePhrase = this.getRandomPhrase(); //picks random phrase
    this.activePhrase.addPhraseToDisplay(); //shows it on the board
  }
}
// const game = new Game();//tester
// game.startGame();//tester
