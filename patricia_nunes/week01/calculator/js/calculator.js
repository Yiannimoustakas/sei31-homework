console.log(123);

//comment multiple lines = option + shift + a

/* Part 1
Write a function called squareNumber that will take one argument (a number), square that number, 
and return the result. It should also log a string like "The result of squaring the number 3 is 9."*/
 
const squareNumber = function(number){
 const resultSN = number * number;
 console.log(`The result of squaring the number ${number} is ${resultSN}.`);
 return resultSN;
};

squareNumber(3);

/* Write a function called halfNumber that will take one argument (a number), 
divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
*/

const halfNumber = function (number) {
  const resultHN = number / 2;
  console.log(`Half of ${number} is ${resultHN}.`);
  return resultHN;
};

halfNumber(5);

/*Write a function called percentOf that will take two numbers, 
figure out what percent the first number represents of the second number, and return the result. 
It should also log a string like "2 is 50% of 4."
return Math.floor(percentFor/percentOf*100);
*/

const percentOf = function (num1, num2) {
  const resultPO = (num1/num2)*100;
  console.log(`${num1} is ${resultPO}% of ${num2}.`)
  return resultPO;
};

percentOf(2,4);

/*Write a function called areaOfCircle that will take one argument (the radius), 
calculate the area based on that, and return the result. 
It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.
let area = Math.PI * (radius * radius);
    console.log(area);
    console.log(Math.round(area*100)/100);
 */

const areaOfCircle = function (radius) {
  const resultAOC = Math.PI * (radius * radius);
  console.log(`The area for a circle with radius ${radius} is ${resultAOC}.`);
  return resultAOCTwoDigits = (Math.round(resultAOC*100)/100);
};

areaOfCircle(2);
console.log(resultAOCTwoDigits);

/* Part 2
Write a function that will take one argument (a number) and perform the following operations, 
using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).

let double = function(num) {
   return num * 2;
}
let six = double(3);
// 6
 */

const superFuntion = function (number) {
  
  const square = halfNumber(number);
   
  const radius = squareNumber(square);
   
  const porcentage = areaOfCircle(radius); 

  percentOf(porcentage, radius);
};

superFuntion(4);

/* DrEvil
Create a function called DrEvil. 
It should take a single argument, 
an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)

  condition ? resultIfTrue : resultIfFalse;
 */

 const DrEvil = function (amount) {
  return amount === 1000000 ? `${amount} dollars (pink)` : `${amount} dollars`; 
 };

 console.log(DrEvil(10));
 console.log(DrEvil(1000000));

/*  MixUp
Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
 */

 

