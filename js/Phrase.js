/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    // Changes all input to lowercase and stores it so it's easy
    // to compare with guessed letters
    this.phrase = phrase.toLowerCase();
  }

  // Build the input phrase on the game board, one <li> per character
  addPhraseToDisplay() {
    const ul = document.querySelector("#phrase ul");

    for (let i = 0; i < this.phrase.length; i++) {
      const character = this.phrase[i];
      const li = document.createElement("li");

      // If character is a space add the space class so they can be
      // styled as gaps
      if (character === " ") {
        li.classList.add("space");
      } else {
        // Otherwise set the text, add hide, letter, and the character as classes
        li.textContent = character;
        li.classList.add("hide", "letter", character);
      }

      ul.appendChild(li);
    }
  }

  //Check whether the input letter appears in the phrase and
  //returns true or false
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  //Reveals all board letters that match the input phrase guessed letter
  showMatchedLetter(letter) {
    //select every li that has the input letter as a class
    const letters = document.querySelectorAll(`.${letter}`);

    //Exchange hide for show
    letters.forEach((character) => {
      character.classList.remove("hide");
      character.classList.add("show");
    });
  }
}
