console.log("test");

/*
Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars',
except it will add '(pinky)' at the end if the amount is 1 million. For example: */

//  DrEvil(10): 10 dollars
//  DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function(money){
  if (money === 1000000){
    return( money + " dollars"+ "(pinky)");
  } else {
    return( money + " dollars");}
};
DrEvil(1000000);


//MixUp
/* Create a function called mixUp.
It should take in two strings, and return the concatenation of the two strings (separated by a space)
slicing out and swapping the first 2 characters of each.

You can assume that the strings are at least 2 characters long. For example:
  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference
to find methods which may be useful! */

const mixUp = function(word1, word2) {
  const firstWordFront = (word1.substring(0,2));
  const seccondWordFront = (word2.substring(0,2));
  const firstWordBack = (word1.substring(2));
  const seccondWordBack = (word2.substring(2));
  console.log(firstWordFront+seccondWordBack + " " + seccondWordFront+firstWordBack);
//remove the first two characters of the 1st word and add them to variable
//remove the first two characters of the 2nd word and add the to a variable
//remove the all letters after the seccond letter on the 1st word and them to a variable
//remove the all letters after the seccond letter on the 2nd word and them to a variable
//combine in a string concatenation.
};



/*
Create a function called fixStart. It should take a single argument,
a string, and return a version where all occurences of its first character have been replaced with '*',
except for the first character itself. You can assume that the string is at least one character long. For example:

fixStart('babble'): 'ba**le' */
const fixStart = function(word) {
  const wordFirstLetter = (word.substring(0,1));
  const restOfWord = (word.substring(1));
  const addStar = /wordFirstLetter/gi; /// << I dont know how to call this variable and not as a string
  const restOfWordWithStars = restOfWord.replace(addStar, "*");
  console.log(wordFirstLetter+restOfWordWithStars);
}
//identify first letter and add it to a variable1
//identify the rest of the letters and add it to a variable2
//replace the letters in the seccond variable with *
//recombine sentence

//Join back together
