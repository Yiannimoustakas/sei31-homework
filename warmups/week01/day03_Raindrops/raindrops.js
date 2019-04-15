// Version 1
// const raindrops = function(number){
//   let string = "";
//
//   if (number % 3 === 0) {
//     // string = string + Pling
//     string += "Pling";
//   };
//
//   if (number % 5 === 0) {
//     string += "Plang";
//   };
//
//   if (number % 7 === 0) {
//     string += "Plong";
//   };
//
//   if (string.length === 0) {
//     string += number;
//   };
//
//   return string;
// };
//
// console.log(raindrops(28));
// console.log(raindrops(1755));
// console.log(raindrops(34));
// console.log(raindrops(105));

// Version 2
// const isAFactor = function(number, factor){
//   return number % factor === 0;
// };
//
// const raindrops = function(number){
//   let string = "";
//
//   if (isAFactor(number, 3)) {
//     string += "Pling";
//   }
//   if (isAFactor(number, 5)) {
//     string += "Plang";
//   };
//
//   if (isAFactor(number, 7)) {
//     string += "Plong";
//   };
//
//   if (string.length === 0) {
//     string += number;
//   }
//
//   return string
// }
//
//
// console.log(raindrops(28));
// console.log(raindrops(1755));
// console.log(raindrops(34));
// console.log(raindrops(105));
