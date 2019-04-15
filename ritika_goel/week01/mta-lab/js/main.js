// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

const subway = [
  {
    line: 'N',
    stops: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
  },
  {
    line: 'L',
    stops: ['8th', '6th', 'Union Square', '3rd', '1st']
  },
  {
    line: '6',
    stops: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }
]

const journey = function ( lineA, stopA, lineB, stopB ) {
  let lineAIndex;
  let lineBIndex;
  const resultA = [];
  const resultB = [];
  const output = [];
  let journeyLength = 0;
  for (let i = 0; i < subway.length; i++) {
    if ( lineA === subway[i].line) {        // finding the index of source line
      lineAIndex = i;
    }
    if ( lineA !== lineB ) {
      if ( lineB === subway[i].line) {
        lineBIndex = i;                     // finding the index of destination line
      }
    }
  }
  const aUnion = subway[lineAIndex].stops.indexOf('Union Square');  // Index of Union Square on source line
  const aIndex = subway[lineAIndex].stops.indexOf(stopA);           // Index of source station on source line

  if ( lineA !== lineB ) {                                   // checking if the source line is different from the destinationline

    const bUnion = subway[lineBIndex].stops.indexOf('Union Square'); // Index of Union Square on destination line
    const bIndex = subway[lineBIndex].stops.indexOf(stopB);         // Index of destination station on source line

    if ( bUnion > bIndex ) {                            // if stop comes before Union
      for (let i = bUnion - 1; i >= bIndex; i--) {
        resultB.push(subway[lineBIndex].stops[i]);
      }
    } else {                                            // if stop comes after Union
      for (let i = bIndex - 1; i >= bUnion; i--) {
        resultB.push(subway[lineBIndex].stops[i]);
      }
    }
    if ( aUnion > aIndex ) {                            // if stop comes before Union
      for (let i = aIndex; i <= aUnion; i++) {
        resultA.push(subway[lineAIndex].stops[i]);
      }
    } else {                                            // if stop comes after Union
      for (let i = aUnion; i <= aIndex; i++) {
        resultA.push(subway[lineAIndex].stops[i]);
      }
    }
    journeyLength = resultA.length + resultB.length;
  } else {                                              // if the source and destination are on the same line
      const aUnion = subway[lineAIndex].stops.indexOf(stopB);
      if ( aUnion > aIndex ) {
        for (let i = aIndex; i <= aUnion; i++) {
          resultA.push(subway[lineAIndex].stops[i]);
        }
      } else {
        for (let i = aUnion; i <= aIndex; i++) {
          resultA.push(subway[lineAIndex].stops[i]);
        }
      }
      journeyLength = resultA.length;
  }
  //return `${ [...resultA, 'Union Square', ...resultB]}`;
  console.log(`You must travel through the following stops on the ${ lineA } line: ${ resultA.join(", ") }`);
  if( lineA !== lineB ) {
    console.log(`Change at Union Square.`);
    console.log(`Your journey continues through the following stops: ${ resultB.join(", ") }.`);
  }
  console.log(`${ journeyLength } stops in total.`);
}

journey( 'N', '28th', '6', '33rd');
journey( 'N', '23rd', 'N', '8th');
