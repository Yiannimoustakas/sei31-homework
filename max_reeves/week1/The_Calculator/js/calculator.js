///squaredNumber

const squareNumber = function (number){
  const square = (number**2)
  console.log(`The result of squaring the number ${ number } is ${ square }.`);
  return square;
}
squareNumber(12);

///halfNumber

const halfNumber = function (number){
  const halvedNumber = (number/2)
  console.log(`Half of ${ number } is ${ halvedNumber }.`);
  return halvedNumber;
}
halfNumber(10);

///percentOf

const percentOf = function (num1, num2){
  const percent = (num1/num2) * 100;
  console.log(`${num1} is ${ percent }% of ${ num2 }.`);
  return percent;
}
percentOf(10, 50);

///areaOfCircle
//Declares a function called areaofcircle with radius as the argument
//declares a const called area inside the function taht uses a math.pie * radius to fin the areaOfCircle
//logs the area to the console
//returns the area
//calls the function from outside of the function

const areaOfCircle = function (radius){
  const area = (Math.PI * radius**2).toFixed(2);
  console.log(`The radius is ${ area }`)
  return area;
};
areaOfCircle(11);

// Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
//
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const finalFunction = function(number){
  const half = halfNumber(number);
	const square = squareNumber(half);
  const area = areaOfCircle(square);
  const percentage = percentOf(area, square);
  return percentage;
}
finalFunction(20)
