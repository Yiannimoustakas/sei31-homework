// Solution 1
const isIsogram = str => {
  if (str.length < 1) {
    return true;
  }

  let obj = str.toLowerCase().split("").reduce((letters, letter) => {
    if (letter in letters) {
      letters[letter] += 1;
    } else {
      letters[letter] = 1;
    }
    return letters;
  }, {})

  return Object.values(obj).filter(num => num > 1).length > 0 ? false : true;
};

// Solution 2

const isIsogram = str => {
  return new Set(str.toLowerCase()).size === str.length;
}

// Ritika's Solution

function isIsogram( str ) { return !/(.).*\1/i.test(str); }

// Test Pairs
console.log(isIsogram("Dermatoglyphics"))//, true );
console.log(isIsogram("isogram"))//, true );
console.log(isIsogram(""))//, true, "an empty string is a valid isogram" );
console.log(isIsogram("aba"))//, false, "same chars may not be adjacent" );
console.log(isIsogram("moOse"))//, false, "same chars may not be same case" );
console.log(isIsogram("isIsogram"))//, false );
