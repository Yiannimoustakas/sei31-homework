console.log("working string?")
/*Strings
These exercises will test your knowledge of string functions, conditionals, and arrays.
For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

DrEvil
Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars',
except it will add '(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

const drEvil = function(num){
  if (num === 1000000) {
    //then output `${ num } dollars (pinky)`
    console.log(`${ num } dollars (pinky)`);
  } else { //else output `${ num } dollars`
    console.log(`${ num } dollars`);
  }
}
drEvil(10);
drEvil(1000000);

console.log("");
/*
MixUp
Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings
(separated by a space) slicing out and swapping the first 2 characters of each.
You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

const mixUp = function(mixUp1, mixUp2){
  mixUp1FirstLetters = mixUp1.substring(0, 2); //take first 2 letters and put into own function
  mixUp1LastLetters = mixUp1.substring(2); //remove first 2 letters and put remainder into own function

  mixUp2Firstletters = mixUp2.substring(0, 2);
  mixUp2LastLetters = mixUp2.substring(2);

//console logic 2 1 1 2
console.log(mixUp2Firstletters + mixUp1LastLetters + " " + mixUp1FirstLetters + mixUp2LastLetters);
}
mixUp('pineapple', 'banana');

/*
FixStart
Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences
of its first character have been replaced with '*', except for the first character itself.
You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le'

*/

//probably use this https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
//take the first character then put it into its own variable
// if then loop to change the rest of the characters that match the first character
//use .length etc
//const fixStart = function(word){
//  firstLetter = word.substring(0, 1);
//  let wordv2 = word.substring(1);
//  var res = wordv2.replace(`/${ firstLetter }/g, "*"`);

//  console.log(res)
//var res = str.replace(/blue/g, "red");
//  for (var i = 0 ; i < wordv2.length; i++) {
//  if wordv2.length[i] === firstLetter {
//    wordv2.replace(firstLetter, '*');
//  }
//    wordv2.replace(firstLetter, '*');
//  }
//}
//wordv2.replace(new RegExp(firstLetter, 'g' ), "*" );
//string.replace(searchvalue, newvalue)
//  console.log(wordv2.length);

//  console.log(firstLetter);
//  console.log(word.replace(firstLetter, '*')); //replaces first letter
//  console.log(word.length);
// create a loop with word.length
//for (var i = 0; i < word.length; i++) {


//working example from Ben M + console.log added.
  const fixStart = function ( str ) {
  const firstLetter = str[0];
  const findCommonLetters = str.slice(1).split('').map(l => l === firstLetter ? '*':l ).join('');
  console.log(firstLetter + findCommonLetters);
  return firstLetter + findCommonLetters;
};
fixStart("babble");

//working example from Thomas H
const fixStart2 = function( string ) { //fixStart already declared above so modified.
  const firstLetter = string.charAt(0); // remember original argument's first letter
  const replacementChar = '*'; // assign character to be used as the join() function seperator string
  const newString = string.split( firstLetter ).join( replacementChar ); // split original string anywhere firstLetter appears & then join them into one giant string using replacementChar as the 'spacer'
  const newStringMinusFirstLetter = newString.slice(1); // remove first letter from crazy split string
  console.log( firstLetter + newStringMinusFirstLetter );
};
// function called
fixStart2('babble');


//var p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
//var regex = /dog/gi;
//console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"
//console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
//console.log(fixStart.replace(firstLetter, '*'));

/*
Verbing
Create a function called verbing. It should take a single argument, a string. If its length is at least 3,
it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swiming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
*/

const verbing = function(str){
//console.log(str.slice (-3));
  if (str.slice (-3) === "ing") {
    console.log(str + "ly");
  } else if(str.length >=3 ){
    console.log(str + "ing");
  } else {
    console.log(str);
  }
};
verbing("swim");
verbing("swimming");
verbing("go");
/*
Not Bad
Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
  */

const notBad = function(str){
//It should find the first appearance of the substring 'not' and 'bad'.
console.log(str.includes("bad" && "not")); //this is true

//so above is true

}
notBad("bad not");
