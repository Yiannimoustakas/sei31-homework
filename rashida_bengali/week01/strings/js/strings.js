console.log('Up and running!');

const drEvil = function (amount) {
  if (amount === 1000000) {
    const amountInDollars = (`${amount} dollars (pinky)`);
    console.log(amountInDollars);
    return amountInDollars;
  }
  else {
    const amountInDollars = (`${amount} dollars`);
    console.log(amountInDollars);
    return amountInDollars;
  }
};

drEvil (10);
drEvil (1000000);


const mixUp = function (mix,match) {
  if (mix.length && match.length > 2) {
    const mixMatch1 = (match.substring(0,2) + mix.substring(2));
    const mixMatch2 = (mix.substring(0,2) + match.substring(2));
    const mixMatchFinal = (`${mixMatch1} ${mixMatch2}`);
    console.log(mixMatchFinal);
    return mixMatchFinal;
  }
  else {
    const mixMatch = (`mix match`);
    console.log(mixMatch);
    return mixMatch;
  }
};

mixUp ("dog","dinner");
mixUp ("mix","pod");


const fixStart = function (word) {

let wordEdited = word[0];

  if (word.length > 1) {
    const firstLetter = word[0];

      for(let i = 1; i < word.length; i++) {
        if (word[i] === firstLetter) {
            wordEdited += "*";
        }
        else {
            wordEdited += word[i];
        }
      }
    }
    console.log(wordEdited);
  return wordEdited;
  };

fixStart ("bubblebee");
fixStart ("doodle");


const verbing = function (verb) {

  if (verb.length >= 3) {
    if ((verb[verb.length-3]+verb[verb.length-2]+verb[verb.length-1])==="ing") {
        console.log(`${verb}ly`);
    }
    else {
      if (((verb[verb.length-2]==="a") || (verb[verb.length-2]==="e") || (verb[verb.length-2]==="i") || (verb[verb.length-2]==="o") || (verb[verb.length-2]==="u")) && ((verb[verb.length-1]==="b") || (verb[verb.length-1]==="c") || (verb[verb.length-1]==="d") || (verb[verb.length-1]==="f") || (verb[verb.length-1]==="g") || (verb[verb.length-1]==="h") || (verb[verb.length-1]==="j") || (verb[verb.length-1]==="k") || (verb[verb.length-1]==="l") || (verb[verb.length-1]==="m") || (verb[verb.length-1]==="n") || (verb[verb.length-1]==="p") || (verb[verb.length-1]==="q") || (verb[verb.length-1]==="r") || (verb[verb.length-1]==="s") || (verb[verb.length-1]==="t") || (verb[verb.length-1]==="v") || (verb[verb.length-1]==="y") || (verb[verb.length-1]==="z"))) {
        console.log(`${verb}${verb[verb.length-1]}ing`);
      }
      else {
        if ((verb[verb.length-1]==="e") || (verb[verb.length-1]==="y")) {
          console.log(`${verb.substring(0,verb.length-1)}ing`);
        }
        else {
          console.log(`${verb}ing`);
        }
      }
    }
  }
  else {
    console.log(verb);
  }
};

verbing ("amaze");
verbing ("call");
verbing ("swim");
verbing ("hugging");


const notBad = function (sentence) {
  const not = 'not';
  const bad = 'bad';
  const pattern = /not(.*?)bad/;

  const sentenceNew = sentence.replace(pattern, 'good');
  console.log(sentenceNew);
  return sentenceNew;
};

notBad("The food is not that bad.");
notBad("Her drawing is not too bad.");

//
// const notBad = function (string) {
//
//   let badIndex;
//   let notIndex
//
//   if (string.includes('not') && string.includes('bad')) {
//      badIndex = string.indexOf('bad');
//      notIndex = string.indexOf('not');
//   } else {
//       return string;
//   }
//     if (badIndex>notIndex) {
//       let beforeNot = string.substring(0, notIndex);
//       let afterBad = string.substring(badIndex+3, string.length);
//       let newStr = beforeNot + 'good' + afterBad;
//       return newStr;
//     }
// };
//
// console.log(notBad('The dinner is not that bad!'));
