// Homework By Mabeth Borres of SEI-31

// ALL MY HOMEWORK can be accessed running at:
// https://mmborres.github.io/homework/strings.html

/*Create a function called DrEvil. It should take a single argument, an amount,
and return '<amount> dollars',
except it will add '(pinky)' at the end if the amount is 1 million.
For example:
DrEvil(10): 10 dollars
DrEvil(1000000): 1000000 dollars (pinky)*/

const DrEvil = function (amount) {
  const amountIntValue = parseInt(amount);
  const msg = `${amount} dollars ${amountIntValue===1000000 ? "(pinky)" : ""}`;
  console.log(msg);
  return msg;
};

DrEvil(10);
DrEvil(100);
DrEvil(1000);
DrEvil(10000);
DrEvil(100000);
DrEvil(1000000);
DrEvil(10000000);


/*Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space)
slicing out and swapping the first 2 characters of each.
You can assume that the strings are at least 2 characters long.
For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'*/

const mixUp = function (str1, str2) {
  let msg = "";
  if (str1.length<2 || str2.length <2) {
    msg = `As is ${str1} ${str2}`;
    return msg;
  }
  // else all valid
  const mix1 = str2.substring(0,2) + str1.substring(2, str1.length);
  const mix2 = str1.substring(0,2) + str2.substring(2, str2.length);

  msg = `${mix1} ${mix2}`;
  console.log(msg);
  return msg;
};

mixUp('mix', 'pod');
mixUp('dog', 'dinner');
mixUp('joel', 'turnbull');

/*Create a function called fixStart.
It should take a single argument, a string, and
return a version where all occurences of
its first character have been replaced with '*',
except for the first character itself.
You can assume that the string is at least one character long.
For example:

fixStart('babble'): 'ba**le'*/

const fixStart = function (str) {
   if (str.length>0) {

     const firstChar = str.charAt(0);
     let newString = firstChar;

     for (var i=1; i<str.length; i++) {
       if (str.charAt(i) === firstChar) {
         newString = newString.concat("*");
       } else {
         newString = newString.concat(str.charAt(i));
       }
     }

     console.log(newString);
     return newString
  }
};

fixStart('babble');
fixStart('popper');
fixStart('lullaby');

/*Create a function called verbing.
It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end,
unless it already ends in 'ing',
in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged.
For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'*/

const countVowel = function (str1) {
  const vowel_list = 'aeiouAEIOU';
  let vcount = 0;

  //console.log("00" + str1);
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }

  }
  //console.log(vcount);
  return vcount;
};

//countVowel('swim');

const getVowel = function (str1) {
  const vowel_list = 'aeiouAEIOU';
  let vcount = 0;
  let vowel = "";

  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
      vowel = str1[x];
    }

  }
  if (vcount>1) {
      //reset
      vowel = "";
  }

  return vowel;
};

const isConsonant = function(str) {
  const ch = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/);
  if (ch==="") {
    return false;
  }
  return true;
};

const verbing = function (str) {
  let newString = str;
  //console.log("1 " + str);
  if (str.length>=3) {
    const lastThree = str.substring(str.length-3, str.length);
    //console.log ("4 " + lastThree);
    if (lastThree==="ing") {
      //add ly
      newString = newString.concat("ly");
    } else {
      //console.log ("5 " + str);
      //add ing
      //rules

      /*Rule 1: For words that end in a silent (not pronounced) -e, drop the -e and add -ing.
      Example: smile → smiling*/

      /*Rule 2: For one-syllable words that end in consonant-vowel-consonant (except x and w),
      double the last letter and add -ing.
      Examples: sit → sitting run → running*/

      /*Rule 3: For most other words (including words that end in -y), add -ing with no changes.
      Examples: rain → raining send → sending*/

      //console.log("2 " + (countVowel(str)===1) );
      //console.log("2 " + (str.charAt(str.length-1)) );
      const ctVowel = countVowel(str);
      let charBeforeConstant = false;
      let charAfterConstantAlsoLast = false;
      let isExceptionXW = true;

      if (ctVowel === 1) {
        const vowel = getVowel(str);
        const indexVowel = str.indexOf(vowel);
        const charBefore = str.charAt(indexVowel-1);
        const charAfter = str.charAt(indexVowel+1);

        //console.log (vowel);
        //console.log (charBefore);
        //console.log (charAfter);

        charBeforeConstant = isConsonant(charBefore);
        charAfterConstantAlsoLast = isConsonant(charAfter)
          && ( (indexVowel+1)===(str.length-1) ) ;
        //console.log("charBeforeConstant=" + charBeforeConstant);
        //console.log("charAfterConstantAlsoLast=" + charAfterConstantAlsoLast);

        //(except x, y and w )
        isExceptionXW = (charAfter==="x" || charAfter==="w" || charAfter==="y"
            || charAfter==="X" || charAfter==="W" || charAfter==="Y");
      }

      if (str.charAt(str.length-1)==="e") {
        newString = str.substring(0, str.length-1);
        //newString = newString.concat("ing");
      } else if ( ctVowel===1 && charBeforeConstant===true &&
            charAfterConstantAlsoLast==true && isExceptionXW===false ) {
              //check further
              //consonant-vowel-consonant
              newString = newString.concat(str.charAt(str.length-1));
      }

      newString = newString.concat("ing");
    }

  } else {
    // less 3
    // retain
    // newString = str;
  }

  console.log(newString);
  return newString;
};

verbing('swim');
verbing('swimming');
verbing('go');
verbing('sit');
verbing('bully');
verbing('send');
verbing('slide');
verbing('boo');


/*Create a function called notBad that takes a single argument, a string.
It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad'
substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'*/

const notBad = function (str) {
  let newString = str;
  if (str.includes("not") && str.includes("bad")) {
    const notIndex = str.indexOf("not");
    const badIndex = str.indexOf("bad");

    //If the 'bad' follows the 'not'
    if (badIndex > notIndex) {
      const phrase = str.substring(notIndex, (badIndex+3));
      //console.log(phrase);
      newString = str.substring(0, notIndex);
      newString = newString.concat("good");
      newString = newString.concat(str.substring(badIndex+3, str.length));
    }
  }

  console.log(newString);
  return newString;
};

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
notBad('I am not a hater of breaking bad.');


////// Handle from Web Page

const ans = "<b>ANSWER >> </b>";
let printMsg = "";

const handleNotBad = function() {
	const str = document.getElementById("notBadValue").value;
	if (str==="") {
		return; //cannot be empty
	}
	printMsg = notBad(str);
	document.getElementById("notBad").innerHTML = ans + printMsg;
};

const handleDrEvil = function() {
	const str = document.getElementById("DrEvilValue").value;
	if (str==="") {
		return; //cannot be empty
	} else if (Number.isInteger(parseInt(str))===false) {
		document.getElementById("DrEvil").innerHTML = "";
		return;
	}
	printMsg = DrEvil(str);
	document.getElementById("DrEvil").innerHTML = ans + printMsg;
};

const handleMixUp = function() {
	const str1 = document.getElementById("mixUpValue1").value;
	const str2 = document.getElementById("mixUpValue2").value;
	if (str1==="" || str2==="") {
		return; //cannot be empty
	}
	printMsg = mixUp(str1, str2);
	document.getElementById("mixUp").innerHTML = ans + printMsg;
};

const handleFixStart = function() {
	const str = document.getElementById("fixStartValue").value;
	if (str==="") {
		return; //cannot be empty
	}
	printMsg = fixStart(str);
	document.getElementById("fixStart").innerHTML = ans + printMsg;
};

const handleVerbing = function() {
	const str = document.getElementById("verbingValue").value;
	if (str==="") {
		return; //cannot be empty
	}
	printMsg = verbing(str);
	document.getElementById("verbing").innerHTML = ans + printMsg;
};
