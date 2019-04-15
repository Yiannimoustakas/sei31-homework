/*Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).*/

function squareNumber (num) {
  const squareCalc = num * num;
  console.log(`The result of squaring the number ${ num } is ${ squareCalc }.`);
  return squareCalc;
};

squareNumber(3);

function halfNumber (num) {
  const halfCalc = num / 2;
  console.log(`Half of ${ num.toFixed(2) } is ${ halfCalc.toFixed(2) }`);
  return halfCalc;
};

halfNumber(5);

function percentOf (num1, num2) {
  const whatPercent = (num1/num2)*100;
  console.log(`${ num1.toFixed(2) } is ${ whatPercent.toFixed(2) }% of ${ num2.toFixed(2) }.`);
  return whatPercent;
};

percentOf(2,4);

function areaOfCircle (radius) {
  const circleAreaCalc = Math.PI * radius * radius;
  console.log(`The area for a circle with radius ${ radius.toFixed(2) } is ${ circleAreaCalc.toFixed(2) }`);
  return circleAreaCalc;
};

areaOfCircle(2);


function professionalCalc(num) {
    const half    = halfNumber(num);
    const squared = squareNumber(half);
    const area    = areaOfCircle(squared);
    const result  = percentOf(squared, area);
    return result;
};

professionalCalc(10);
