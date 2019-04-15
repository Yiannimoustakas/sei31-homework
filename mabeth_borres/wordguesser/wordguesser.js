// Homework by Mabeth Borres of SEI 31

// ALL MY HOMEWORK can be accessed running at:
// https://mmborres.github.io/homework/wordguesser.html

/*You'll create a simple word guessing game where the user gets infinite tries to guess the word
(like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
and one to hold the current guessed letters (e.g. it would start with '_', '_', '_'
and end with 'F', 'O', 'X').
Write a function called guessLetter that will:
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array
to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and
congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed,
and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various
letters to check that your program works.


/// Wheel Of Fortune
Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user
if they found a letter (multiplying the reward if multiple letters found),
otherwise subtract from their reward.
When they guess the word, log their final reward amount.

////Hangman
Keep track of all the guessed letters (right and wrong) and only
let the user guess a letter once. If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0),
and subtract or add to that number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman),
inform the user that they lost and show a hangman on the log.
*/

// Global arrays
const wordsDeck = ["Awkward", "Bungler", "Croquet", "gambling", "expression",
"Dwarves", "Fervid","Fishhook", "Memento", "Mystify", "cuisine", "potter",
"Oxygen", "Pajama", "Phlegm", "Gazebo", "Hyphen", "Zealous", "canteen",
"bezazz", "Numbskull", "Ostracize", "Wildebeest", "Sphinx", "memory",
"jazzbo", "pizzaz", "Rhythmic", "Zombie", "acidness", "operation", "functions", "variable",
"buzzed", "puzzle", "abalone", "abandon", "abasers", "abashed",
"adamant", "adapted", "adapter", "adaptor", "hacker", "programmer",
"allots", "allows", "alloys", "allude", "allure", "function", "meetups", "linkedin",
"greens", "greets", "glares", "glassy", "glazed", "javascript", "general", "assembly",
"Zigzag"];

let wordToGuess = ""; //contains the selected random word
let guessedLetters = []; //letters guessed by the wordguesser
let guessedCorrectLetters = [];
let wrongmoves = 0;


const handleInputWord = function() {
	let word = document.getElementById("guessWordValue").value;

	//console.log("Input by user: " + word);
	if (word!=="") {
		//ignore empty
		word = word.toUpperCase();
		if (word===wordToGuess) {
		//console.log("equal");
		processWinner();
		//fill up the whole board
		fillUpBoard();
    } else {
		//greet
		alert("Sorry, wrong answer.");
		wrongmoves += 2;

		if(wrongmoves%2===0) {
			updatehangman();
		}
    }
  }
}

const handleInputLetter = function() {
    let letter = document.getElementById("guessValue").value;
    //console.log("letter===" + letter);

    if (letter!=="") {
      letter = letter.toUpperCase(); //standardize handle case
      //console.log("letter===" + letter);
      guessLetter(letter);
    }
};

const guessLetter = function(str) { //pass the letter
  if (wordToGuess.includes(str)) {
    if (!guessedCorrectLetters.includes(str)) { //not repeat
      // found
      guessedCorrectLetters.push(str);
      alert("Congratulations! Letter " + str + " is there!");
      //console.log(`Found letter ${str}`); //will show letter on screen
      showLetter(str);

      //end game?

      //console.log("===");
      //console.log(wordToGuess.length);
      //console.log(guessedCorrectLetters.length);

      if (checkIfWordComplete()===true) {
        //next level
        processWinner();
      }

    } else {
      alert("You've guessed Letter " + str + " already!");
    }

  } else {
    // failed try
    if (!guessedLetters.includes(str)) {
      alert("Sorry, NO Letter " + str + ". Try again.");
      guessedLetters.push(str);
	  wrongmoves++;

	  if(wrongmoves%2===0) {
		  updatehangman();
	  }
    } else {
      alert("Sorry, you already guessed Letter " + str + ". Try again.");
    }
  }
};

const addShuffle = function() {
	//<button onclick="playAgain()" id="shufflebutton">Shuffle</button>

	let parent = document.getElementById("playagain"); //parent

	let bt = document.createElement('button');
		bt.setAttribute('id', "shufflebutton");
		bt.addEventListener('click', playAgain);
		bt.innerHTML = "Play Again?";

	let hbt = document.createElement('button');
			hbt.setAttribute('class', "hidden");
			hbt.setAttribute('id', "buttonextra");
			hbt.innerHTML = "HIDDENHIDDENHIIDDDDEENNN";

	if (parent!==null) {
		parent.appendChild(hbt);
		parent.appendChild(bt);
	}
}

const playAgain = function () {
	document.getElementById('gameboard').innerHTML = "";
	setUpWord();
	updatehangman(); //0

	let parent = document.getElementById("playagain"); //parent
  parent.innerHTML = "";
	/*if (parent!==null) {
		let bt = document.getElementById("shufflebutton"); //shuffle
		let hbt = document.getElementById("buttonextra"); //shuffle
		parent.removeChild(hbt);
		parent.removeChild(bt);
	}*/
}

const processWinner = function() {
  alert("Congratulations! All happy!");

  let parent = document.getElementById("hangmanparent"); //parent

  let oldelem = document.getElementById("hangmanimage");

  //<img src="js/hm0.jpg" height="300" width="200" id="hangmanimage">
  var im = document.createElement('img');
	im.setAttribute('src', "js/hmwinner.png");
	im.setAttribute('id', "hangmanimage");
	im.setAttribute('height', "300");
	im.setAttribute('width', "200");

  if (parent.hasChildNodes) {
	  parent.replaceChild(im, oldelem);
   }

  //console.log("end game");
  disableInput();
  addShuffle();
};

const disableInput = function() {
  document.getElementById("guessValue").value = "";
  document.getElementById("guessValue").disabled = true;
  document.getElementById("guessWordValue").value = "";
  document.getElementById("guessWordValue").disabled = true;
}

const enableInput = function() {
  document.getElementById("guessValue").value = "";
  document.getElementById("guessValue").disabled = false;
  document.getElementById("guessWordValue").value = "";
  document.getElementById("guessWordValue").disabled = false;
}

const processLoser = function() {
	alert("Oh No. It must hurt.");

    var parent = document.getElementById("hangmanparent"); //parent

	let oldelem = document.getElementById("hangmanimage");

	//<img src="js/hm0.jpg" height="300" width="200" id="hangmanimage">
	let im = document.createElement('img');
		im.setAttribute('src', "js/hmloser.png");
		im.setAttribute('id', "hangmanimage");
		im.setAttribute('height', "300");
		im.setAttribute('width', "200");

	if (parent.hasChildNodes) {
		parent.replaceChild(im, oldelem);
	}

	//console.log("end game");
	disableInput();
	addShuffle();
};

const updatehangman = function() {
	let stateNum = wrongmoves/2;
	//console.log("hangman state " + stateNum);

	if (stateNum<11) {
		let parent = document.getElementById("hangmanparent"); //parent

		let oldelem = document.getElementById("hangmanimage");

		//<img src="js/hm0.jpg" height="300" width="200" id="hangmanimage">
		let im = document.createElement('img');
		let imgid = "js/hm" + stateNum + ".jpg"
			im.setAttribute('src', imgid);
			im.setAttribute('id', "hangmanimage");
			im.setAttribute('height', "300");
			im.setAttribute('width', "200");

		if (parent.hasChildNodes) {
			parent.replaceChild(im, oldelem);
		}
	}
	else {
		processLoser();
	}
}


const checkIfWordComplete = function () {
   const answeredletters = document.getElementsByClassName("answeredword");
   //console.log(answeredletters);
   if (answeredletters.length===wordToGuess.length) {
     return true;
   }
   return false;
};

const fillUpBoard = function() {

for (let i = 1; i <= wordToGuess.length; i++) {

      let idb = "guess" + i;

      let boxElement = document.createElement('span');
      boxElement.setAttribute('class', "answeredword");
      boxElement.setAttribute('id', idb);

      let elemOld = document.getElementById(idb);
      //console.log(elemOld)

      //parent
      document.getElementById('gameboard').replaceChild(boxElement, elemOld);

      document.getElementById(idb).innerHTML = wordToGuess.charAt(i-1);

  }
};

const showLetter = function(str) {
  //const ind = wordToGuess.indexOf(str);
  //console.log("indexOf = " + ind);

  for (let i = 1; i <= wordToGuess.length; i++) {
    //console.log(wordToGuess.charAt(i-1));
    //console.log(wordToGuess[i]);
    //console.log(str===wordToGuess.charAt(i));

    if (str===wordToGuess.charAt(i-1)) {
      //console.log("here");
      let idb = "guess" + i;

      let boxElement = document.createElement('span');
      boxElement.setAttribute('class', "answeredword");
      boxElement.setAttribute('id', idb);

      let elemOld = document.getElementById(idb);
      //console.log(elemOld)

      //parent
      document.getElementById('gameboard').replaceChild(boxElement, elemOld);

      document.getElementById(idb).innerHTML = str;
    }
  }

};

const drawHangman = function() {
console.log("     ++++++++++++++");
console.log("     +            +");
console.log("     +       \\\   OOO   //");
console.log("	 +        \\\ O   O //");
console.log("     +         \\\ OOO //");	 
console.log("	 +          \\\===//");
console.log("	 +           {=}");
console.log("	 +           {=}");
console.log("	 +          //=\\");
console.log("	 +         //   \\");
console.log("	 +        //     \\");
console.log("	 +       //       \\");
console.log("	 +      dd         bb");
console.log("	 +");
console.log("	 +");
console.log("	 +");
console.log("============");
console.log(`>> ${wordToGuess} <<`);        
console.log("============");		
};

const clearStorage = function () {
  //should be clean
  wordToGuess = ""; //contains the selected random word
  guessedLetters = []; //letters guessed by the wordguesser
  guessedCorrectLetters = [];
  wrongmoves = 0;
};

const setUpWord = function() {
  clearStorage();

  enableInput();

  //setup word
  //random
  const indRandom = Math.floor(Math.random() * wordsDeck.length);
  wordToGuess = wordsDeck[indRandom].toUpperCase();

  //console.log("Secret Recipe is " + wordToGuess);
  //console.log(wordToGuess.length)

  for (let i = 1; i <= wordToGuess.length; i++) {
    //setup game gameboard

    //<span class="guessword" id="guess5">X</span>

    let boxElement = document.createElement('span');
    boxElement.setAttribute('class', "guessword");
    let idb = "guess" + i;
    boxElement.setAttribute('id', idb);

    document.getElementById('gameboard').appendChild(boxElement);
    document.getElementById(idb).innerHTML = "X";

  }

  drawHangman();
};

setUpWord();
