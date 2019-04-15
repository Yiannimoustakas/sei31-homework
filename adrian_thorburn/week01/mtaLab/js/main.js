//mta object and array for each line.
const mta = {
nLine:['8th', 'unionSquare', '23rd', '28th', '34th', 'timeSquare'],
lLine:['8th', '6th', 'unionSquare', '3rd', '1st'],
sLine:['grandCentral', '33rd', '28th', '23rd', 'unionSquare', 'astorPlace'],
};

const planTrip = function(sl, ss, el, es) {
  console.log(`journey from line: ${sl}  ${ss} -----> ${el}  ${es}`)
  let journeyLength = []; //empty array for stop counter
const journeyA = function(sl, ss, el, es) {
  if (mta[sl].indexOf(ss) > mta[sl].indexOf('unionSquare')){  // checks to see if start location is smaller than end location of unionSquare on same sl.
    let jA1 = mta[sl].slice(mta[sl].indexOf('unionSquare'), mta[sl].indexOf(ss)) //create journeyA1 for southern stations
    let jA1Reversed = jA1.reverse(); //create journeyA for southern stations
      journeyLength = jA1.concat(journeyLength) //push journey to journeyLength for stop counter.
    console.log(`You will need to travel through the following stops on ${ sl } - ${jA1Reversed}`) //log first steps
    console.log(`change at Union Square`) //change at union
    journeyB(sl, ss, el, es); // call functionB - second half of journey.
  }else{ //report steps for northern lines to union.
    let jA2 = mta[sl].slice(mta[sl].indexOf(ss),mta[sl].indexOf('unionSquare')) //create journeyA2 for southern stations
      journeyLength = jA2.concat(journeyLength) //push journey to journeyLength for stop counter.
    console.log(`You will need to travel through the following stops on ${ sl } - ${jA2}`)
    console.log(`change at Union Square`)
    journeyB(sl, ss, el, es); // call functionB - second half of journey.
  }
}
const journeyB = function(sl, ss, el, es) {
  if (mta[el].indexOf(es) < mta[el].indexOf('unionSquare')){
    let jB1 = mta[el].slice(mta[el].indexOf(es), mta[el].indexOf('unionSquare'))
    let jBReversed = jB1.reverse(); //create journeyB for northern stations
      journeyLength = jB1.concat(journeyLength) //push journey to journeyLength for stop counter.
    console.log(`Your journey continues through the following stops on ${ el } - ${ jBReversed } `)
    console.log(`${journeyLength.length} stops in total`)
  } else {
    let jB2 = mta[el].slice(mta[el].indexOf('unionSquare'), mta[el].indexOf(es))
      //Array.prototype.push.apply(jB2, journeyLength);
      journeyLength = jB2.concat(journeyLength) //push journey to journeyLength for stop counter.
    console.log(`Your journey continues through the following stops on ${ el } -${jB2}`)
    console.log(`${journeyLength.length} stops in total`)
  }
}
  if (mta[ sl ] !== mta [ el ]){ //if sl and el don't match call function journeyA
    journeyA(sl, ss, el, es);
  } else { // Same line journey
  // checks to see if start location is smaller than end location
  if (mta[sl].indexOf(ss) < mta[el].indexOf(es)){
    // forward journey same line
    let rightWay = mta[sl].slice(mta[sl].indexOf(ss),mta[el].indexOf(es));
    console.log(`You will need to travel through the following stops on ${ sl } - ${mta[sl].slice(mta[sl].indexOf(ss),mta[el].indexOf(es))}`);
    console.log(`${rightWay.length} stops in total`);
  } else {
    // reverse journey same line
    let rightWay = mta[sl].slice(mta[el].indexOf(es),mta[sl].indexOf(ss));
    let reversed = rightWay.reverse();
    console.log(`You will need to travel through the following stops on ${ sl } - ${reversed}`);
    console.log(`${rightWay.length} stops in total`);
  }
}
}
console.log(planTrip('nLine', 'unionSquare', 'nLine', '34th')) // same line south 4 stops
console.log(planTrip('sLine', 'astorPlace', 'sLine', 'grandCentral')) // same line north 5 stops
console.log(planTrip('lLine', '8th','nLine', '34th')); // 2 lines, both journeys south
console.log(planTrip('lLine', '8th', 'sLine', '33rd')) // 2lines, 1 south, 1 north
console.log(planTrip('lLine', '1st', 'nLine', 'timeSquare')) //2 lines, 1 north, 1 south
console.log(planTrip('sLine', '28th', 'lLine', '8th')) // 2 lines, 2 north
console.log(planTrip('lLine', '3rd', 'nLine', '34th')) // 2 lines, 2 south

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//      the code grave yard:
//               ___
//              /   \
//             /     \
//            / ^  ^  \
//           /         \
//          /    O      \
//         (            )
//         |  | | | | | |
//
////////////////////////////////////
// A multi line trip is really just two halves of the below.
//figure out generic trips for each line too and from UnionSquare.
//for example get a trip working from
//this is a slice of the whole line
//mta[sl].slice(mta[sl].indexOf(ss),mta[el].indexOf(es))
//i already know the index of union square for all lines.

// then i can join each of these for a complete journey.
// same situation where i use the index to figure out the start and end location,
// again i know the index of UnionSquare on each line

// if the starting index is befor the ending index switch them
// use union square index again?


//first confirm if they are on the same lLine // this
//   //Start N line - End L line - forward
//   if (mta[ sl ] === mta['nLine'] && mta[ el ] === mta[`lLine`] && mta.nLine[0] === '8th') {
//     let nJourney = mta.nLine.slice(mta[sl].indexOf(ss),2);
//     let lJourney = mta.lLine.slice(3, mta[el].indexOf(es));
//     let nlJourney = nJourney.concat(lJourney);
//     console.log(`You will need to travel through the following stops on ${ sl } & ${ el } : ${nlJourney}`);
//     console.log(`${nlJourney.length} stops in total`);
//   }
//   //Start L line - End N Line - backwards
//   if (mta[ sl ] === mta['lLine'] && mta[ el ] === mta[`nLine`] && (mta.lLine[3] === '3rd' || mta.lLine[4] === '1st')) {
//     let lJourney = mta.lLine.slice(3,5);
//     let nJourney = mta.nLine.slice(0,2);
//     let lnJourney = nJourney.concat(lJourney);
//     let lnReversed = lnJourney.reverse(); // why is this not reversing?????
//
//     console.log(lnReversed)
//     console.log(lnJourney.reverse());
//   }


  //return `sameLine`
//i have the lLine
// and i have the indexOf


//then i need to report


//sl - starting line, ss - starting station, ending line, ending station




// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."






//
