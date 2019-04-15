console.log('Up and running');


/*______     ______     __    __        ______     ______     ______     ______     ______     __  __     ______     __   __
 /\  ___\   /\  __ \   /\ "-./  \      /\  ___\   /\  ___\   /\  __ \   /\  == \   /\  __ \   /\ \/\ \   /\  == \   /\ "-.\ \
 \ \___  \  \ \  __ \  \ \ \-./\ \     \ \___  \  \ \  __\   \ \  __ \  \ \  __<   \ \ \/\ \  \ \ \_\ \  \ \  __<   \ \ \-.  \
  \/\_____\  \ \_\ \_\  \ \_\ \ \_\     \/\_____\  \ \_____\  \ \_\ \_\  \ \_____\  \ \_____\  \ \_____\  \ \_\ \_\  \ \_\\"\_\
   \/_____/   \/_/\/_/   \/_/  \/_/      \/_____/   \/_____/   \/_/\/_/   \/_____/   \/_____/   \/_____/   \/_/ /_/   \/_/ \/*/


//const lineN = ["8th Ave", "Union Square", "23rd Ave", "28th Ave", "34th Ave", "Times Square"]
//const line6 = ["Aster Place", "Union Square", "23rd Ave", "28th Ave", "33rd Ave", "Grand Central"]
//const lineL = ["1st Ave", "3rd Ave", "Union Square", "6th Ave", "8th Ave"]


////// Diference bewtween Stops
const difference = function(a, b) {
  return Math.abs(a - b)
}

////// distanceCalc
const distanceCalc = function(startIndex, endIndex) {
  distance = (difference(startIndex, endIndex));
  return distance;
}

///// Line index Searcher
const lineIndexFind = function(stopName, line) {
  return line.indexOf(stopName);
}

//// Line Reverser
const arrayReverser = function(line) {
  const reversedLine = line.reverse()
  return reversedLine
}


/////This Function lists the stops in between
const stopsList = function(startLoc, startLine, endLoc) {
  var startIndex = lineIndexFind(startLoc, startLine);
  var endIndex = lineIndexFind(endLoc, startLine);
  var stopNamesTypeFix = []
  if (startIndex < endIndex) {
    const stopNames = (startLine.slice(startIndex, endIndex))
    const stopNamesTypeFix = stopNames.toString().replace(/,/g, ", ") // Output string cleaner
    return stopNamesTypeFix
  }
  if (startIndex > endIndex) {
    var reverseLine = arrayReverser(startLine)
    const stopNames = (reverseLine.slice(endIndex + 3, startIndex + 3))
    const stopNamesTypeFix = stopNames.toString().replace(/,/g, ", ") // Output string cleaner
    return stopNamesTypeFix
  }
  return stopNamesTypeFix

}
///// Searches for Union Square
const unionSquareIndexSearcher = function(line){
  return lineIndexFind("Union Square",line);
}


////reverse Checker
const reverseChecker = function(destinationIndex, unionSquareIndex, line){
  if (destinationIndex > unionSquareIndex){
    const reversedLine = line.reverse()
    return reversedLine
  }
    return line

}





////// Trip on the same line return message
const planTripSameLine = function(startLoc, startLine, endLoc) {
  const startIndex = lineIndexFind(startLoc, startLine)
  const endIndex = lineIndexFind(endLoc, startLine)
  var numberOfStops = (distanceCalc(startIndex, endIndex))
  if (numberOfStops === 1) {
    return "You need to travel through just 1 station to get to get to " + endLoc;
  } else {
    return ("You will need to travel through " + numberOfStops + " stops to get to " +endLoc+ ". You will go through " + stopsList(startLoc, startLine, endLoc) + " onwards to " + endLoc + ".")
  }
}

////// Trip on different lines
const planTripDifferentLine  =function(startLoc, startLine, endLoc, endLine){
//var startIndex = lineIndexFind(startLoc, startLine)
//var startUnionIndex = lineIndexFind("Union Square", startLine)
//var endUnionIndex = lineIndexFind("Union Square", startLine)
//var endIndex = lineIndexFind(startLoc, startLine);
//var firstTrip = planTripSameLine(startLoc,startLine,"Union Square")
//console.log(startIndex + " start Index 1st line")
//console.log(startUnionIndex + " start Union Index 1st line")
//console.log(endUnionIndex + " start Union Index 2nd line")
//console.log(endIndex + " start Index end 2nd line")
//const firstTrip = startLine.slice(startIndex,startUnionIndex);
//console.log(firstTrip)
//console.log(firstTrip)
//console.log(seccondTrip)
//Chop out new string for start to union
//get index numbers of union to end
//chop out new string for union to end
//count number of stops per 2 trips and add together
}


////// Starting Function
const planTrip = function(startLoc, startLine, endLoc, endLine) {
  if (startLoc == endLoc) {
    return `You are already where you want to be numb nuts`
  }
  if (startLine === endLine) {
    return planTripSameLine(startLoc, startLine, endLoc);
  } else {
    planTripDifferentLine(startLoc, startLine, endLoc, endLine) ;
  }
}
/*

const mta = { lineN : ["8th Ave", "UnionSquare", "23rd Ave", "28th Ave", "34th Ave", "Times Square"],
line6 : ["Aster Place", "UnionSquare", "23rd Ave", "28th Ave", "33rd Ave", "Grand Central"],
lineL : ["1st Ave", "3rd Ave", "UnionSquare", "6th Ave", "8th Ave"]
}


//Two lines//
//If two lines


const tripDifferentLines = function(){}



//Chop out stops section for each line
//If start index is higher that end index
//Reverse strings

//Get new string indexes
//Create lists

*/
