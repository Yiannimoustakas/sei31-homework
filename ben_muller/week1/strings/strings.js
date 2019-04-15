// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount, and 
// return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.

const drEvil = function ( num ) {
  if ( num === 1000000) {
    return `${num} dollars (pinky)`
  } else {
    return ` ${num} dollars`
  };
};

// MixUp
// Create a function called mixUp. It should take in two strings, and return 
// the concatenation of the two strings (separated by a space) slicing out and
//  swapping the first 2 characters of each. You can assume that the strings are 
//  at least 2 characters long. For example:

const mixUp = function ( str1, str2 ) {
  return str2[0] + str2[1] + str1.slice(2,str1.length) + ' ' + str1[0] + str1[1] + str2.slice(2,str2.length);
};


// FixStart
// Create a function called fixStart. It should take a single argument, 
// a string, and return a version where all occurences of its first character 
// have been replaced with '*', except for the first character itself. You can
//  assume that the string is at least one character long. For example:

const fixStart = function ( str ) {
  const firstLetter = str[0];
  const findCommonLetters = str.slice(1).split('').map(l => l === firstLetter ? '*':l ).join('')
  return firstLetter + findCommonLetters;
};

// Verbing
// Create a function called verbing. It should take a single argument, a 
// string. If its length is at least 3, it should add 'ing' to its end,
//  unless it already ends in 'ing', in which case it should add 'ly' instead. 
//  If the string length is less than 3, it should leave it unchanged. 

const verbing = function ( str ) {
  if ( str.length >= 3 ) {
    return str.slice(str.length - 3) === 'ing' ? str.slice(0, str.length - 3) + 'ly': str + 'ing'
  };
};


// Not Bad
// Create a function called notBad that takes a single argument, a string.
// 
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' 
// substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), 
// just return the original sentence.

const notBad = function ( string ) {
  const badLoc = string.indexOf('bad');
  const notLoc = string.indexOf('not');
  if ( badLoc > notLoc && notLoc >= 0 ) {
  return string.slice(0, notLoc) + 'good!'
} else { 
  return string 
};
};

console.log(notBad('This movie is not bad!'))