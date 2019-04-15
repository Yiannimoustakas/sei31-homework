//console.log("working?");
/*The Calculator
Part 1

*/

//Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
//It should also log a string like "The result of squaring the number 3 is 9."

const squareNumber = function(sqnum){
  numSquared = sqnum * sqnum;
  console.log(`The result of squaring the number ${ sqnum } is ${ numSquared }`);
  return numSquared;
};

squareNumber(9);

//Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
//It should also log a string like "Half of 5 is 2.5.".


const  halfNumber = function(hNum){
  half = hNum / 2;
  console.log(`Half of ${ hNum } is ${ half }`);
  return half;
};

halfNumber(10);

//Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number,
//and return the result. It should also log a string like "2 is 50% of 4."

const percentOf = function(firstNum, secondNum){
  numberPercentage = firstNum/secondNum * 100;
  console.log(`${ firstNum } is ${ numberPercentage }% of ${ secondNum }`);
  return numberPercentage;
};

percentOf(4, 2);
percentOf(50, 100);

//Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
//It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
//Bonus: Round the result so there are only two digits after the decimal.

const areaOfCircle = function(radius){
  area = (Math.PI * radius * radius).toFixed([2]) // toFixed limits to 2 decimal
  console.log(`The area for a circle with a radius of ${ radius } is ${ area }.`)
  return area;
}

areaOfCircle(10);

/*
Part 2
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).

*/
console.log("")
console.log("Super Function")

const superFunction = function(num){
  const result1 = halfNumber(num); //step1 Take half of the number and store the result.
  //console.log(`${ result1 } step 1`); -Half the number
  const result2 = squareNumber(result1); //step2 Square the result of #1(result1) and store that result.
  //console.log(`${ result2 } step 2`); -Number Squared
  const result3 = areaOfCircle(result2); //step3 Calculate the area of a circle with the result of #2(result2) as the radius.
  //console.log(`${ result3 } step 3`); -area of the circle based on result2
  const result4 = percentOf(result3, result2); //step4 Calculate what percentage that area(result3) is of the squared result(result2) (#3).
  //console.log(`${ result4 } step4`);
};

superFunction(15);
console.log("")
superFunction(8);

//end
