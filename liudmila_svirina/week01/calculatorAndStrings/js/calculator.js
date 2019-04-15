// Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."


const squareNumber = function(number) {
  const squareNumber = number * number;
  console.log(`${ squareNumber }`);
  return squareNumber;
};

squareNumber(4)
squareNumber(5)

// Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

const halfNumber = function(number) {
  const halfNumber = number / 2;
  console.log(`${ halfNumber}`);
  return halfNumber;
};

halfNumber(10)
halfNumber(30)

// Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(number1, number2) {
  const percent = (number1 / number2) * 100;
  console.log(`${number1} is ${percent}% of ${number2}`);
  return percent;
};

percentOf(1, 4)

// Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."

const areaOfCircle = function(radius) {
  const areaCircle1 = radius * radius * Math.PI;
  const areaCircle = Math.round(areaCircle1);
  console.log(`area Of Circle with radius ${radius} is ${areaCircle}`);
};

areaOfCircle(2)


// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const magic = function(number) {
  const halfNumber = number / 2;
  const squareNumber = halfNumber * halfNumber;
  const areaCircle = squareNumber * squareNumber * Math.PI;
  const sqareaCircle =  areaCircle * areaCircle;
  const percent = (areaCircle / sqareaCircle) * 100;
  console.log(`#1 ${halfNumber} #2 ${squareNumber} #3 ${areaCircle} #4 ${percent}`);
  return percent;
};

magic(4)
