// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 5
}

const isSquare = function(){
  if (rectangleA.length === rectangleA.width){
    console.log(true);
  } else {
    console.log(false);
  }
};

const area = function(){
  if (rectangleA.length, rectangleA.width);
  console.log(rectangleA.length * rectangleA.width);
};

const perimeter = function() {
  if (rectangleA.length, rectangleA.width);
  console.log(2*(rectangleA.length + rectangleA.width));
};

// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const a = (triangleA.sideA);
const b = (triangleA.sideB);
const c = (triangleA.sideC);

// isEquilateral - Returns whether the triangle is equilateral or not

const isEquilatral = function(){
    if (a === b && b === c){
      console.log(`It's equilateral.`);
  } else {
      console.log(`It's not equilateral.`);
  }
};

// isIsosceles - Returns whether the triangle is isosceles or not

const isIsosceles = function(){
    if (a === b || a === c || b === c){
    console.log(`It's an isosceles triangle`);
  } else {
    console.log(`It's not an isosceles triangle`)
  }
};

// area - Returns the area of the Triangle

const ar = (a + b + c /2);

const areaOfTriangle = function(){
    const area = Math.sqrt(ar*((ar-a)*(ar-b)*(ar-c)));
    console.log( `The area is ${ area }` )
};

// isObtuse - Returns whether the triangle is obtuse or not

const isObtuse = function() {
  max = Math.max(this.a, this.b, this.c);
    if (this.a === max) {
      return this.a > Math.sqrt(this.b * this.b + this.c * this.c);
  } else if (this.a === max) {
      return this.b > Math.sqrt(this.a * this.a + this.c * this.c);
  } else {
      return this.c > Math.sqrt(this.b * this.b + this.a * this.a);
  }
  console.log("Triangle is obtuse? " + triangleA.isObtuse());
};
