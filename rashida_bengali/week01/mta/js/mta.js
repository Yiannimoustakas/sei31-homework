console.log('up and running!');

const subwaySystem = {
  'N': ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L': ['8th', '6th', 'Union Square','3rd', '1st'],
  '6': ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

console.log(subwaySystem);
console.log(subwaySystem['N']);
console.log(subwaySystem['L']);
console.log(subwaySystem['6']);

const planTrip = function (lineStart, startStation,  endStation) {
  const indexStart = subwaySystem[lineStart].indexOf(startStation);
    console.log (indexStart);
  // const indexEnd = subwaySystem[lineEnd].indexOf(endStation);
  //   console.log (indexEnd);
  const indexEnd = subwaySystem[lineStart].indexOf(endStation);
    console.log (indexEnd);
  let tripList = `Your journey will be through the following stops on the ${lineStart} line: `;
    if (indexStart < indexEnd) {
      for (let i=indexStart; i<=indexEnd; i++) {
          tripList += subwaySystem[lineStart][i] + ', ';
      }
    } else if (indexStart > indexEnd) {
      for (let i=indexStart; i>=indexEnd; i--) {
        tripList += subwaySystem[lineStart][i] + ', ';
      }
    }
    console.log(tripList.slice(0, -2) + '.');

  // for (let i=indexStart; i<subwaySystem[lineStart].length; i++) {
  //   console.log(subwaySystem[lineStart][i]);
  // }
};

planTrip('N', '34th', '8th');
planTrip('N', '8th', '28th');



const planTripNew = function (lineStart, startStation, lineEnd, endStation) {
  const indexStart = subwaySystem[lineStart].indexOf(startStation);
    console.log (indexStart);
  const indexEnd = subwaySystem[lineEnd].indexOf(endStation);
    console.log (indexEnd);
  const indexCommonOne = subwaySystem[lineStart].indexOf('Union Square');
    console.log (indexCommonOne);
  const indexCommonTwo = subwaySystem[lineEnd].indexOf('Union Square');
    console.log (indexCommonTwo);
    let tripListOne = `Your journey will be through the following stops on the ${lineStart} line: `;
    let totalStops = 0;
    if (indexStart < indexCommonOne) {
      for (let i=indexStart+1; i<=indexCommonOne; i++) {
          tripListOne += subwaySystem[lineStart][i] + ', ';
          totalStops++;
      }
    } else if (indexStart > indexCommonOne) {
      for (let i=indexStart-1; i>=indexCommonOne; i--) {
        tripListOne += subwaySystem[lineStart][i] + ', ';
        totalStops++;
      }
    }
    console.log(tripListOne.slice(0, -2) + '.');
    console.log(`Change at Union Square station.`);
    let tripListTwo = `Your journey will be through the following stops on the ${lineEnd} line: `;
    if (indexCommonTwo < indexEnd) {
      for (let i=indexCommonTwo+1; i<=indexEnd; i++) {
          tripListTwo += subwaySystem[lineEnd][i] + ', ';
          totalStops++;
      }
    } else if (indexCommonTwo > indexEnd) {
      for (let i=indexCommonTwo-1; i>=indexEnd; i--) {
          tripListTwo += subwaySystem[lineEnd][i] + ', ';
          totalStops++;
      }
    }
    console.log(tripListTwo.slice(0, -2) + '.');
    console.log(`${totalStops} stops in total.`);
};

planTripNew('N', '34th', 'L', '1st');
planTripNew('N', 'Times Square', '6', '33rd');
planTripNew('L', '8th', '6', '28th');



// Reverse Trip

// const planTripReverse = function (lineStart, startStation,  endStation) {
//   const indexStart = subwaySystem[lineStart].indexOf(startStation);
//     console.log (indexStart);
//     const indexEnd = subwaySystem[lineStart].indexOf(endStation);
//       console.log (indexEnd);
//   for (let i=indexStart; i>=indexEnd; i--) {
//     console.log(subwaySystem[lineStart][i]);
//   }
// };

// planTripReverse('N', 'Union Square', 'Times Square');
