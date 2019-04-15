/*Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle*/

const rectangleA = {
  length: 4,
  width: 4
};

const square = function (){
  if (rectangleA.length === rectangleA.width){
    return 'rectangle is square';
  } else {
    return 'rectangle is not a sqaure';
  }
}
console.log(square());


const areaOfRectangleA = function (){
  return rectangleA.length * rectangleA.width;
}
console.log(`Area of rectangle is: ${areaOfRectangleA()}`);

  const perimeterOfRectangleA = function (){
    let result = 2 * (rectangleA.length + rectangleA.width);
    return result;
  }
console.log(`perimeter of rectangle is: ${perimeterOfRectangleA()}`);

/*Part 2, Triangle
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not*/

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};
let a = triangleA.sideA;
let b = triangleA.sideB;
let c = triangleA.sideC;

//console.log(triangleA.sideA);
 const isEquilateral = function () {

   if(a === b && a === c && b === c){
     return 'triangle is equilateral';
   } else {
     return 'triangle is not equilateral';
   }
 }

 console.log(isEquilateral());

const isIsosceles = function () {
  if(a === b || a === c || b === c){
    return 'triangle is isosceles';
  } else {
    return 'triangle is isosceles';
  }
}

console.log(isIsosceles());


const areaOfTriangle = function (){
   let area = 0.5 * (a + b + c);
   return area;
}
console.log(areaOfTriangle());

const isObtuse = function () {
if ( a**2 + b**2 < c**2){
  return 'triangle is obtuse';
} else {
  return 'triangle is not obtuse';
}
}
console.log(isObtuse());
