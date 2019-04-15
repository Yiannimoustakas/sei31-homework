// Part 1, Rectangle
//
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };
const rectangle = {
  length: 7,
  width: 7
}

const isSquare = function () {
  if ( rectangle.length === rectangle.width ) {
    console.log( "This is a square." );
  } else {
    console.log( "This is not a square." );
  }
}

const area = function () {
  console.log(`The area of the rectangle is ${ rectangle.length * rectangle.width }.`);
}

const perimeter = function () {
  console.log(`The perimeter of the rectangle is ${ 2 * (rectangle.length + rectangle.width) }.`);
}

isSquare();
area();
perimeter();


// Part 2, Triangle
//
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };
const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function () {
  if ( triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC ) {
    console.log("This triangle is equilateral.");
  } else {
    console.log("This triangle is not equilateral.");
  }
}

const isIsosceles = function () {
  if ( triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC || triangle.sideC === triangle.sideA ) {
    console.log("This triangle is Isosceles.");
  } else {
    console.log("This triangle is not Isosceles.");
  }
}

const areaTriangle = function () {
  const halfPer = ( triangle.sideA + triangle.sideB + triangle.sideC ) / 2;
  const areaT = Math.sqrt(halfPer * ( halfPer - triangle.sideA) * ( halfPer - triangle.sideB) * ( halfPer - triangle.sideC));
  console.log(`The area of the triangle is ${ areaT }.`);
}

const isObtuse = function () {
  let largestSide;
  let otherSides = [];
  if ( triangle.sideA > triangle.sideB ) {
    otherSides.push( triangle.sideB );
    largestSide = triangle.sideA;
  } else {
    otherSides.push( triangle.sideA );
    largestSide = triangle.sideB;
  }
  if( triangle.sideC > largestSide ) {
    otherSides.push( largestSide );
    largestSide = triangle.sideC;
  } else {
    otherSides.push( triangle.sideC );
  }
  const lSideSquare = Math.pow( largestSide, 2 );
  const otherSidesSquare = Math.pow( otherSides[0], 2 ) + Math.pow( otherSides[1], 2 );
  if( otherSidesSquare < lSideSquare ) {
    console.log("This triangle is obtuse.");
  } else {
    console.log("This triangle is not obtuse.");
  }
}

isEquilateral();
isIsosceles();
areaTriangle();
isObtuse();
