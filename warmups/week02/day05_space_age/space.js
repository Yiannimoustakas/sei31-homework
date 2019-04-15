// Version 1

// const spaceAge = {
//   data: {
//     Earth: 1,
//     Mercury: 0.2408467,
//     Venus: 0.61519726,
//     Mars: 1.8808158,
//     Jupiter: 11.862615,
//     Saturn: 29.447498,
//     Uranus: 84.016846,
//     Neptune: 164.79132
//   },
//
//   calculate: function(input) {
//     for (let key in this.data) {
//       let earthYears = input / 31557600
//       // console.log(earthYears);
//       let value = this.data[key];
//
//       let age = (earthYears / value).toFixed(2)
//       console.log(`Your age on ${key} is ${age}`);
//     }
//   }
// }
//
// console.log(spaceAge.calculate(1000000000));


// Version 2

const spaceAge = {
  data: {
    Earth: 1,
    Mercury: 0.2408467,
    Venus: 0.61519726,
    Mars: 1.8808158,
    Jupiter: 11.862615,
    Saturn: 29.447498,
    Uranus: 84.016846,
    Neptune: 164.79132
  },

  calculate: function(input, planet = "Earth") {
    let key = planet;
    let value = this.data[key];
    console.log(typeof value);
    // let earthYears = (input / 31557600);
    // let age = (earthYears / value).toFixed(2);
    // console.log(`Your age on ${key} is ${age}`);
  }
}
console.log(spaceAge.calculate(1000000000, "Neptune"));
