/*
Create a function called DrEvil. It should take a single argument, an amount, and return '<amount> dollars',
except it will add '(pinky)' at the end if the amount is 1 million. For example:
*/

function drEvil(amount) {
  if (amount == 1000000) {
    console.log(`${amount} dollars (pinky)`);
  } else {
    console.log(`${amount} dollars`);
  }
};

drEvil(10);
drEvil(1000000);

/*
Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings
 (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings
 are at least 2 characters long. For example:

  mixUp('mix', pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

function mixUp(string1, string2) {
  const wordTwoBeg = string2.slice(0,2);
  const wordTwoEnd = string2.slice(2);
  const wordOneBeg = string1.slice(0,2);
  const wordOneEnd = string1.slice(2);
  console.log(wordTwoBeg + wordOneEnd + ' ' + wordOneBeg + wordTwoEnd);
};

mixUp('mix', 'pod');
mixUp('dog', 'dinner');

/*Create a function called fixStart. It should take a single argument, a string, and return a version
where all occurences of its first character have been replaced with '*', except for the first character itself.
You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'*/

function fixStart(string1) {
  const firstLetter = string1[0];
  let endOfWord = string1.slice(1)
  for (let i = 0; i < endOfWord.length; i++) {
    if (endOfWord[i] === firstLetter) {
      endOfWord = endOfWord.replace(endOfWord[i], '*');
    }
  }
  console.log(firstLetter + endOfWord);
};

fixStart('hahahaha')
fixStart('babble');
fixStart('lollapallooza')

/*
Create a function called verbing. It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
For example:
  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
  */

function verbing(string2){
  if (string2.length < 3) console.log(string2);
  if (string2.slice(-3) == 'ing') {
    console.log(string2 + 'ly')
  } else {
      console.log(string2 + 'ing');
    }
  };


verbing('swim'); //not sure how to fix swim becoming swiming but i think it has to do with rules
verbing('swimming');
verbing('go');

/*
Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
  */

  const notBad = function (string) {

    let badIndex;
    let notIndex;

    if (string.includes('not') && string.includes('bad')) {
    badIndex = string.indexOf('bad');
    notIndex = string.indexOf('not');
  } else {
    return string
  }

  if (badIndex > notIndex) {
    let beforeNot = string.substring(0, notIndex);

    let afterBad = string.substring(badIndex+3, string.length);
    let newStr = beforeNot + 'good' + afterBad;
    return newStr;
  }
};

console.log(notBad('This dinner is not that bad!'))
console.log(notBad('This movie is not so bad!'))
console.log(notBad('This dinner is bad!'))
