// PART 1
console.log("--------------------\nPart 1\n--------------------");

const squareNumber = function(numberToBeSquared) {
  const squaredNumber = numberToBeSquared ** 2;
  console.log(`The result of squaring the number ${numberToBeSquared} is ${squaredNumber}.`);
  return squaredNumber;
}
// function called
squareNumber(3);
console.log('--------------------')

const halfNumber = function(numberToBeHalved) {
  const halvedNumber = numberToBeHalved / 2;
  console.log(`Half of ${numberToBeHalved} is ${halvedNumber}.`);
  return halvedNumber;
}
// function called
halfNumber(5);
console.log('--------------------');

const percentOf = function(num1, num2) {
  percentOfNumbers = num1 / num2 * 100;
  console.log(`${num1} is ${percentOfNumbers}% of ${num2}.`);
  return percentOfNumbers;
}
// function called
percentOf(2, 4);
console.log('--------------------');

const areaOfCircle = function(radius) {
  const calculatedArea = Math.PI * radius ** 2;
  const roundedArea = calculatedArea.toFixed(2);
  console.log(`The area of a circle with radius ${radius} is ${roundedArea}.`);
  return calculatedArea;
}
// function called
areaOfCircle(2);

console.log('\n\n\n\n');

// PART 2
console.log("--------------------\nPart 2\n--------------------");

const megaFunction = function(number) {
  const megaHalf = halfNumber(number);
  const megaSquared = squareNumber(megaHalf);
  const megaArea = areaOfCircle(megaSquared);
  const megaPercent = percentOf(megaArea, megaSquared);
}
megaFunction(10);
