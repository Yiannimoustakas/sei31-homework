// // Part 1
// // Write a function called squareNumber that will take one argument (a number), 
// square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."

function squareNumber(aNumber){
  var square = aNumber * aNumber;
  return square;

}
// // Write a function called halfNumber that will take one argument (a number), d
// ivide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".

function halfNumber(aNumber){
   var half = aNumber /2;
   console.log(`Half of ${aNumber} is ${half}`);
   return half
}

// // Write a function called percentOf that will take two numbers, figure 
// out what percent the first number represents of the second number, and return the result. 
// It should also log a string like "2 is 50% of 4."

function percentOf(a, b){
  let result = (a/b) * 100;
  console.log(` ${a} is ${result}% of ${b}`);
}


// // Write a function called areaOfCircle that will take one argument (the radius), 
// calculate the area based on that, and return the result. 

function areaOfCircle(radius){
  var result = Math.round(radius * radius * Math.PI, 2) 
  console.log(`The area for a circle with radius ${radius} is ${result}`);
  return result;

}

areaOfCircle(49)
// It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
// // Bonus: Round the result so there are only two digits after the decimal.



// Part 2
// Write a function that will take one argument (a number) and perform the following operations, 
// using the functions you wrote earlier1:
function func1(a){
  var result1 = halfNumber(a)
  var result2 = squareNumber(a)
  var result3 =areaOfCircle(a)
  var result4 =percentOf(a)

}
// Take half of the number and store the result.
// Square the result of #1 and store that result.
// Calculate the area of a circle with the result of #2 as the radius.
// Calculate what percentage that area is of the squared result (#3).



