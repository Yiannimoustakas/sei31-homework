// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.

let word = [];
let wordShown = [];
let alphabet = [];
let wrongGuessed = [];

const wordList = ["acres", "adult", "advice", "arrangement", "attempt", "august", "autumn", "border", "breeze", "brick", "calm", "canal", "casey", "cast", "chose", "claws", "coach", "constantly", "contrast", "cookies", "customs", "damage", "danny", "deeply", "depth", "discussion", "doll", "donkey", "egypt", "ellen", "essential", "exchange", "exist", "explanation", "facing", "film", "finest", "fireplace", "floating", "folks", "fort", "garage", "grabbed", "grandmother", "habit", "happily", "harry", "heading", "hunter", "illinois", "image", "independent", "instant", "january", "kids", "label", "lee", "lungs", "manufacturing", "martin", "mathematics", "melted", "memory", "mill", "mission", "monkey", "mount", "mysterious", "neighborhood", "norway", "nuts", "occasionally", "official", "ourselves", "palace", "plates", "poetry", "policeman", "positive", "possibly", "practical", "pride", "promised", "recall", "relationship", "remarkable", "require", "rhyme", "rocky", "rubbed", "rush", "sale", "satellites", "satisfied", "scared", "selection", "shake", "shaking", "shallow", "shout", "silly", "simplest", "slight", "slip", "slope", "soap", "solar", "species", "spin", "stiff", "swung", "tales", "thumb", "tobacco", "toy", "trap", "treated", "tune", "university", "vapor", "vessels", "wealth", "wolf", "zoo"]

const restartGame = function(){
  word = wordList[ [ Math.floor( Math.random() * wordList.length ) ] ].split( "" );
  for (let i = 0; i < word.length; i++){
    wordShown[i] = "_";
  }

  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  wrongGuessed = [];
  mainGame();
}

const guessLetter = function(char){
  if( typeof char !== "string" || char.length !== 1){
    return;
  }

  char = char.toLowerCase();
  const alphaI = alphabet.indexOf(char);
  if(alphaI === -1){
    return;
  }
  alphabet.splice(alphaI, 1);

  const wordI = word.indexOf(char);
  if(wordI === -1){
    wrongGuessed.push(char);
  }else{
    wordShown[wordI] = char;
  }
  mainGame();
}

const mainGame = function(){
  console.log("888\n888\n888\n88888b  8888b  88888b    d88b  88888b d88b   8888b  88888b\n888  88b     88b888  88bd88P 88b888  888  88b     88b888  88b\n888  888 d888888888  888888  888888  888  888 d888888888  888\n888  888888  888888  888Y88b 888888  888  888888  888888  888\n888  888 Y888888888  888  Y88888888  888  888 Y888888888  888\n                             888\n                        Y8b d88P\n                          Y88P\n");
  console.log("\n");
  console.log(alphabet);
  console.log("\n");
  console.log(drawHangman());
  console.log("\n");
  if(alphabet.length === 26){
  console.log("Welcome to Hangman. Can you guess the word before they are hanged?");
  }
  if(wrongGuessed.length === 6){
    console.log("Oh no. They have died. Type restartGame() to try again with a new word.")
  }else{
  console.log(wordShown);
  console.log("Type in guessLetter(\"your letter\") to make a guess.");
  }
}

const drawHangman = function(){
  let hangmanArt = "    0000000000000\n    0           0\n    0           1\n    0          1 1\n    0           1\n    0          324\n    0         3 2 4\n    0        3  2  4\n    0          5 6\n    0         5   6\n    0        5     6\n    0       5       6\n    0\n    0\n    0";

  if(wrongGuessed.length < 6){
    let i = hangmanArt.indexOf("6", 0);
    while(i !== -1){
      const before = hangmanArt.slice(0, i);
      const after = hangmanArt.slice(i +1);
      hangmanArt = before + " " + after;
      i = hangmanArt.indexOf("6");
    }
  }
  if (wrongGuessed.length < 5){
    let i = hangmanArt.indexOf("5", 0);
    while(i !== -1){
      const before = hangmanArt.slice(0, i);
      const after = hangmanArt.slice(i +1);
      hangmanArt = before + " " + after;
      i = hangmanArt.indexOf("5");
    }
  }
  if (wrongGuessed.length < 4){
    let i = hangmanArt.indexOf("4", 0);
    while(i !== -1){
      const before = hangmanArt.slice(0, i);
      const after = hangmanArt.slice(i +1);
      hangmanArt = before + " " + after;
      i = hangmanArt.indexOf("4");
    }
  }
  if (wrongGuessed.length < 3){
    let i = hangmanArt.indexOf("3", 0);
    while(i !== -1){
      const before = hangmanArt.slice(0, i);
      const after = hangmanArt.slice(i +1);
      hangmanArt = before + " " + after;
      i = hangmanArt.indexOf("3");
    }
  }
  if (wrongGuessed.length < 2){
    let i = hangmanArt.indexOf("2", 0);
    while(i !== -1){
      const before = hangmanArt.slice(0, i);
      const after = hangmanArt.slice(i +1);
      hangmanArt = before + " " + after;
      i = hangmanArt.indexOf("2");
    }
  }
  if (wrongGuessed.length < 1){
    let i = hangmanArt.indexOf("1", 0);
    while(i !== -1){
      const before = hangmanArt.slice(0, i);
      const after = hangmanArt.slice(i +1);
      hangmanArt = before + " " + after;
      i = hangmanArt.indexOf("1");
    }
  }
  return hangmanArt;
}

restartGame();
