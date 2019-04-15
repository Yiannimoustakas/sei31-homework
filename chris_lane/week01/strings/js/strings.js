///////////////
// DrEvil
///////////////

/*
** Create a function called DrEvil. It should take a single argument, an amount,
and return ' dollars', except it will add '(pinky)' at the end if the amount
is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

const DrEvil = amount => {
  const pinky = amount === 1000000 ? "(pinky)" : "";
  const result = `${amount} dollars ${pinky}`;
  return result;
};

console.log(DrEvil(10));
console.log(DrEvil(1000000));

///////////////
// MixUp
///////////////

/*
** Create a function called mixUp. It should take in two strings, and return
the concatenation of the two strings (separated by a space) slicing out and
swapping the first 2 characters of each. You can assume that the strings are
at least 2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

const mixUp = (string1, string2) => {
  const string1FirstTwoChars = string1.slice(0, 2);
  const string2FirstTwoChars = string2.slice(0, 2);

  const string1RemainingChars = string1.slice(2, string1.length);
  const string2RemainingChars = string2.slice(2, string2.length);

  const newString1 = `${string2FirstTwoChars}${string1RemainingChars}`;
  const newString2 = `${string1FirstTwoChars}${string2RemainingChars}`;

  const result = `${newString1} ${newString2}`;
  return result;
};

console.log(mixUp("mix", "pod"));
console.log(mixUp("dog", "dinner"));

///////////////
// FixStart
///////////////

/*
**Create a function called fixStart. It should take a single argument, a string,
and return a version where all occurences of its first character have been
replaced with '*', except for the first character itself. You can assume that
the string is at least one character long. For example:

fixStart('babble'): 'ba**le'
*/

const fixStart = string => {
  const firstChar = string.slice(0, 1);
  const stringToArray = string.split("");
  const resultArr = stringToArray.map((character, index) => {
    if (!index) return firstChar;
    if (character === firstChar) return "*";
    return character;
  });

  return resultArr.join("");
};

console.log(fixStart("babble"));

/*
Sam's solution (changed addStar constant)

const fixStart2 = function(word) {
  const wordFirstLetter = word.substring(0, 1);
  const restOfWord = word.substring(1);
  const addStar = new RegExp(wordFirstLetter, "g");
  const restOfWordWithStars = restOfWord.replace(addStar, "*");
  console.log(wordFirstLetter + restOfWordWithStars);
};
fixStart2("babble");
*/

///////////////
// Verbing
///////////////

/*
** Create a function called verbing. It should take a single argument, a
string. If its length is at least 3, it should add 'ing' to its end, unless
it already ends in 'ing', in which case it should add 'ly' instead. If the
string length is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
*/

const verbing = string => {
  const { length } = string;
  const stringEnding = string.slice(length - 3, length);

  if (length < 3) return string;
  if (stringEnding === "ing") return `${string}ly`;

  return `${string}ing`;
};

console.log(verbing("swim"));
console.log(verbing("swimming"));
console.log(verbing("go"));

///////////////
// Not Bad
///////////////

/*
** Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just
return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
*/

const notBad = string => {
  const { length } = string;
  const firstNot = string.indexOf("not");
  const firstBad = string.indexOf("bad");

  const stringStart = string.slice(0, firstNot);
  const stringEnd = string.slice(firstBad + 3, length);

  if (firstNot !== -1 && firstBad > firstNot)
    return `${stringStart}good${stringEnd}`;
  return string;
};

console.log(notBad("This dinner is not that bad!"));
console.log(notBad("This movie is not so bad!"));
console.log(notBad("This dinner is bad!"));
