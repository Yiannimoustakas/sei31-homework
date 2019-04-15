// Version 1

// const values = {
//   1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
//   2: ["D", "G"],
//   3: ["B", "C", "M", "P"],
//   4: ["F", "H", "V", "W", "Y"],
//   5: ["K"],
//   8: ["J", "X"],
//   10: ["Q", "Z"]
// };
//
//
// const letterScore = function(letter) {
//   // loop through the values object, one key at a time
//   for (let points in values) {
//     // variables are free - here i am making an array for each list of letters that has the same score
//
//     let letters = values[points]
//
//     // abd here I see if the letter we pass in exists in the letters array
//
//     if ( letters.indexOf(letter) > -1 ) {
//       // return the numerical value of the key
//
//       return +points
//     }
//   }
// }
//
// // this is the main function - we are passing in word
//
// const scrabble = function(word) {
//   // set the initial value
//   let wordScore = 0
//
//   // turn the word into an array
//   let wordArray = word.toUpperCase().split("");
//
//   // loop through the array
//   for ( let i = 0; i < wordArray.length; i+= 1 ) {
//     let letter = wordArray[i]
//
//     // get the score for each letter using the first function we declared above letterScore()
//     wordScore = wordScore + letterScore(letter)
//   }
//
//   // after the loop is finished, return the score
//   return wordScore
// }
//
// console.log(scrabble("hello"));



// Version 2

// const scrabble = {
//   letterScore: {
//     1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
//     2: ['D', 'G'],
//     3: ['B', 'C', 'M', 'P'],
//     4: ['F', 'H', 'V', 'W', 'Y'],
//     5: ['K'],
//     8: ['J', 'X'],
//     10: ['Q', 'Z']
//   },
//
//   score: function(word) {
//     word = word.toUpperCase();
//     let sum = 0;
//
//     for ( let i = 0; i < word.length; i+= 1 ) {
//       let letter = word[ i ];
//
//       for (let points in this.letterScore) {
//         if ( this.letterScore[points].includes(letter) ) {
//           sum += Number(points);
//
//           break;
//         }
//       }
//
//     }
//
//     return sum;
//   }
// };
//
// console.log(scrabble.score("hello"));
// console.log(scrabble.score("scrabble"));


// Version 3

const scrabbleAlt = {
  letterScore: {
    'a' : 1, 'e' : 1, 'i' : 1, 'o' : 1,
    'u' : 1, 'l' : 1, 'n' : 1, 'r' : 1,
    's' : 1, 't' : 1, 'd' : 2, 'g' : 2,
    'b' : 3, 'c' : 3, 'm' : 3, 'p' : 3,
    'f' : 4, 'h' : 4, 'v' : 4, 'w' : 4,
    'y' : 4, 'k' : 5, 'j' : 8, 'x' : 8,
    'q' : 10, 'z' : 10
  },

  scoreAlt: function(word) {
    word = word.toLowerCase();
    let sum = 0;

    for ( let i = 0; i < word.length; i+= 1 ) {
      let letter = word[i];
      let score = this.letterScore[letter];
      sum += score;
    }

    return sum;
  }
};

console.log(scrabbleAlt.scoreAlt("HELLO"));
console.log(scrabbleAlt.scoreAlt("SCRABBLE"));
