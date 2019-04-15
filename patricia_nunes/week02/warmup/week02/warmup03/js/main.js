console.log("Pretty women");
/* 
Anagram Detector
Write a program that, given a word and a list of possible anagrams, selects the anagrams of the 
given word.

In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return 
"inlets".

Suggestions
Start out by getting this working with discrete functions.
If you feel comfortable with that, try to put all your functions, collections, etc, into an object.
 */

 // find the word with the same number of letters and the same letters
// array with all the words that will be tested
const inputWord = "listen";
const words = ["enlists", "google", "inlets", "banana"];

const input = function() {
  for (let i = 0; i < words.length; i+= 1) {
    const currentWord = words[i];
    if (words[i].length === inputWord.length ) {
      //console.log(`${ words[i] }`);
      for (let j = 0; j < currentWord.length; j++) {
        if (currentWord[j].length === inputWord.length) {
          console.log(currentWord[j].length);
          console.log(inputWord.length);
        }
      }
    }
  }
}

input(words);