//Part 1, Rectangle

const rectangleA = {
  length: 4,
  width: 4
};

//isSquare - Returns whether the rectangle is a square or not
const isSquare = function ( object ){
  return object.length === object.width;
};

console.log(isSquare(rectangleA));

//area - Returns the area of the rectangle
const area = function ( object ){
  return object.length * object.width;
};

console.log(area(rectangleA));

// perimeter - Returns the perimeter of the rectangle
const perimeter = function ( object ) {
  return ( object.length * 2 ) + ( object.width * 2 );
};

console.log(perimeter(rectangleA));

// Part 2, Triangle

const triangleA = {
  sideA: 5,
  sideB: 10,
  sideC: 14
};

// isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function ( obj ){
  return new Set(Object.values(obj)).size === 1;
};

console.log(isEquilateral(triangleA));

//isIsosceles - Returns whether the triangle is isosceles or not
const isIsosceles = function ( obj ){
  return new Set( Object.values(obj) ).size === 2;
};

console.log(isIsosceles(triangleA));

//area - Returns the area of the Triangle

const triangleArea = function ( obj ){
  let perimeter = (Object.values( obj ).reduce((sum, element) => sum + element )/2);
  let area = Math.sqrt(perimeter * (( perimeter - obj.sideA ) * ( perimeter - obj.sideB ) * ( perimeter - obj.sideC )));
  return area.toFixed(2)
};

console.log(triangleArea(triangleA))

// isObtuse - Returns whether the triangle is obtuse or not
const isObtuse = function ( obj ){
  let sortedSides = Object.values( obj ).sort( ( a,b ) => a - b);
  return (sortedSides[0]**2 + sortedSides[1]**2) < sortedSides[2]**2
};

console.log(isObtuse(triangleA))