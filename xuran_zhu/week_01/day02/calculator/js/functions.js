//Part 1
//Q1
const squareNumber = function (number) {
  const square = number * number;
  console.log(`The result of squaring the ${number} is ${square}`);
};
squareNumber(3);

//Q2
const halfNumber = function (number) {
  const half = number / 2;
  console.log(`Half of ${number} is ${half}.`);
};
halfNumber(5);

//Q3
const percentOf = function (num1, num2) {
  const percent = Math.round(num1 / num2 * 10000 /100) + "%";
  console.log(`${num1} is ${percent} of ${num2}.`);
};
percentOf(2,4);

// Q4
const areaOfCircle = function (radius) {
  const area = 2 * radius * Math.PI;
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
};
areaOfCircle(2);

//Bonus
const areaOfCircle2 = function (radius2) {
  const area2 = Math.round(2 * radius2 * Math.PI *100) / 100;
  console.log(`The area for a circle with radius ${radius2} is ${area2}.`);
};
areaOfCircle2(2);

//Part 2
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).

const operations = function (number1) {
  const halved = number1 / 2;
  const squared = halved * halved;
  const area = 2 * squared * Math.PI;
  const output = Math.round(squared / area * 10000 / 100) +"%";
  console.log(output);
  return output;
};
operations(10);
