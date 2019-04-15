// // Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'),
//  and one to hold the current guessed letters (e.g. it would start with 
//    '_', '_', '_' and end with 'F', 'O', 'X').


let word = ['E','N','G','I','N','E','E','R']
let guessed = ['_','_','_','_','_','_','_','_']


// Check if the letter is in the word and change the progress and letters to go
const letterInWord = function ( letter ){
  return word.indexOf(letter) >= 0 ? true : false;
};

// Change the guessed letter (if letter is in the word)
const changeLetter = function( letter ){
  for ( letters in word ){
    if ( word[letters] === letter ){
      guessed[letters] = letter;
    };
  };
  guessed[word.indexOf(letter)] = letter;
  
  progress.textContent = guessed.join(' ');

  let guessesRemaining = guessed.reduce( (total, element ) => element === '_' ? total + 1 : total + 0,0)
  response.textContent = `You Found a Letter, only ${guessesRemaining} letters to go!`;
};

// Check for game win 
const checkForWin = function ( guessedWord ){
  return word.join('') === guessed.join('');
};


  
//shows the progress board on the html
let progress = document.createElement("h2");
progress.textContent = guessed.join(' ');
document.getElementById("board").appendChild(progress)

//shows the response to the players guess 
let response = document.createElement("h2");
response.textContent = ''
document.getElementById("response").appendChild(response)

// shows the hangman image
let hangman = document.createElement("img");
hangman.setAttribute("src", "images/1.png")
document.getElementById("hangman").appendChild(hangman);

// game logic after a click
let imageCounter = 1;
const getLetter = function() {
  const letter = document.getElementById("letterInput").value.toUpperCase();
  document.getElementById("letterInput").value = '' // clears the input 
  if ( letterInWord( letter )){
    changeLetter( letter );
    if ( checkForWin( guessed ) ){
      response.textContent = "Congratulations you solved the word!"
    };
  } else {
    imageCounter += 1;
    response.textContent = "That letter is not in the word, Try again!"
    hangman.setAttribute("src", `images/${imageCounter}.png`)
    };
  
  if ( imageCounter === 7 ) {
    response.textContent = " YOU ARE DEAD!!!"
  };
};

//FIX for multiple letters in an array 
