console.log(123);

/* MTA Lab
Objectives:
Apply your knowledge of Javascript to solve a real world problem.
Get really good at array manipulation.
Activity
Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at and the line and stop that user 
is getting off at and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// `You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// `Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points. 
(For example, this means the 28th stop on the N line is different than the 28th street stop on the 
  6 line, so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

Hints:
Work out how you would do it on paper first! Then start to explain that process in Javascript.
Get the program to work for a single line before trying to tackle multiple lines.
Don't worry about prompting the user for input. Hard code some values to get it working. You can 
use prompt() later to make it more interactive.
Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
The key to the lab is finding the index positions of each stop. (hint: indexOf())
Make sure the stops that are the same for different lines have different names 
(i.e. 23rd on the N and on the 6 need to be differentiated) 

i created an object for each line, containing name and an array of the stations
then you need an array subway to contain the 3 line objects, so it's easy to access them given the index*/

/* console.clear();

planTrip('N', 'Times Square', 'N', '8th');

function planTrip(startLine, startStop, endLine, endStop) {
  const lines = {
    'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  };
  
  const line = lines[startLine];
  console.log(line);
  
  
//   console.log(`Position of start stop in the start line: ${line.indexOf(startStop)}`);
//   console.log(`Position of end stop in the start line: ${line.indexOf(endStop)}`);
  
  let stopsForStartLine = [];
  let totalStops = 0;
  
  const startPosition = line.indexOf(startStop);
  const endPosition = line.indexOf(endStop);
  
  console.log(startPosition);
  console.log(endPosition);
  
  for (
    let i = startPosition > endPosition ? endPosition : startPosition,
      j = startPosition > endPosition ? startPosition : endPosition;
    i <= j;
    i += 1
  ) {
    stopsForStartLine.push(line[i]);
    totalStops += 1;
  }
  
  if (startPosition > endPosition) {
    stopsForStartLine = stopsForStartLine.reverse();
  }
  
  console.log(`Stops for ${startLine}: ${stopsForStartLine.join(', ')}`);
  console.log(`Total number of stops: ${totalStops}`);
  
  return '';
};
 */
///////////////////// My code////////////////////////////////////////

function planTrip(startLine, startStop, endLine, endStop) {

  const lines = {
    'N' : ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    'L' : [ '8th', '6th', 'Union Square', '3rd', '1st'],
    '6' : [ 'Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  };

  if (startLine === endLine) { 
    const line = lines[startLine];

  //   console.log(`Position of start stop in the start line: ${line.indexOf(startStop)}`);
  //   console.log(`Position of end stop in the start line: ${line.indexOf(endStop)}`);
    
    let stopsForStartLine = [];
    let totalStops = 0;
    
    const startPosition = line.indexOf(startStop);
    const endPosition = line.indexOf(endStop);
    
    for (
      let i = startPosition > endPosition ? endPosition : startPosition,
        j = startPosition > endPosition ? startPosition : endPosition;
      i <= j;
      i += 1
    ) {
      stopsForStartLine.push(line[i]);
      totalStops += 1;
    }
    
    if (startPosition > endPosition) {
      stopsForStartLine = stopsForStartLine.reverse();
    }
    
    console.log(`You must travel through the following stops on the ${startLine}: ${stopsForStartLine.join(', ')}`);
    console.log(`Total number of stops: ${totalStops}`);
  } else {

    const intersection = 'Union Square';
    const line1 = lines[startLine];
    const line2 = lines[endLine];
    let stopsForStartLine = [];
    let stopsForEndLine = [];
    let total1 = 0;
    let total2 = 0;
    
    const startPosition = line1.indexOf(startStop);
    const endPosition = line2.indexOf(endStop);
    const intersectionPositionStart = line1.indexOf(intersection);
    const intersectionPositionEnd = line2.indexOf(intersection);

    for (
      let i = startPosition > intersectionPositionStart ? intersectionPositionStart : startPosition,
        j = startPosition > intersectionPositionStart ? startPosition : intersectionPositionStart;
      i < j;
      i += 1
    ){
      stopsForStartLine.push(line1[i]);
      total1 += 1;
    }

    for (
      let ii = intersectionPositionEnd > endPosition? endPosition : intersectionPositionEnd,
        jj = intersectionPositionEnd > endPosition ? intersectionPositionEnd : endPosition;
      ii < jj;
      ii += 1
    ) {
      stopsForEndLine.push(line2[ii]);
      total2 += 1;
    }

    if (intersectionPositionEnd > endPosition) {
      stopsForEndLine = stopsForEndLine.reverse();
    }

    if (startPosition > intersectionPositionStart) {
      stopsForStartLine = stopsForStartLine.reverse();
    } 

    let totalStopsSum = total1 + total2 + 1;

    console.log(`You must travel through the following stops on the ${startLine} line: ${stopsForStartLine.join(', ')}.`);
    console.log(`Change at ${intersection}`);
    console.log(`Your journey continues through the following stops on the ${endLine} line: ${stopsForEndLine.join(', ')}.`); 
    console.log(`Total number of stops: ${totalStopsSum}`);
  }
};

planTrip('N', '8th', 'N', 'Times Square');
planTrip('N', 'Times Square', '6', '33rd');
planTrip('6', '33rd', 'N', 'Times Square');
planTrip('L', '8th', '6', '33rd');

// console.log() shows output similar to this:
// `You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."