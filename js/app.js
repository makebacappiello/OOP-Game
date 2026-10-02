/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;
document.getElementById("btn__reset").addEventListener("click", () => {
  game = new Game(); //creating a new game object
  game.startGame(); //hides the overlay and puts the phrae in play
});
