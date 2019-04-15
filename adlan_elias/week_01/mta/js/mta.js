//Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//

// console.log() shows output similar to this:
// 'You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square.'
// 'Change at Union Square.'
// 'Your journey continues through the following stops: 23rd, 28th, 33rd.'
// '7 stops in total.'


//useful info (indexOf) slice and reverse
// array1.filter(function(n) {
//     return array2.indexOf(n) !== -1;
// });

const lines = {
  'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L': ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};
let stopsCount = 0;

const getStops = function (line, startStop, endStop) {
  let lineArray = lines[line];
  let stopsString = '';
  let startStopIndex = lineArray.indexOf(startStop);
  let endStopIndex = lineArray.indexOf(endStop);

  if (startStopIndex < endStopIndex) {
    for (let i = startStopIndex + 1; i <= endStopIndex; i++) {
      stopsString += lineArray[i] + ', ';
      stopsCount = stopsCount + 1;
    }
  } else {
    for (let i = startStopIndex - 1; i >= endStopIndex; i++) {
      stopsString += lineArray[i] + ', ';
      stopsCount = stopsCount + 1;
    }
  }
  return stopsString;
};

// console.log(getStops('N', 'Times Square', '8th'));

const planTrip = function (startLine, startStop, endLine, endStop) {

  if (startLine === endLine) {
    let returnStops = getStops(startLine, startStop, endStop);
    console.log(`You must travel through the following stops on the ${startLine} line: ${returnStops}`);
  } else {
    //Union Square transit
    let returnStops1 = getStops(startLine, startStop, 'Union Square');
    console.log(`You must travel through the following stops on the ${startLine} line: ${returnStops1}`);
    console.log(`Change at Union Square.`);
    let returnStops2 = getStops(startLine, 'Union Square', endStop);
    console.log(`You must continue your travels through the following stops on the ${endLine} line: ${returnStops2}`)
  }
  console.log(`${stopsCount} stops in total.`);
};

// planTrip('N', 'Times Square', 'N', '8th');
// planTrip('N', 'Times Square', 'L', '8th');
// planTrip('6', 'Grand Central', 'L', '6th');
planTrip('L', '8th', '6', 'Astor Place');
