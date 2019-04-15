// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle


const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function(rect){
  return rect.length === rect.width ? true : false;
}

const rectArea = function(rect){
    return rect.length * rect.width;
}

const perimeter = function(rect){
  return 2 * (rect.length + rect.width);
}

console.log("Is Square: " + isSquare(rectangleA));
console.log(rectArea(rectangleA) + " units²");
console.log(perimeter(rectangleA) + " units");

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(tri){
   return (compareSides(tri.sideA, tri.sideB) &&
           compareSides(tri.sideC, tri.sideB) &&
           compareSides(tri.sideA, tri.sideC));
}

const isIsosceles = function(tri){
  return (compareSides(tri.sideA, tri.sideB) ||
           compareSides(tri.sideC, tri.sideB) ||
           compareSides(tri.sideA, tri.sideC));
}

const isObtuse = function(tri){
  let lengths = Object.values(tri);
  lengths.sort(function(a,b) { a-b; };);
  console.log(lengths);
  const leftPythag = lengths[0] * lengths[0] + lengths[1] * lengths[1];
  const rightPythag = lengths[2] * lengths[2];
  return leftPythag < rightPythag;
}

const triArea = function(tri){
  let s = (tri.sideA + tri.sideB + tri.sideC)/2;
  return Math.sqrt(s * (s - tri.sideA) * (s - tri.sideB) * (s - tri.sideC));

}

const compareSides = function(s1, s2){
  return s1 === s2;
}

console.log("Is Equilateral: " + isEquilateral(triangleA));
console.log("Is Isosceles: " + isIsosceles(triangleA));
console.log("Is Obtuse: " + isObtuse(triangleA));
console.log(triArea(triangleA) + " units²");
