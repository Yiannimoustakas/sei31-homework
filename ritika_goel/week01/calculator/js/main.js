// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
const squareNumber = function (numInput) {
  const square = numInput * numInput;
  console.log(`The result of squaring the number ${ numInput } is ${ square }.`);
  return square;
};

squareNumber(3);
squareNumber(5);
squareNumber(9);

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
const halfNumber = function (numInput) {
  const half = numInput / 2;
  console.log(`Half of ${ numInput } is ${ half }.`);
  return half;
};

halfNumber(10);
halfNumber(7);
halfNumber(200);

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
const percentOf = function (numOutput, numInput) {
  const result = numOutput * 100 / numInput;
  console.log(`${ numOutput } is ${ result }% of ${ numInput }`);
  return result;
};

percentOf(100, 1000);
percentOf(1, 20);
percentOf(15, 100);

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
const areaOfCircle = function (radius) {
  const area = Math.PI * radius * radius;
  const result = Number(Math.round( area +'e2')+'e-2');
  console.log(`The area for a circle with radius ${ radius } is ${ result }.`);
  return result;
};

areaOfCircle(2);
areaOfCircle(10);
areaOfCircle(45);

// Bonus: Round the result so there are only two digits after the decimal.

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).
const calc = function (numInput) {
  const halfNum = halfNumber(numInput); //half of the number
  const squareNum = squareNumber(halfNum); //square of the result of #1
  const areaResult = areaOfCircle(squareNum); //area of a circle with the result of #2 as the radius
  const percentResult = percentOf(areaResult, squareNum); //percentage that area is of the squared result (#3)
};

calc(10);
