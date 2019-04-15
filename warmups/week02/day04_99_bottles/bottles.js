//
// // Version 1
//
// const bottlesOfBeer = function(num) {
//
//   for ( let i = num; i >= 0; i-- ) {
//
//     if (i === 0) {
//       console.log(`No more bottles of beer on the wall, no more bottles of beer.`);
//       console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
//     } else if (i === 1) {
//       console.log(`${i} more bottle of beer on the wall, ${i} more bottle of beer.`);
//       console.log(`Take it down and pass it around, no more bottles of beer on the wall.`);
//     } else {
//
//       console.log(`${i} bottles of beer on the wall, ${i} more bottles of beer.`);
//       console.log(`You take one down, and pass it around, ${i-1} bottles of beer on the wall.`);
//
//     }
//
//
//   }
//
// }
//
// console.log(bottlesOfBeer(20));


// Version 2

const beer = {
  pluralise: function(num) {
    if (num === 0) {
      return "No more bottles of beer."
    } else if (num === 1) {
      return '1 bottle of beer'
    } else {
      return `${num} bottles of beer.`
    }
  },

  action: function(num) {
    if (num == 0) {
      return "Go to the store and buy some more"
    } else if (num === 1) {
      return "Take it down and pass it around"
    } else {
      return "Take one down and pass it around"
    }
  },

  getMoreBeer: function(num) {
    if (num === 0) {
      return 99
    } else {
      return num - 1
    }
  },

  makeVerse: function(num) {
    let verse1 = `${ this.pluralise(num) } on the wall, ${ this.pluralise(num) }`
    let verse2 = `${ this.action(num) }, ${ this.pluralise(this.getMoreBeer(num)) } on the wall`
    return verse1 + '\n' + verse2
  },

  song: function(startNum, endNum) {
    for ( let i = startNum; i >= endNum; i-- ) {
      console.log( this.makeVerse(i) );
    }
  }
};

console.log( beer.song(20, 0));
