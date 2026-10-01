/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    //changes all input to lowercase
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    //selects the list inside class phrase
    const ul = document.querySelector("#phrase ul");
    //loops over each character in this.phrase
    for (let i = 0; i < this.phrase.length; i++) {
      const character = this.phrase[i];
      //   console.log(character);
      const li = document.createElement("li");
      //if character is a space
      if (character === " ") {
        //add the space class
        li.classList.add("space");
        //otherwise set the text,add hide, letter, and the character as classes
      } else {
        li.textContent = character;
        li.classList.add("hide", "letter", character);
      }
      //add the li to the ul
      ul.appendChild(li);
    }
  }
  //check whether the input letter appears in the phrase and returns TRUE or FALSE
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }
  //reveals all board letters that match the input
  showMatchedLetter(letter) {
    //select every li that has the input letter as a class
    const letters = document.querySelectorAll(`.${letter}`);

    //exchange hide for show
    letters.forEach((character) => {
      character.classList.remove("hide");
      character.classList.add("show");
    });
  }
}
//these are testers
// const greeting = new Phrase("How are you");
// console.log(greeting);
// greeting.addPhraseToDisplay();
// greeting.showMatchedLetter("o");
