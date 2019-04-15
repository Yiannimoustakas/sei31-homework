/*
Approach
Create an object that will hold the logic
Within the object, create a method that will convert the word into a list of alphabeticised letters
Create another method which calls the first method and compares the input word against the array of potential matches
*/

// ?Version 1

// let anagrams = [];
//
// const customSort = function(word) {
//   word = word.split("").sort().join("");
//
//   return word
// }
//
// const checkForAnagram = function(word, candidateWords) {
//   // word = word.split("");
//   // console.log(word);
//   // word = word.sort();
//   // console.log(word);
//   // word = word.join("");
//   // console.log(word);
//
//   let sortedWord = customSort(word)
//   console.log(sortedWord);
//
//   for ( let i = 0; i < candidateWords.length; i++ ) {
//     console.log("word before sort: ", candidateWords[i]);
//     let candidate = customSort(candidateWords[ i ]);
//     console.log("word after sort: ", candidate);
//
//     if (sortedWord === candidate) {
//       anagrams.push(candidateWords[i])
//     }
//   } //for
//
//   console.log(`The anagram of ${word} is ${anagrams}`);
// }; //chekcforanagram
//
// console.log(checkForAnagram("listen", ["enlists", "google", "inlets", "banana"]));


// Version 2

const anagramChecker = {
  anagrams: [],

  customSort: function(word) {
    return word.split("").sort().join("");
  },

  checkForAnagram: function(word, candidateWords) {

     let sortedWord = this.customSort(word)
     console.log(sortedWord);

     for ( let i = 0; i < candidateWords.length; i++ ) {
       console.log("word before sort: ", candidateWords[i]);
       let candidate = this.customSort(candidateWords[ i ]);
       console.log("word after sort: ", candidate);

       if (sortedWord === candidate) {
         this.anagrams.push(candidateWords[i])
       }
     } //for

     console.log(`The anagram of ${word} is ${this.anagrams}`);
   } //chekcforanagram
};

console.log(anagramChecker.checkForAnagram("listen", ["enlists", "google", "inlets", "banana"]));
