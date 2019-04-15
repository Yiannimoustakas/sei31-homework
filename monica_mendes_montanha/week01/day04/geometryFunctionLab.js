console.log("%c--Geometry Function Lab--", "color: blue; font-size: large; background-color: yellow;");

/*
Geometry Function Lab
Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
const rectangleA = {
  length: 4,
  width: 4
};
*/

const isSquareOrRectangle = function(length, width){

  if(length === width) {
    return 'is square';
  } else {
    const area = length * width;

    const perimeter = (length+width)*2;

    return `is rectangle, area: ${area} perimeter: ${perimeter} `;
  }
};

console.log( isSquareOrRectangle(2,2) );
console.log( isSquareOrRectangle(2,3) );

/*
Part 2, Triangle
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not
const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
*/

const triangle = function(side1, side2, side3){

  if (side1 === side2 && side1 === side3 && side2 === side3){
    return `the triangle is equilateral`;
  } else if (side1 === side2 || side1 === side3 || side2 === side3){
    return `the triangle is isosceles`;
  } else {
    return `the triangle is escaleno`;
  }

};

console.log( triangle(3,3,3) );
console.log( triangle(2,2,3) );
console.log( triangle(3,4,5) );