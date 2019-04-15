// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not

// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 6
};

const isSquare = function(length, width) {
  if (length === width){
    console.log(`Rectangle is a square`);
  return true
  }
  else {
    console.log(`Rectangle is not a square`);
  return false
  }
}

isSquare(rectangleA.length, rectangleA.width);

// area - Returns the area of the rectangle

const area = function (length, width) {
  const rectangleArea = length * width;
  console.log(`Rectangle area is ${rectangleArea}`);
}

area(rectangleA.length, rectangleA.width);

// perimeter - Returns the perimeter of the rectangle

const perimeter = function (length, width) {
  const rectangleAperim = length * 2 + width * 2;
  console.log(`Rectangle perimeter is ${rectangleAperim}`);
}

perimeter(rectangleA.length, rectangleA.width);


// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not

const triangleA = {
  sideA: 4,
  sideB: 5,
  sideC: 6
};


const isEquilateral = function (sideA, sideB, sideC) {
  if (sideA === sideB && sideB === sideC) {
    console.log( `triangle is Equilateral` );
    return true
  }
  else {
    console.log( `triangle is not Equilateral` );
    return false
  }
}

isEquilateral (triangleA.sideA, triangleA.sideB, triangleA.sideC)

// isIsosceles - Returns whether the triangle is isosceles or not

const isIsosceles = function (sideA, sideB, sideC) {
  if (sideA === sideB || sideB === sideC || sideA === sideC) {
    console.log( `triangle is Isosceles` );
    return true
  }
  else {
    console.log( `triangle is not Isosceles` );
    return false
  }
}

isIsosceles (triangleA.sideA, triangleA.sideB, triangleA.sideC)

// area - Returns the area of the Triangle
// Herons formula
// s = perimeter / 2
// square root from (s * (s - a) * (s - b) * (s - c))

const areaTriangle = function (sideA, sideB, sideC) {
const perimeter = sideA + sideB + sideC
const s = perimeter / 2
const area = Math.sqrt(s * ((s - sideA) * (s - sideB) * (s - sideC)))
    console.log( `Area of a triangle is ${area.toFixed(2)}` );
}

areaTriangle (triangleA.sideA, triangleA.sideB, triangleA.sideC)


// isObtuse - Returns whether the triangle is obtuse or not
// const isIsosceles = function (sideA, sideB, sideC)
//   let maxside = Math.max (sideA, sideB, sideC)
//   for (let i = 0; i < maxside.length; i++ )
