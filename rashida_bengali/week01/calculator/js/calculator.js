console.log('Up and running!');

const squareNumber = function (number) {
  const result = number * number;
  console.log(`The result of squaring the number ${number} is ${result}.`);
  return result;
};

const halfNumber = function (value) {
  const answer = value / 2;
  console.log(`The half of ${value} is ${answer}.`);
  return answer;
};

const percentOf = function (a,b) {
  const output = a / b * 100;
  console.log(`${a} is ${output}% of ${b}.`);
  return output;
};

const areaOfCircle = function (radius) {
  const area = (Math.PI * radius * radius).toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${area}.`);
  return area;
};

const calculate = function (digit) {
  const resultOne = halfNumber(digit);
  console.log(resultOne);

  const resultTwo = squareNumber(resultOne);
  console.log(resultTwo);

  const resultThree = areaOfCircle(resultTwo);
  console.log(resultThree);

  const resultFour = percentOf(resultThree,resultTwo);
  console.log (resultFour);
};

calculate (4);
