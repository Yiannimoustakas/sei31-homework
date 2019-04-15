console.log("Arrays and Functions Homework");
console.log("\n\n#1.\n--------------------");
const maxOfTwoNumbers = function(a, b) {
	if (a > b) {
		return a;
	} else {
		return b;
	}
};
// function called
console.log(`The max of 25 & 5 is of course, ${maxOfTwoNumbers(25, 5)}.`);
console.log(`The max of 5 & 1 is of course, ${maxOfTwoNumbers(5, 1)}`);


console.log("\n\n#2.\n--------------------");
// v1
// const maxOfThree = function(a, b, c) {
//       if (a > b) {
//             if (a > c) {
//                   return a;
//             } else {
//                   return c;
//             };
//       };
//       if (b > a) {
//             if (b > c) {
//                   return b;
//             } else {
//                   return c;
//             }
//       };
//       if (a > c) {
//             if (a > b) {
//                   return a;
//             } else {
//                   return b;
//             }
//       };
// };

// v2 (smarty pants way)
const maxOfThree = function(a, b, c) {
	maxNumber = maxOfTwoNumbers(maxOfTwoNumbers(a, b), maxOfTwoNumbers(b, c));
	return maxNumber;
};
// function called
console.log(`The max of 25, 5 & 3 is of course, ${maxOfThree(25, 5, 1)}.`);
console.log(`The max of 5, 25 & 1 is of course, ${maxOfThree(5, 25, 1)}.`);
console.log(`The max of 5, 1 & 25 is of course, ${maxOfThree(5, 1, 25)}.`);
console.log(`The max of 1, 5 & 25 is of course, ${maxOfThree(1, 5, 25)}.`);


console.log("\n\n#3.\n--------------------");
const vowelChecker = function(string) {
	if (string === "a" || string === "e" || string === "i" || string === "o" || string === "u") {
		return true;
	} else {
		return false;
	}
};
// function called
console.log(`'a' is a vowel, right? ${vowelChecker('a')}`);
console.log(`'e' is a vowel, right? ${vowelChecker('e')}`);
console.log(`'i' is a vowel, right? ${vowelChecker('i')}`);
console.log(`Is 'z' a vowel? ${vowelChecker('z')}`);


console.log("\n\n#4.\n--------------------");

const sumArray = function(array) {
	let arrayTotal = 0;
	for (let i = 0; i < array.length; i += 1) {
		arrayTotal += array[i];
		console.log(`${ i }, ${ arrayTotal }`);
	};
	return arrayTotal;
};
// function called with array as parameter
sumArray([1, 2, 3, 4]);

const multiplyArray = function(array) {
	let arrayTotal = 1;
	for (let i = 0; i < array.length; i += 1) {
		arrayTotal *= array[i];
		console.log(`${ i }, ${ arrayTotal}`);
	};
	return arrayTotal;
};
// function called with array as parameter
multiplyArray([1, 2, 3, 4]);


//could be re written as 'hella practice example'
console.log("\n\n#5.\n--------------------");
const reverseString = function(string) {
	const splitString = string.split('');
	const reverseArray = splitString.reverse();
	const joinArray = reverseArray.join('');
	return joinArray;
};
// function called
console.log(`${reverseString('jag testar')}`);

console.log("\n\n#6.\n--------------------");
const findLongestWord = function(array) {
	let lengthOfWords = '';
	for (let i = 0; i < array.length; i += 1) {
		if (lengthOfWords.length < array[i].length) {
			lengthOfWords = array[i];
		};
	};
	return lengthOfWords;
};
// function called
console.log(`The longest word in the array is; ${findLongestWord(['this', 'is', 'an', 'appropriate', 'test'])}.`);


console.log("\n\n#7.\n--------------------");
const filterLongestWords = function(array, lengthToBeat) {
	let longWords = [];
	for (let i = 0; i < array.length; i += 1) {
		if (array[i].length > lengthToBeat) {
			longWords.push(array[i]);
		};
	};
	return longWords.join(', ');
};
// function called
console.log(`The words longer than 2 in the array are; ${filterLongestWords(['this', 'is', 'an', 'appropriate', 'test'], 2)}.`);
