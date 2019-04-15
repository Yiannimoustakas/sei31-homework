console.log('test');


/* Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
It should also log a string like "The result of squaring the number 3 is 9." */

const squareNumber = function(enteredNumber) {
  const enteredNumberSquared = enteredNumber * enteredNumber;
  console.log("The result of squaring the number " + enteredNumber + " is " + enteredNumberSquared + ".");
  return enteredNumberSquared;
};


/* Write a function called halfNumber that will take one argument (a number),
divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".*/


const halfNumber = function(enteredNumber) {
  const enteredNumberHalved = enteredNumber / 2;
  console.log(`Half of ${ enteredNumber } is ${ enteredNumberHalved }.`);
  return enteredNumberHalved;
};

/* Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number,
and return the result. It should also log a string like "2 is 50% of 4."*/


const percentOf = function(enteredNumber1, enteredNumber2) {
  const percentageCalc = enteredNumber1 / enteredNumber2 * 100;
  console.log(`${enteredNumber1} is ${percentageCalc}% of ${enteredNumber2}.`);
  return percentageCalc;
};

/*Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."*/

 const areaOfCircle = function(radius){
  const area = radius * Math.PI;
  console.log(`The area for a circle with radius of ${ radius } is ${ area }.`);
  const areaRounded = area.toFixed(2)
  return areaRounded;
 }

const massCalc = function(magicNumber){
  const halfMagicNumber = halfNumber(magicNumber);
  const halfAndSquaredMagicNumber = squareNumber(halfMagicNumber);
  const areaAndHalfAndSquaredMagicNumber = areaOfCircle(halfAndSquaredMagicNumber);
  const finalNumber = areaAndHalfAndSquaredMagicNumber / halfAndSquaredMagicNumber * 100;
  return finalNumber;
}

/*
Write a function that will take one argument (a number) and perform the following operations,
using the functions you wrote earlier1:
Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).*/
