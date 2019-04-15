let letterOfWords = ['F', 'O', 'X'];
let currentGuessedLetters = ['_','_','_'];

let wins = 0;
let loose = 0;
let maxError = 6;

const guessLetter = function (){
  let guessedLetter = document.getElementById('letter').value;
  maxError--
  if(maxError===0){
    alert("try again");
  }

  for(let i = 0; i < letterOfWords.length; i++){
    if(guessedLetter===letterOfWords[i]){
      currentGuessedLetters[i] = letterOfWords[i];
      console.log(currentGuessedLetters);
      wins++
      if(wins===3){
        alert("You Win");
      }
    }

  }
  alert("You have" + maxError + "chance left");

}
console.log(currentGuessedLetters);
//console.log(guessLetter('A'));
