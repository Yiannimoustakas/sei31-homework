//DrEvil Function
const drEvil = (dollars) => {
  if (dollars < 1000000) console.log(`${dollars} dollars`);
  else if (dollars == 1000000) console.log(`${dollars} dollars (pinky)`);
  else console.log("You have more than $1000000. You are very rich");
}

//MixUp Function
const mixUp = (word1, word2) => {
  const removeLetters1 = word1.slice(2);
  const removeLetters2 = word2.slice(2);
  const newLetters1 = word1.substring(0, 2);
  const newLetters2 = word2.substring(0, 2);
  console.log(`${newLetters2}${removeLetters1} ${newLetters1}${removeLetters2}`);
}

//Fix Start Function
const fixStart = (word) => {
  let newWord = word
  const newChar = "*"
    const firstLetter = newWord.charAt(0);
    for (var i = 0; i < newWord.length; i++) {
      if (newWord.charAt([i]) === firstLetter){
        newWord = newWord.split(firstLetter).join(newChar);
      }else{
        newWord[i];
      }
    }
    newWord = newWord.replace(newWord[0], firstLetter);
    console.log(newWord);
  }
