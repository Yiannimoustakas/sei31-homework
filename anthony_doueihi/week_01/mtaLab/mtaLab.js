const trainSystem = {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

const tripCount = function(startI, endI, lineI) {
    let stopsToMake = [];
    if (startI < endI) {
        for (let i = startI + 1; i <= endI; i++) {
            stopsToMake.push(" " + Object.values(trainSystem)[lineI][i]);
        }
    } else {
        for (let i = startI - 1; i >= endI; i--) {
            stopsToMake.push(" " + Object.values(trainSystem)[lineI][i]);
        }
    }

    if (stopsToMake.indexOf(" 28th") !== -1) {
        stopsToMake[stopsToMake.indexOf(" 28th")] = ` 28th on the ${Object.keys(trainSystem)[lineI]}`;
    }
    if (stopsToMake.indexOf(" 23rd") !== -1) {
        stopsToMake[stopsToMake.indexOf(" 23rd")] = ` 23th on the ${Object.keys(trainSystem)[lineI]}`;
    }
    if (stopsToMake.indexOf(" 8th") !== -1) {
        stopsToMake[stopsToMake.indexOf(" 8th")] = ` 8th on the ${Object.keys(trainSystem)[lineI]}`;
    }
    return stopsToMake;
}

const planTrip = function(l1, s1, l2, s2) {
    //Protections and index getting
    const lineOneIndex = Object.keys(trainSystem).indexOf(l1);
    const lineTwoIndex = Object.keys(trainSystem).indexOf(l2);

    if (lineOneIndex === -1 || lineTwoIndex === -1) {
        console.log("A line was invalid");
        return;
    }

    let stopOneIndex = Object.values(trainSystem)[lineOneIndex].indexOf(s1);
    let stopTwoIndex = Object.values(trainSystem)[lineTwoIndex].indexOf(s2);

    if (stopOneIndex === -1 || stopTwoIndex === -1) {
        console.log("A stop was invalid");
        return;
    }

    if (lineOneIndex === lineTwoIndex) {
        if (stopOneIndex === stopTwoIndex) {
            console.log("You are already there.")
            return;
        }
        tripStops = tripCount(stopOneIndex, stopTwoIndex, lineOneIndex);

        console.log(`You must travel through the following stops along the ${Object.keys(trainSystem)[lineOneIndex]} line:${tripStops}`);
        console.log(`${tripStops.length} stops in total.`);
        return;
    } else {

        //Knowing Union Square is the only shared
        const unionIndex = [4, 3, 5];

        firstLeg = tripCount(stopOneIndex, unionIndex[lineOneIndex], lineOneIndex);
        secondLeg = tripCount(unionIndex[lineOneIndex], stopTwoIndex, lineOneIndex);

        console.log(`You must travel through the following stops along the ${Object.keys(trainSystem)[lineOneIndex]} line:${firstLeg}`);
        console.log("Change at Union Square.")
        console.log(`Your journey continues along the ${Object.keys(trainSystem)[lineTwoIndex]} line:${secondLeg}`);
        console.log(`${firstLeg.length + secondLeg.length} stops in total.`);
    }
}

console.log(planTrip('N', 'Times Square', 'N', 'Union Square'));
console.log(planTrip('6', '23rd', '6', '33rd'));
console.log(planTrip('L', '3rd', 'L', '3rd'));

console.log(planTrip('L', '8th', 'N', '34th'));
console.log(planTrip('N', '28th', '6', '33rd'));
