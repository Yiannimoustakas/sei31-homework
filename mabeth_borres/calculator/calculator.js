// Homework By Mabeth Borres of SEI-31

// ALL MY HOMEWORK can be accessed running at:
// https://mmborres.github.io/homework/calculator.html

// Global Variable for display only on Web Page
let printMsg = "";

//Write a function called squareNumber that will take one argument (a number), square that number,
//and return the result. It should also log a string like "The result of squaring the number 3 is 9."

var squareNumber = function(num) {
	const sq = num*num;
	const msg = `The result of squaring the number ${num} is ${sq}.`
	console.log(msg);
	printMsg = msg;

	return sq;
};

//Write a function called halfNumber that will take one argument (a number),
//divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

var halfNumber = function(num) {
	const dv = num/2;
	const msg = `Half of ${num} is ${dv}.`;
	console.log(msg);
	printMsg = msg;

	return dv;
};

//Write a function called percentOf that will take two numbers,
//figure out what percent the first number represents of the second number,
//and return the result. It should also log a string like "2 is 50% of 4."

var percentOf = function(num1, num2) {
	const pr = (num1/num2) * 100;
	const msg = `${num1} is ${ num2%num1===0 ? pr : pr.toFixed(2)}% of ${num2}.`;
	console.log(msg);
	printMsg = msg;

	return pr;
};

//Write a function called areaOfCircle that will take one argument (the radius),
//calculate the area based on that, and return the result.
//It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(radius) {
	const pi = Math.PI; //3.14;
	const area = pi * ( radius * radius );
	//let cc = area.toFixed(2);
	const msg = `The area for a circle with radius ${radius} is ${area}. Bonus: The area is ${area.toFixed(2)}.`
	console.log(msg);
	//console.log(`Bonus: The area is ${area.toFixed(2)}.`);
	printMsg = msg;

	return area;
};

//Write a function that will take one argument (a number) and perform the following operations,
//using the functions you wrote earlier1:
//Take half of the number and store the result.
//Square the result of #1 and store that result.
//Calculate the area of a circle with the result of #2 as the radius.
//Calculate what percentage that area is of the squared result (#3).

const superFunction = function(num) {
	const msg = `Starting number: ${num}`;
	document.getElementById("intro").innerHTML = msg;

	const halfNumberRes = halfNumber(num);
	document.getElementById("halfNumber").innerHTML = printMsg;

	const sqNum = squareNumber(halfNumberRes);
	document.getElementById("squareNumber").innerHTML = printMsg;

	const areaC = areaOfCircle (sqNum);
	document.getElementById("areaOfCircle").innerHTML = printMsg;

	const percentOfNum = percentOf(sqNum, areaC);
	document.getElementById("percentOf").innerHTML = printMsg;

	//const msg = '';
	//document.getElementById("superFunction").innerHTML = msg;
	//console.log();

};

superFunction(3);

/////// Handle from Web Page

const ans = "<b>ANSWER >> </b>";

const handleSuperFunction = function() {
	const number = document.getElementById("startingValue").value;
	if (number==="") {
		return; //cannot be empty
	} else if (Number.isInteger(parseInt(number))===false) {
		return;
	}
  
	superFunction(parseInt(number));
};

const handleSquareNumber = function() {
	const number = document.getElementById("sqValue").value;
	//console.log("test " + Number.isInteger(parseInt(number)));
	if (number==="") {
		return; //cannot be empty
	} else if (Number.isInteger(parseInt(number))===false) {
		document.getElementById("squareNumberOnly").innerHTML = "";
		return;
	}
	squareNumber(parseInt(number));
	document.getElementById("squareNumberOnly").innerHTML = ans + printMsg;
};

const handleAreaOfCircle = function() {
	const number = document.getElementById("aValue").value;
	if (number==="") {
		return; //cannot be empty
	} else if (Number.isInteger(parseInt(number))===false) {
		document.getElementById("areaOfCircleOnly").innerHTML = "";
		return;
	}
	areaOfCircle(parseInt(number));
	document.getElementById("areaOfCircleOnly").innerHTML = ans + printMsg;
};

const handlePercentOf = function() {
	const num1 = document.getElementById("p1Value").value;
	const num2 = document.getElementById("p2Value").value;
	//console.log(Number.isInteger(parseInt(num1)));
	//console.log(Number.isInteger(parseInt(num2)));
	
	if (num1==="" || num2==="") {
		return; //cannot be empty
	} else if (Number.isInteger(parseInt(num1))===false 
		|| Number.isInteger(parseInt(num2))===false) {
		//console.log("here");
		document.getElementById("percentOfOnly").innerHTML = "";
		return;
	}
	
	percentOf(parseInt(num1), parseInt(num2));
	document.getElementById("percentOfOnly").innerHTML = ans + printMsg;
};

const handleHalfNumber = function() {
	const number = document.getElementById("hValue").value;
	if (number==="") {
		return; //cannot be empty
	} else if (Number.isInteger(parseInt(number))===false) {
		document.getElementById("halfNumberOnly").innerHTML = "";
		return;
	}
	halfNumber(parseInt(number));
	document.getElementById("halfNumberOnly").innerHTML = ans + printMsg;
};
