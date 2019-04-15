// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
const rectangleA = {
  length: 20,
  width: 20
};

const isSquare = function(r){
  if (r.length === r.width){
    return console.log(`is a square`);
  } else {
    return console.log(`is a rectangle`);
  }
}
isSquare(rectangleA);

// area - Returns the area of the rectangle
const area = rectangleA.length * rectangleA.width;
  console.log(area);

//const perimeter = function()
const perimeter = (rectangleA.length * 2) + (rectangleA.width * 2);
  console.log(perimeter);

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
const triangleA = {
  sideA: 4,
  sideB: 3,
  sideC: 3
};

// isEquilateral - Returns whether the triangle is equilateral or not (all equal sides)
const isEquilateral = function(a){
  if (a.sideA === a.sideB && a.sideA === a.sideC) {
    return console.log(`Triangle is equilateral`);
  } else {
    return console.log('Triangle is NOT equilateral');
  }
}
isEquilateral(triangleA);

//isIsosceles - Returns whether the triangle is isosceles or not (2 equal sides)
const isIsosceles = function(b){
  if (b.sideA === b.sideB || b.sideB === b.sideC || b.sideA === b.sideC){
    return console.log(`Triangle has two of the same side so is Isoceles`);
  } else {
    return console.log(`Triangle does not meet the criterial of an Isoceles Triangle`);
  };
}
isIsosceles(triangleA);

//isObtuse - Returns whether the triangle is obtuse or not. Kinda pointless, the above does it anyway
const isObtuse = function(b){
  if (b.sideA === b.sideB || b.sideB === b.sideC || b.sideA === b.sideC){
    return console.log(`Triangle is NOT obtuse`)
  } else {
    return console.log(`Triangle is obtuse`)
  }
}
isObtuse(triangleA);

// area - Returns the area of the Triangle - Heros formula
let trianglePerimeter = triangleA.sideA + triangleA.sideB + triangleA.sideC // calculates perimeter of triangleA variables
let hp = trianglePerimeter / 2 // devides perimeter by 2

const triangleArea = Math.sqrt(hp * (hp - triangleA.sideA) * (hp - triangleA.sideB) * (hp - triangleA.sideC)); //heros formula
console.log(`Triangle area = ${triangleArea}`); // log result


//
// The Cash Register
//Write a function called cashRegister that takes a shopping cart object.
//The object contains item names and prices (itemName: itemPrice).
//The function should return the total price of the shopping cart. Example
//
// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(){
//convert cart to array
cartValues = Object.values(cartForParty)
//converts array to intergers
const convertToInterger = cartValues.map(x => x * 1);
//sum of interger
const sum = convertToInterger.reduce((partial_sum, a) => partial_sum + a);
console.log("Your total is " + sum);
}

cashRegister();


// Credit Card Validation
// You're starting your own credit card business.
// You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
//Rule 1
// Number must be 16 digits, all of them must be numbers
//Rule 2
// You must have at least two different digits represented (all of the digits cannot be the same)
//Rule 3
// The final digit must be even
//Rule 4
// The sum of all the digits must be greater than 16

// }
const validateCreditCard = function(cc){
  //first, remove - from credit card
  let cardNumber = cc.split('-');
  cardNumber = cardNumber.reduce((string, elements) => string + elements) //group to 1 starting
  cardNumber = cardNumber.split('') //split
  if(cardNumber.length !== 16){ // Number must be 16 digits, all of them must be numbers
    return 'invalid Credit Card - less than 16';
  }
  for (var i = 0; i < cardNumber.length; i++) { //checks for letters in array
    if (!Number(cardNumber[i]) === true && cardNumber[i] !== "0") {
      return 'invalid Credit Card - letters in array'
    }
  }
  if(cardNumber[15] % 2 !== 0) { // checks for even last number
      return `invalid Credit card - last number not % 2 = 0`
  }
  const ccToInterger = cardNumber.map(x => x * 1); // checks that total is above 16
  const sum = ccToInterger.reduce(add);
  function add(accumulator, a) {
      return accumulator + a;
  } if (sum <= 16){
      return `invalid Credit card - total below 16`
  }
  let firstNumber = ccToInterger[0];
  console.log(firstNumber);
  console.log(cardNumber);
  console.log(ccToInterger);
  //take the first number and check that it doesnt duplicate accross the array.
    for (var i = 1; i < ccToInterger.length; i++) {
      if(firstNumber === ccToInterger[i]){
        return `card number valid`
      } else {
        console.log(`all same invalid`);
        }
    }
}

//console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('6666-6666-6666-6666')); //n
//console.log(validateCreditCard('9999-9999-8888-0000')); //y
//console.log(validateCreditCard('6666-6666-6666-1666')); //y
// console.log(validateCreditCard('a923-3211-9c01-1112')); //n
// console.log(validateCreditCard('4444-4444-4444-4444')); //n
// console.log(validateCreditCard('1111-1111-1111-1110')); //n


    //from da internets - works
    // takes the form field value and returns true on valid number
    function valid_credit_card(value) {
      // accept only digits, dashes or spaces
    	if (/[^0-9-\s]+/.test(value)) return false;

    	// The Luhn Algorithm. It's so pretty.
    	var nCheck = 0, nDigit = 0, bEven = false;
    	value = value.replace(/\D/g, "");

    	for (var n = value.length - 1; n >= 0; n--) {
    		var cDigit = value.charAt(n),
    			  nDigit = parseInt(cDigit, 10);

    		if (bEven) {
    			if ((nDigit *= 2) > 9) nDigit -= 9;
    		}

    		nCheck += nDigit;
    		bEven = !bEven;
    	}

    	return (nCheck % 10) == 0;
    }
console.log(valid_credit_card(`9999-9999-8888-0000`));




//
