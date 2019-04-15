// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:
// DrEvil(10): 10 dollars
// DrEvil(1000000): 1000000 dollars (pinky)

const DrEvil = function(dollars){
  let strReturn = `"${dollars} dollars"`;
  if (dollars === 1000000){
    strReturn += " (pinky)";
  }
  console.log(strReturn);
  return strReturn;
}

DrEvil(10);
DrEvil(1000000);


//Create a function called mixUp.
//It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
//You can assume that the strings are at least 2 characters long. For example:
//mixUp('mix', 'pod'): 'pox mid'
//mixUp('dog', 'dinner'): 'dig donner'

const mixUp = function(word1, word2){
  const wordOneFrontSplit = word1.slice(0,2);
  const wordOneBackSplit = word1.slice(2);

  const wordTwoFrontSplit = word2.slice(0,2);
  const wordTwoBackSplit = word2.slice(2);

  const mixWord1 = wordOneFrontSplit + wordTwoBackSplit;
  const mixWord2 = wordTwoFrontSplit + wordOneBackSplit;

  console.log(mixWord1 + " " + mixWord2);
  return mixWord1 + " " + mixWord2;
}

mixUp('mix', 'pod');
mixUp('dog', 'dinner');


// Create a function called fixStart.
// It should take a single argument, a string, and return a version where all occurences of its first character
// have been replaced with '*', except for the first character itself.
// You can assume that the string is at least one character long. For example:
//fixStart('babble'): 'ba**le'


const fixStart = function(word){
  let wordChange = word;
  for (var i = 1; i < wordChange.length; i++){
    if (wordChange[i] === wordChange[0]){
      const before = wordChange.slice(0, i);
      const after = wordChange.slice(i +1);
      wordChange = before + "*" + after;
    }
  }
  console.log(wordChange);
  return wordChange;
}

fixStart('babble');
fixStart('peter piper picked a peck of pickled peppers');


// Create a function called verbing.
// It should take a single argument, a string.
// If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing',
// in which case it should add 'ly' instead. If the string length is less than 3,
//it should leave it unchanged. For example:
//verbing('swim'): 'swimming'
//verbing('swimming'): 'swimmingly'
//verbing('go'): 'go'

const verbing = function(word){
  let changedWord = word;
  if (word.length >= 3){
    if(word.lastIndexOf("ing") === (word.length-3)){
      changedWord += "ly";
    }else{
      changedWord += "ing";
    }
  }
  console.log(changedWord);
  return changedWord;
}


verbing('swim');
verbing('swimming');
verbing('go');

//Create a function called notBad that takes a single argument, a string.
//It should find the first appearance of the substring 'not' and 'bad'.
//If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
//If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
//notBad('This dinner is not that bad!'): 'This dinner is good!'
//notBad('This movie is not so bad!'): 'This movie is good!'
//notBad('This dinner is bad!'): 'This dinner is bad!'

const notBad = function(sentence){
  let returnSent = sentence;
  const notIndex = sentence.indexOf("not");
  const badIndex = sentence.lastIndexOf("bad");
  if (notIndex !== -1 && badIndex !== -1 && notIndex < badIndex){
    const beforeNot = sentence.slice(0, notIndex);
    const afterBad = sentence.slice(badIndex + 3);
    returnSent = beforeNot + "good" + afterBad;
  }
  console.log(returnSent);
  return returnSent;
}

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
