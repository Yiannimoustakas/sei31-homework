console.log("I'm the best")
/* 
Geometry Function Lab
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter P=2(l+w) - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};
*/

const rectangleA = {
  length: 4,
  width: 4
};


const isSquare = function(rectangle) {
 if (rectangle.length === rectangle.width) {
   return console.log(`Rectangle is a square.`);
 } else {
   return console.log(`Rectangle is not a square.`);
 }
};

isSquare(rectangleA);


const area = function(rectangle) {
 return console.log(`area: ${rectangle.length * rectangle.width}`);
};

area(rectangleA);



const perimeter = function(rectangle) {
  return console.log(`perimeter: ${(rectangle.width * rectangle.length)*2}`);
};

perimeter(rectangleA);


/* Part 2, Triangle
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4 */

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};


const isEquilateral = function(triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideA === triangle.sideC) {
    return console.log("Triangle is equilateral")
  } else {
    return console.log("Triangle is not a equilateral")
  }
};

isEquilateral(triangleA);


const isIsosceles = function(triangle) {
  if (triangle.sideA === triangle.sideB && triangle.sideA !== triangle.sideC) {
    return ("Triangle is isosceles.");
  } else if (triangle.sideB === triangle.sideC && triangle.sideB !== triangle.sideA) {
    return ("Triangle is isosceles.");
  } else if (triangle.sideC === triangle.sideA && triangle.sideC !== triangle.sideB) {
    return ("Triangle is isosceles.");
  } else {
    return ("triangle is not a isosceles.")
  }
};

console.log(isIsosceles(triangleA));


/* // gives you the area of a triangle if you know all 3 sides
var triarea = function(side1,side2,side3) {
	var p = (side1+side2+side3)/2;
	var a = Math.sqrt(p*(p-side1)*(p-side2)*(p-side3));
  return a;
}
//fill in side lengths below
document.write(triarea(11,9,9)); */

const areaTriangle = function (triangle) {
  let p = (triangle.sideA + triangle.sideB + triangle.sideC);
  let a = Math.sqrt(p*(p-triangle.sideA)*(p-triangle.sideB)*(p-triangle.sideC));
  return a;
};

console.log(areaTriangle(triangleA))


/* isObtuse: function() {
  max = Math.max(this.sideA, this.sideB, this.sideC);
  if (this.sideA == max) {
    return this.sideA > Math.sqrt(this.sideB * this.sideB + this.sideC * this.sideC);
  }
  else if (this.sideB == max) {
    return this.sideB > Math.sqrt(this.sideA * this.sideA + this.sideC * this.sideC);
  }
  else {
    return this.sideC > Math.sqrt(this.sideB * this.sideB + this.sideA * this.sideA);
  }
} */

const isObtuse = function (triangle) {
  let max = Math.max(triangle.sideA, triangle.sideB, triangle.sideC);
  
  if (triangle.sideA === max) {
    return triangle.sideA > Math.sqrt(triangle.sideB * triangle.sideB + triangle.sideC * triangle.sideB);
  }  else if (triangle.sideB === max) {
    return triangle.sideB > Math.sqrt(triangle.sideA * triangle.sideA + triangle.sideC * triangle.sideC);
  } else { 
    return triangle.sideC > Math.sqrt(triangle.sideB * triangle.sideB + triangle.sideA * triangle.sideA);
  };
};

console.log(`Triangle is obtuse? ${isObtuse(triangleA)}`)

/* The Cash Register
Write a function called cashRegister that takes a shopping cart object. 
The object contains item names and prices (itemName: itemPrice). 
The function should return the total price of the shopping cart. Example

// Input
const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55 

function cashRegister(cart){
  var items = Object.keys(cart); // array of items by key   
  var sum = 0; 
  
  for (var i = 0; i < items.length; i++) {
    var itemName = items[i]; // get the name of the key for the item
    var itemPrice = cart[itemName]; // get the price for the item
    sum += Number.parseFloat(itemPrice); // convert the price to a float and add it to the sum
  }

  return sum;
}
*/

const cartForDay = {
  banana: "1.10",
  orange: "2",
  apple: "1",
  beef: "15.15"
};

const cashRegister = function (shoppingCart) {
  let items = Object.keys(shoppingCart);
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    let itemName = items[i];
    let itemPrice = shoppingCart[itemName];
    total += Number.parseFloat(itemPrice);
  }
  return total;
};

console.log(cashRegister(cartForDay));

/* /* Credit Card Validation
You're starting your own credit card business. 
You've come up with a new way to validate credit cards with a simple function called 
validateCreditCard that returns true or false.
 */
const creditCard = 9999999988880000; 

const validateCreditCard = function(input) {
  console.log(input);
  const inputQuantitie = 

  return
};

validateCreditCard(creditCard);
/*Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number
Example
validateCreditCard('9999-9999-8888-0000'); // Returns: true
Hint: Remove the dashed from the input string before checking if the input credit card number is valid.

Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is

{ valid: true, number: 'a923-3211-9c01-1112' } 
{ valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration. */