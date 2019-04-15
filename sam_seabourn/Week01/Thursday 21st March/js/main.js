console.log('Up and running');

/*______     ______     __    __        ______     ______     ______     ______     ______     __  __     ______     __   __
 /\  ___\   /\  __ \   /\ "-./  \      /\  ___\   /\  ___\   /\  __ \   /\  == \   /\  __ \   /\ \/\ \   /\  == \   /\ "-.\ \
 \ \___  \  \ \  __ \  \ \ \-./\ \     \ \___  \  \ \  __\   \ \  __ \  \ \  __<   \ \ \/\ \  \ \ \_\ \  \ \  __<   \ \ \-.  \
  \/\_____\  \ \_\ \_\  \ \_\ \ \_\     \/\_____\  \ \_____\  \ \_\ \_\  \ \_____\  \ \_____\  \ \_____\  \ \_\ \_\  \ \_\\"\_\
   \/_____/   \/_/\/_/   \/_/  \/_/      \/_____/   \/_____/   \/_/\/_/   \/_____/   \/_____/   \/_____/   \/_/ /_/   \/_/ \/*/

//// LAB Question 1
//
/*Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions:
isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4 */


const shape = [{
    lngth: 4,
    wdth: 3
  },
  {
    lngth: 4,
    wdth: 6
  },
  {
    lngth: 4,
    wdth: 4
  },
  {
    lngth: 4,
    wdth: 2
  },
]

const isSquare = function(object) {
  if (object.lngth === object.wdth) {
    return "square";
  } else {
    return "Not a square";
  };
};

//// LAB Question 2
//
/*Part 2, Triangle
Given the following a triangle object like the one below, write the following functions:
isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not*/

const triangles = [{
    sideA: 3,
    sideB: 3,
    sideC: 3
  },
  {
    sideA: 3,
    sideB: 2,
    sideC: 2
  },
  {
    sideA: 0,
    sideB: 0,
    sideC: 0
  },
  {
    sideA: 0,
    sideB: 0,
    sideC: 0
  },
]


const isEquilateral = function(input) {
  if (input.sideA === input.sideB === input.sideC) {
    return "This triange is an equilateral"
  } else {
    return "Not equilateral"
  }
}

const isIsosceles = function(input) {
  if (input.sideA === input.sideB || input.sideC) {
    return "This triangle is isosceles"
  } else {
    return "not equilateral"
  }
}

const calcArea = function(input) {
  const sides = (input.sideA + input.sideB + input.sideC);
  const area = Math.sqrt(sides * (sides - input.sideA) * (sides - input.sideB) * (sides - input.sideC));
  return area;
}

const isObtuse = function(input) {
  if ((input.sideA ** input.sideA) > ((input.sideB * input.sideB) + (input.sideC * input.sideC)) ||
    (input.sideB * input.sideB) > ((input.sideC * input.sideC) + (input.sideA * input.sideA)) ||
    (input.sideC * input.sideC) > ((input.sideA * input.sideA) + (input.sideB * input.sideB))) {
    return "This triange is obtuse";
  } else {
    return "Not obtuse"
  }
}

///////////Homework The Cash Regesiter
//Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices
//(itemName: itemPrice). The function should return the total price of the shopping cart. Example

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(input) {
  const j = Object.keys(input)
  const itemCount = j.length
  let total = 0;
  for (var i = 0; i < itemCount; i++) {
    const valueOfItem = input[Object.keys(input)[i]]
    const valueOfItemConvert = Number(valueOfItem)
    console.log(`Looptest we looped ${i} times `)
    total += valueOfItemConvert;
  }
  return total
}
// Output
console.log(cartForParty)


////////// Homework Credit Card Validate
//You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//Here are the rules for a valid number:
//Number must be 16 digits, all of them must be numbers
//You must have at least two different digits represented (all of the digits cannot be the same)
//The final digit must be even
//The sum of all the digits must be greater than 16

/*
var str = "Hello World!";
var newStr = str.replace('Hello', 'Hy');
console.log(newStr);  // Prints: Hy World! */

/*
var str = 'Mozilla';
console.log(str.substring(1, 3));
// expected output: "oz"
console.log(str.substring(2));
// expected output: "zilla"
*/

const evenChecker = function(input) {
  var lastNumberAsString = input.toString().split('').pop();
  var lastNumber = Number(lastNumberAsString);
  var evenOrNot = (lastNumber % 2 === 0);
  return evenOrNot;
}

const lengthChecker = function(input) {
  var sum = 0;
  while (input) {
    sum += input % 10;
    input = Math.floor(input / 10);
  }
  sixteenPlus = (sum > 16)
  return sixteenPlus
}

//var obj = { first: 'someVal' };
//obj[Object.keys(obj)[0]]; //returns 'someVal'

const checkRepeatNumbers = function(input) {
  var n = input;
  var digits = ("" + n).split("");
  for (var i = 0; i < digits.length; i++) {
    if (digits[Object.keys(digits)[0]] === digits[Object.keys(digits)[i]]) {

    } else {
      return false
    }
  }
}


const validateCreditCard = function(input) {
  fixedNumber = input.replace(/-/g, '')
  if (isNaN(fixedNumber)) {
    return "Not a number"
  }
  if (fixedNumber.length !== 16) {
    return "Wrong Number of characters"
  }
  if (evenChecker(fixedNumber) === false) {
    return "Numbers are not even"
  }
  if (lengthChecker(fixedNumber) === false) {
    return "The addition of these numbers is not high enough"
  }
  if (checkRepeatNumbers(fixedNumber) === true) {
    return "repeat numbers";
  } else {
    return true
  }
}
