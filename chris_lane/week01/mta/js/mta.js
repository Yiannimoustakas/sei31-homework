////////////////
// MTA Lab
////////////////

/*
Objectives:
Apply your knowledge of Javascript to solve a real world problem.
Get really good at array manipulation.

Activity
Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at and the line
and stop that user is getting off at and prints the journey and the total number
of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function
name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd,
Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square,
and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square,
and Astor Place.

All 3 subway lines intersect at Union Square, but there are no other intersection
points. (For example, this means the 28th stop on the N line is different than
the 28th street stop on the 6 line, so you'll have to differentiate this when
you name your stops in the arrays.)

** Tell the user the number of stops AND the stops IN ORDER that they will pass
through or change at.

Hints:
** Work out how you would do it on paper first! Then start to explain that process
in Javascript.
** Get the program to work for a single line before trying to tackle multiple lines.
Don't worry about prompting the user for input. Hard code some values to get it
working. You can use prompt() later to make it more interactive.
Consider diagramming the lines by sketching out the subway lines and their stops
and intersection.
The key to the lab is finding the index positions of each stop. (hint: indexOf())
Make sure the stops that are the same for different lines have different names
(i.e. 23rd on the N and on the 6 need to be differentiated)
*/

/*
const lines = {
  N: {
    stations: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    stationsReversed: function() {
      return this.stations.slice().reverse();
    }
  },
  L: {
    stations: ["8th", "6th", "Union Square", "3rd", "1st"],
    stationsReversed: function() {
      return this.stations.slice().reverse();
    }
  },
  6: {
    stations: [
      "Grand Central",
      "33rd",
      "28th",
      "23rd",
      "Union Square",
      "Astor Place"
    ],
    stationsReversed: function() {
      return this.stations.slice().reverse();
    }
  }
};

const requiresChangeLine = (lineStart, lineEnd) => {
  return lineStart !== lineEnd;
};

const isReversed = (startIndex, endIndex) => {
  return startIndex > endIndex;
};

const stops = (line, startIndex, endIndex, reversed) => {
  const orderedStops = reversed
    ? lines[line].stationsReversed()
    : lines[line].stations;
  return orderedStops.filter((station, index) => {
    if (index > startIndex && index <= endIndex) return station;
  });
};

const planTrip = (lineStart, stationStart, lineEnd, stationEnd) => {
  // get index of stationStart and stationEnd
  const startIndex = lines[lineStart].stations.indexOf(stationStart);
  const endIndex = lines[lineEnd].stations.indexOf(stationEnd);

  if (requiresChangeLine(lineStart, lineEnd)) {
    // get indexOf "Union Square" for each journey
    const firstUSIndex = lines[lineStart].stations.indexOf("Union Square");
    const secondUSIndex = lines[lineEnd].stations.indexOf("Union Square");

    // declare one array for initialStops
    const initialReversed = isReversed(startIndex, firstUSIndex);
    const initialStops = stops(
      lineStart,
      startIndex,
      firstUSIndex,
      initialReversed
    );

    // declare a second array for lastStops
    const lastReversed = isReversed(secondUSIndex, endIndex);
    const lastStops = stops(lineEnd, endIndex, secondUSIndex, lastReversed);

    console.log(
      `You must travel through the following stops on the ${lineStart} line:`,
      initialStops.join(", ")
    );
    console.log("Change at Union Square");
    console.log(
      `Your journey continues through the following stops: ${lastStops.join(
        ", "
      )}`
    );
    console.log(`${initialStops.length + lastStops.length} stops in total.`);
  } else {
    const reversed = isReversed(startIndex, endIndex);
    const initialStops = stops(lineStart, startIndex, endIndex, reversed);
    console.log(
      `You must travel through the following stops on the ${lineStart} line:`,
      initialStops.join(", ")
    );
    console.log(`${initialStops.length} stops in total.`);
  }
};
*/

// INPUT
// line start, station start, line end, station end

// RULES
// All lines intersect at Union Square and only

// OUTPUT
//// Number of stops
//// Initial name of stops in order
//// If they need to change lines (can only happen at Union Square)
//// Next name of stops in order
//// How many total stops
//// reversed journey

// HINTS
// use indexOf() to find index of each station

// EDGE CASES
// differentiate between
// reverse journey ie going along the array right to left
// partial reverse journey

// REFACTOR
// reduce console.log() to one by building array of instructions
// lineFactory() to build train line data => NOT SAVING ENOUGH SPACE
// getStationIndex function
// replace startIndex, endIndex, both USIndexes with getStationIndex function
// use implicit return wherever possible
// reduce if/else to a single return

const lines = {
  N: {
    stations: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    stationsReversed: function() {
      return this.stations.slice().reverse();
    }
  },
  L: {
    stations: ["8th", "6th", "Union Square", "3rd", "1st"],
    stationsReversed: function() {
      return this.stations.slice().reverse();
    }
  },
  6: {
    stations: [
      "Grand Central",
      "33rd",
      "28th",
      "23rd",
      "Union Square",
      "Astor Place"
    ],
    stationsReversed: function() {
      return this.stations.slice().reverse();
    }
  }
};

// HELPER FUNCTIONS

const isReversed = (startIndex, endIndex) => startIndex > endIndex;

const getStationIndex = (line, station) =>
  lines[line].stations.indexOf(station);

const displayTrip = (totalStops, lineStart, initialStops, lastStops = []) => {
  const legsOfTripText = [
    `You must travel through the following stops on the ${lineStart} line: ${initialStops.join(
      ", "
    )}`,
    `${lastStops.length > 0 ? "Change at Union Square" : ""}`,
    `${
      lastStops.length > 0
        ? "Your journey continues through the following stops: " +
          lastStops.join(", ")
        : ""
    }`,
    `${totalStops} stops in total.`
  ]
    .filter(text => text)
    .join("\r\n");
  console.log(legsOfTripText);
};

const stops = (line, startIndex, endIndex) => {
  const orderedStops = isReversed(startIndex, endIndex)
    ? lines[line].stationsReversed()
    : lines[line].stations; // should this be done here or in its own function?
  return orderedStops.filter(
    (station, index) => station && index > startIndex && index <= endIndex
  );
};

// MAIN FUNCTION

const planTrip = (lineStart, stationStart, lineEnd, stationEnd) => {
  // get index of stationStart and stationEnd
  const startIndex = getStationIndex(lineStart, stationStart);
  const endIndex = getStationIndex(lineEnd, stationEnd);

  // get indexOf "Union Square" for each journey
  const firstUSIndex = getStationIndex(lineStart, "Union Square");
  const secondUSIndex = getStationIndex(lineEnd, "Union Square");

  // declare one array for initialStops
  const initialStops = stops(lineStart, startIndex, firstUSIndex);

  // declare a second array for lastStops
  const lastStops = stops(lineEnd, endIndex, secondUSIndex);

  // sum total stops
  const totalStops = initialStops.length + (lastStops.length || 0);

  // build trip data array
  const trip = [totalStops, lineStart, initialStops, lastStops];

  return displayTrip(...trip);
};

// TESTS

planTrip("N", "Times Square", "N", "8th");
planTrip("N", "Times Square", "6", "33rd");
