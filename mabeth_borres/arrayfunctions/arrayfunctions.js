// Homework by Mabeth Borres of SEI 31

// MY HOMEWORK can be accessed running at:
// https://mmborres.github.io/homework/arrayfunctions.html


/*Define a function maxOfTwoNumbers that takes two numbers as arguments and
returns the largest of them. Use the if-then-else construct available in Javascript.
You'll have to remember your pre-work, or do some googling to figure this out.*/

const maxOfTwoNumbers = function (num1, num2) {
  let gNum = (num1>num2) ? num1 : num2 ;
  const msg = `The greater number of ${num1} and ${num2} is ${gNum}.`
  console.log(msg);
  return gNum; //function
};

const maxOfTwoNumbersHTML = function (num1, num2) {
  let gNum = (num1>num2) ? num1 : num2 ;
  const msg = `The greater number of ${num1} and ${num2} is ${gNum}.`
  console.log(msg);
  return msg;
};

maxOfTwoNumbers(5, 10);
maxOfTwoNumbers(90, 10);

/*Define a function maxOfThree that takes three numbers as arguments and
returns the largest of them.*/

const maxOfThree = function (num1, num2, num3) {
  let gNum = maxOfTwoNumbers( maxOfTwoNumbers(num1, num2), num3);

  const msg = `The greater number of ${num1}, ${num2} and ${num3} is ${gNum}.`
  console.log(msg);
  return msg;
};

maxOfThree(12, 9, 1);
maxOfThree(12, 9, 100);
maxOfThree(12, 90, 51);

/*Write a function that takes a character (i.e. a string of length 1)
and returns true if it is a vowel, false otherwise.*/

const isConsonant = function(str) {
  const ch = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/);
  //console.log("ch = " + ch);
  if (ch==="" || ch===null) {
    return false;
  }
  return true;
};


const isVowel = function(str) {
  if (str.length>1) {
    //sorry not allowed
    return;
  }
  const msg = `${str} is${isConsonant(str) ? " not" : ""} a vowel.`;
  console.log(msg);
  return msg;
}

isVowel("a");
isVowel("b");
isVowel("C");


/*Define a function sumArray and a function multiplyArray that sums and multiplies (respectively)
all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10,
and multiplyArray([1,2,3,4]) should return 24.*/


const sumArray = function (array) {
  let sumOfNums = 0;
  if (array instanceof Array) {
    for (let i=0; i<array.length; i++) {
        sumOfNums += array[i];
    }
  }

  console.log(sumOfNums);
  return sumOfNums;
};

sumArray([1,2,3,4]);


const multiplyArray = function (array) {
  let product = 1;

  if (array instanceof Array) {
    for (let i=0; i<array.length; i++) {
        product = product * array[i];
    }
  }

  console.log(product);
  return product;
};

multiplyArray([1,2,3,4]);


/*Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".*/

const reverseString = function (str) {
  const newStr = str.split("").reverse().join("");
  //console.log(str.split());
  //console.log(str.split().reverse());
  console.log(newStr);
  
  return newStr;
};

reverseString("jag testar");


/*Write a function findLongestWord that takes an array of words and
returns the length of the longest one.*/

const findLongestWord = function (array) {
  let longestWord = "";

  if (array instanceof Array) {
	longestWord = array[0].trim();
	let str1len = longestWord.length;
        
    for (let i=1; i<array.length; i++) {
		
        let str2len = array[i].trim().length;

        if (str2len>str1len) {
			longestWord = array[i];
			str1len = longestWord.length;
		}
    }
  }

  console.log(longestWord);
  return longestWord.length;
}

findLongestWord(["dgfsdgfgsdfugdsgfjsdf","hkfhsdkhfkjsd","ashdasdfhalsdfhaslhdkashdlasjfhashfkjsdhf","a"]);


/*Write a function filterLongWords that takes an array of words and an number i
and returns the array of words that are longer than i.*/

const filterLongWords = function (array, num) {
  let newArray = [];

  if (array instanceof Array) {
    for (let i=0; i<array.length; i++) {
		console.log(array[i] + ", " + array[i].length + ", " + num);
		let str = array[i].trim();
        if ( str.length > num ) {
          newArray.push(array[i]);
        }
    }
  }

  console.log(num, newArray);
  return newArray;

};


filterLongWords(["adghdnfksdf", "hds", "hfkdshfkshf", "hdksh"], 5);
filterLongWords(["adghdnfksdf", "hds", "hfkdshfkshf", "hdksh"], 2);
filterLongWords(["adghdnfksdf", "hds", "hfkdshfkshf", "hdksh", "fhsdhfksdhfhsdjfhsdkhf"], 6);


const filterLongWordsHTML = function(array, num) {
	let printArray = "[ ";
	
	let outpArray = filterLongWords(array, num);
	
	for (let i=0; i<outpArray.length; i++) {
		printArray = printArray.concat(`"${outpArray[i].trim()}"`);
        if(i<outpArray.length-1) {
			     printArray = printArray.concat(", ");
		    } 
    }
	
	printArray = printArray.concat(" ]");
	
	return printArray;
};

//////// HANDLE WEB PAGE


const ans = "<b>ANSWER >> </b>";
let printMsg = "";

const handleMaxOfTwoNumbers = function() {
	const num1 = document.getElementById("maxOfTwoNumbersValue1").value;
	const num2 = document.getElementById("maxOfTwoNumbersValue2").value;
	
	if (num1==="" || num2==="") {
		return; //cannot be empty
	} else if ( Number.isInteger(parseInt(num1))===false 
		|| Number.isInteger(parseInt(num2))===false ) {
		document.getElementById("maxOfTwoNumbers").innerHTML = "";
		return;
	}
	
	printMsg = maxOfTwoNumbersHTML(parseInt(num1), parseInt(num2));
	document.getElementById("maxOfTwoNumbers").innerHTML = ans + printMsg;
};

const handleMaxOfThree = function() {
	const num1 = document.getElementById("maxOfThreeValue1").value;
	const num2 = document.getElementById("maxOfThreeValue2").value;
	const num3 = document.getElementById("maxOfThreeValue3").value;
	
	if (num1==="" || num2==="" || num3==="") {
		return; //cannot be empty
	} else if ( Number.isInteger(parseInt(num1))===false 
		|| Number.isInteger(parseInt(num2))===false
		|| Number.isInteger(parseInt(num3))===false ) {
		document.getElementById("maxOfTwoNumbers").innerHTML = "";
		return;
	}
	
	printMsg = maxOfThree(parseInt(num1), parseInt(num2), parseInt(num3));
	document.getElementById("maxOfThree").innerHTML = ans + printMsg;
};

const handleIsVowel = function() {
	const str = document.getElementById("isVowelValue").value;
	if (str==="") {
		return; //cannot be empty
	}
	printMsg = isVowel(str);
	document.getElementById("isVowel").innerHTML = ans + printMsg;
};

const handleSumArray = function() {
	const arraySum = [];
	var elements = document.getElementsByName("values");
  
	for (let i=0; i<elements.length; i++) {
		console.log(elements[i].value + " " + elements[i].checked);
	  
		if (elements[i].checked===true) {
			arraySum.push(parseInt(elements[i].value));
		}
	}
  
	console.log(arraySum);
  
	printMsg = sumArray(arraySum);
  
	document.getElementById("sumArray").innerHTML = ans + " Sum of Array values is " + printMsg;
};

//sumArray() and multiplyArray

const handleMultiplyArray = function() {
	const arrayProd = [];
	let elements = document.getElementsByName("values");
  
	for (let i=0; i<elements.length; i++) {
		//console.log(elements[i].value + " " + elements[i].checked);
	  
		if (elements[i].checked===true) {
			arrayProd.push(parseInt(elements[i].value));
		}
	}
  
	console.log(arrayProd);
  
	if (arrayProd.length===0) {
		document.getElementById("multiplyArray").innerHTML = "";
	}
	
	printMsg = multiplyArray(arrayProd);
  
	document.getElementById("multiplyArray").innerHTML = ans + " Product of Array values is " +printMsg;
};


const handleReverseString = function() {
	const str = document.getElementById("reverseStringValue").value;
	if (str==="") {
		return; //cannot be empty
	}
	printMsg = reverseString(str);
	document.getElementById("reverseString").innerHTML = ans + printMsg;
};

const handleFindLongestWord = function() {
	const arrayProd = [];
	let elements = document.getElementsByName("longWords");
  
	for (let i=0; i<elements.length; i++) {
		//console.log(elements[i].value + " " + elements[i].checked);
	  
		if (elements[i].checked===true) {
			arrayProd.push(elements[i].value);
		}
	}
  
	var elems = document.getElementsByName("findLongestWord");
  
	for (let i=0; i<elems.length; i++) {
		//console.log(elems[i].value);
	  
		if (elems[i].checked!=="") {
			arrayProd.push(elems[i].value);
		}
	}
  
	console.log(arrayProd);
  
	printMsg = findLongestWord(arrayProd);
  
	document.getElementById("findLongestWord").innerHTML = ans + "Length of longest word is " + printMsg;
};

const handleFilterLongWords = function() {
	const arrayProd = [];
	let elements = document.getElementsByName("filterLongWords");
  
	for (let i=0; i<elements.length; i++) {
		//console.log(elements[i].value + " " + elements[i].checked);
	  
		if (elements[i].checked===true) {
			arrayProd.push(elements[i].value);
		}
	}
  
	const num = document.getElementById("filterMin").value;
	
	if (Number.isInteger(parseInt(num))===false) {
		document.getElementById("filterLongWords").innerHTML = "";
		return;
	}
	
	printMsg = filterLongWordsHTML(arrayProd, parseInt(num));
	document.getElementById("filterLongWords").innerHTML = ans + printMsg;

};

