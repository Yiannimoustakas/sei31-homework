//Part One

//Square Number Function
const squareNumber = (number) => {
  const result = number * number;
  console.log(`The result of squaring the number ${number} is ${result}.`);

  return result;
}

// Half A Number Function
const halfNumber = (number) => {
  const result = number / 2;
  console.log(`Half of ${number} is ${result}.`);
  return result;
}
// Percentage Of Two Numbers Function
const percentOf = (num1, num2) => {
  const result = (num2 / num1) * 100;
  const round = Math.floor(result);
  console.log(`${num2} is ${round}% of ${num1}`);
  return result;
}
//Area Of Circle Function
const areaOfCircle = (radius) => {
  const area = Math.PI * (radius * radius);
  const round = Number((area).toFixed(2));
  console.log(`The area for a circle with radius ${radius} is ${round}`);
  return area;
}

//Populate Inner HTML with answers for SuperFunction
const populateInnerHTML = () =>{
  document.getElementById("superNumber").innerHTML = num;
  document.getElementById("areaAnswer").innerHTML = superArea;
  document.getElementById("percentAnswer").innerHTML = superPercent;
  document.getElementById("halvedAnswer").innerHTML = superHalf;
  document.getElementById("squaredAnswer").innerHTML = superSquare;
}

//Part Two
const superFunction = (num) =>{
  const superHalf = halfNumber(num);
  const superSquare = squareNumber(superHalf);
  const superArea = areaOfCircle(superSquare);
  const superPercent = percentOf(superArea, superSquare);
  console.log(superPercent);
  document.getElementById("superNumber").innerHTML = num;
  document.getElementById("areaAnswer").innerHTML = superArea;
  document.getElementById("percentAnswer").innerHTML = superPercent;
  document.getElementById("halvedAnswer").innerHTML = superHalf;
  document.getElementById("squaredAnswer").innerHTML = superSquare;
}
