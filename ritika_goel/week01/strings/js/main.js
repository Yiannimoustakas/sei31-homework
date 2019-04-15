//Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million.
const DrEvil = function (dollar) {
  let result = `${dollar} dollars`;
  if(dollar === 1000000)
  {
    console.log(`${result} (pinky)`);
    return;
  }
  console.log(result);
};

DrEvil( 10 );
DrEvil( 1000000 );

//Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.
const mixUp = function (string1, string2) {
  const twoOf1 = string1.slice(0, 2);
  const twoOf2 = string2.slice(0, 2);
  const newString1 = twoOf2 + string1.slice(2);
  const newString2 = twoOf1 + string2.slice(2);
  const result = `${newString1} ${newString2}`;
  console.log(result);
};

mixUp( 'freak', 'string' );
mixUp( 'something', 'working' );

//Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long.
const fixStart = function (stringInput) {
  const firstChar = stringInput[0];
  const rest = stringInput.slice(1);
  const expression = new RegExp(firstChar, "g");
  const newString = `${firstChar}${rest.replace(expression, "*")}`;
  console.log(newString);
}

fixStart( 'blabberb' );
fixStart( 'sussanes' );

//Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged.
const verbing = function (stringInput) {
  const strLength = stringInput.length;
  if (strLength > 2)
  {
    stringInput.endsWith("ing") ? stringInput += "ly" : stringInput += "ing";
  }
  console.log(stringInput);
}

verbing( 'sort' );
verbing( 'frying' );

// Create a function called notBad that takes a single argument, a string.
//
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
const notBad = function (stringInput) {
  const notIndex = stringInput.search("not");
  const badIndex = stringInput.search("bad");
  let newString;
  if(notIndex && badIndex && badIndex > notIndex)
  {
    newString = stringInput.substring(0, notIndex);
    newString += "good";
    if(stringInput[badIndex + 3])
    {
      newString += stringInput.slice(badIndex + 3);
    }
  }
  else {
    newString = stringInput;
  }
  console.log(newString);
}

notBad( 'Dinner is not at all bad' );
notBad( 'Dinner is not bad' );
notBad( 'Dinner is bad but not that much' );
