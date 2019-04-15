
const subwayLines = {
  N: ['Times Square', '34th', '28th', '23rd',  'Union Square', '8th'],
  L: ['8th', '6th',  'Union Square', '3rd', '1st'],
  "6": ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'] //number into string
}

//slice function to be out 

function indexFinder(lineName, stationName){ // this function should have the validity function as well. 
  let returneIndex = -1
  for (let i = 0; i <= lineName.length; i++) {
    if(lineName[i] === stationName){
      return  i 
    }    
  }
  return returneIndex
}

const planTrip = function(line1, station1, line2, station2 ){  
    let startLine = subwayLines[line1] //  array,  done  
    let startStationIndex = indexFinder(startLine, station1); // index number, done
    let firstUnionIndex =indexFinder(startLine, 'Union Square')
    let secondLine = subwayLines[line2] //array, done
    let lastStationIndex = indexFinder(secondLine, station2) // index number, done
    let secondUnionIndex =indexFinder(secondLine, 'Union Square')
    let firstHalf =[]
    let secondHalf=[]
  if(startStationIndex === -1 || lastStationIndex === -1) { 
    console.log(`Please check the line and station again.`);
    return
  }else{
    if(line1 === line2 ){
      if(startStationIndex < lastStationIndex){
        console.log(`You don't have to transfer to other lines. Stay on this train until you get to ${station2} station`);
        return startLine.slice(startStationIndex, lastStationIndex+1) //done
        
      } else if(startStationIndex > lastStationIndex){
        console.log(`You don't have to transfer to other lines. Stay on this train until you get to ${station2} station`);
        return startLine.slice(lastStationIndex, startStationIndex+1).reverse(); //done
        
    }
}
if(line1 !== line2){
  if(startStationIndex < firstUnionIndex){
    firstHalf = startLine.slice(startStationIndex, firstUnionIndex+1);       
  }else if(startStationIndex > firstUnionIndex){
    firstHalf =startLine.slice(firstUnionIndex, startStationIndex+1).reverse(); 
  }

  if( secondUnionIndex < lastStationIndex){
    secondHalf = secondLine.slice(secondUnionIndex+1, lastStationIndex+1);

  }else if(lastStationIndex < secondUnionIndex){
    secondHalf = secondLine.slice(lastStationIndex, secondUnionIndex).reverse();
  }

}
  let totalStations =firstHalf.concat(secondHalf) //join 할 때 스페이스를 둬라. 커마 뒤에 스페이스가 오도록
  
    console.log(`
    You must travel through the following stops on the ${line1} line: ${firstHalf}.
    Change at "Union Square". 
    Your journey continues through the following stops. ${line2} line: ${secondHalf}
    Please get off at ${station2} station on ${line2} Line
    You will pass ${totalStations.length} station in total.`)  
  }
  
  }
// all the data should be out of "for" or "if" blocks, so that always be accessible without return 
//shared function to be moved out of loop, and call later. 




planTrip('N', 'Union Square', 'L', 'Union Square')
planTrip('N', '34th', 'L', 'Union Square')
planTrip('L', '3rd', 'L', '8th');
planTrip('L', '8th', 'L', '3rd');
planTrip('N', '34th', 'L', '100th') //wrong station


