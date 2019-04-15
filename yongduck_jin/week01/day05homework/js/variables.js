const subwayLines = {
  N: ['Times Square', '34th', '28th', '23rd',  'Union Square', '8th'],
  L: ['8th', '6th',  'Union Square', '3rd', '1st'],
  "6": ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'] //number into string
}

function ab(s, u, line ){ return s < u ? line.slice(s, u+1) : line.slice(u, s+1).reverse(); }

const planTrip = function(line1, station1, line2, station2 ){  
    let idx= { s1: subwayLines[line1].indexOf(station1), s2:subwayLines[line2].indexOf(station2), 
               u1: subwayLines[line1].indexOf('Union Square'), u2: subwayLines[line2].indexOf('Union Square')}
   
    let firstHalf = ab(idx.s1, idx.u1, subwayLines[line1])
    let secondHalf =ab(idx.s2, idx.u2, subwayLines[line2]).reverse() 
    let a = (secondHalf[0] || secondHalf[secondHalf.length-1])=='Union Square' ? secondHalf.splice(secondHalf.indexOf('Union Square'), 1) : secondHalf = secondHalf //order always matters
    let totalStations = line1 !== line2 ? firstHalf.concat(secondHalf) : ab(idx.s1, idx.s2, subwayLines[line1])

    let m1 = `You must travel through : ${firstHalf.join(', ')} stations on ${line1} line.`
    let m2 = `And transfer at "Union Square" to ${line2} line . `  
    let m4 = `On the line ${line2}, you don't need to transfer. Please continues through ${secondHalf.join(', ')} stations. get off at ${station2} station on the same Line.`
    let m5 = `In total, you will pass ${totalStations.join(', ')} stations, and the total number of stations is ${totalStations.length} stations.`
    let m6 = `Please check the line and station again. The station and the Line does not match.`
    let m7 = `You are at the station at the moment. No need to use the train.`
  
  if((line1 === line2 && station1 === station2) || (station1 === 'Union Square' && 'Union Square'===station2)){console.log(m7);}

  if(idx.s1 === -1 || idx.s2 === -1) { console.log(m6);  return }

  if(line1 === line2){ console.log(m4+" "+m5); return} 
   console.log(m1+" "+m2+" "+m4+" "+m5);    
}







// planTrip('L', '3rd', 'L', '8th'); //  //done
// planTrip('L', '8th', 'L', '3rd'); //done  
// planTrip('L', 'Union Square', 'L', '3rd'); //done

// planTrip('N', '34th', 'L', 'Union Square') // //done
// planTrip('N', 'Union Square', '6', 'Astor Place') // order miss. it returns Astro Place and Union Sqaure. Why?? 
// planTrip('N', 'Union Square', '6', 'Grand Central') // order miss. it returns Astro Place and Union Sqaure. Why?? 
// planTrip('N', 'Union Square', 'L', 'Union Square')
// planTrip('N', '34th', 'L', '1st') //done
// planTrip('N', '34th', 'L', '8th') //done
// planTrip('N', '34th', 'L', '100th') //wrong station //done


