// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
//
//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function(amount) {
if (amount == `1000000`) console.log(`${amount}` + ` dollars (pinky)`);
  else console.log(`${amount}` + ` dollars`);
  };

DrEvil(1000000)

// MixUp
// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:
//
//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

const MixUp = function (Word1, Word2){
const letter1Word1 = Word1.substr(0,2)
const letter1Word2 = Word2.substr(0,2)
const Word1Remaining = Word1.slice(2)
const Word2Remaining = Word2.slice(2)
const word1new = letter1Word2.concat(Word1Remaining)
const word2new = letter1Word1.concat(Word2Remaining)
const space = ` `
const output = word1new.concat(space, word2new);
console.log(`${output}`);
}

MixUp('mix', 'pod')




// FixStart
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
