// Geometry Function Lab
// Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 3,
//   width: 4,
//   isSquare: function () {
//     if (this.length === this.width) {
//       console.log(`The rectangle is square.`);
//     } else {
//       console.log(`The rectangle is not square.`)
//     }
//   },
//   area: function () {
//     console.log(this.length * this.width);
//   },
//   perimeter: function () {
//     console.log(2 * (this.length + this.width));
//   }
// };
//   rectangleA.isSquare();
//   rectangleA.area();
//   rectangleA.perimeter();


// Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// const triangleA = {
//   sideA: 5,
//   sideB: 5,
//   sideC: 5,
//
//   isEquilateral: function () {
//     if (this.sideA === this.sideB && this.sideA === this.sideC) {
//       console.log(`The triangle is equilateral.`);
//     } else {
//       console.log(`The triangle is not equilateral.`);
//     }
//   },
//   isIsosceles: function () {
//     if (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC) {
//       console.log(`The triangle is isosceles.`);
//     } else {
//       console.log(`The triangle is not isosceles.`);
//     }
//   },
//   area: function () {
//     let perimeter = (this.sideA + this.sideB + this.sideC) / 2;
//     console.log(Math.sqrt(perimeter * (perimeter - this.sideA) * (perimeter - this.sideB) * (perimeter - this.sideC)));
//   },
//   isObtuse: function () {
//     let max = Math.max(this.sideA, this.SideB, this.SideC);
//     if (Math.pow(this.sideA,2) + Math.pow(this.sideB, 2) < Math.pow(max, 2) ||Math.pow(this.sideB,2) + Math.pow(this.sideC, 2) < Math.pow(max, 2) || Math.pow(this.sideA,2) + Math.pow(this.sideC, 2) < Math.pow(max, 2) ) {
//       console.log(`The triangle is obtuse.`);
//     } else {
//       console.log(`It is not.`)
//     }
//   }
// };
// triangleA.isEquilateral();
// triangleA.isIsosceles();
// triangleA.area();
// triangleA.isObtuse();
//  js-homework-5.md
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36",

  cashRegister: function () {
    console.log(Math.sum(cartForParty));
  }
};
//use object
// // Output
cashRegister(cartForParty));
// 60.55
