// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// Bonus: Round the result so there are only two digits after the decimal.

const squareNumber = function(num){
  const result = Math.round((num * num) * 100)/100;
  console.log(`"The result of squaring the number ${num} is ${result}."`);
  return result;
}

const halfNumber = function(num){
  const result = Math.round((num / 2) * 100)/100;
  console.log(`"Half of ${num} is ${result}."`);
  return result;
}

const percentOf = function(num1, num2){
  const percentage = Math.round((num1/num2 * 100) * 100)/100;
  console.log(`"${num1} is ${percentage}% of ${num2}."`);
  return percentage;
}

const areaOfCircle = function(radius){
  const area = Math.round((radius * radius * Math.PI) * 100)/100;
  console.log(`"The area for a circle with radius ${radius} is ${area}."`);
  return area;
}

squareNumber(2);
halfNumber(2);
percentOf(2, 4);
areaOfCircle(2);

squareNumber(4);
halfNumber(4);
percentOf(4, 6);
areaOfCircle(4);

squareNumber(16);
halfNumber(16);
percentOf(16, 92);
areaOfCircle(16);

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const allFuncs = function(num) {
  const halfed = halfNumber(num);
  const squared = squareNumber(halfed);
  const area = areaOfCircle(squared);
  const percentage = percentOf(squared, area);

  console.log(`"Start:${num} Halfed:${halfed} Squared:${squared} Area:${area} Percentage:${percentage}"`);
}

allFuncs(4);
