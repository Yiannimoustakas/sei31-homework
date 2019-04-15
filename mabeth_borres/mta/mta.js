// Homework by Mabeth Borres of SEI 31

/*There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, 
	this means the 28th stop on the N line is different than the 28th street stop on the 6 line, 
	so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.*/

// subway lines
//const LineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
//const LineL = ["8th", "6th", "Union Square", "3rd", "1st"];
//const Line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];

let printMsg = "";

const lineN = {
  name: 'N',
  stops: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
};

const lineL = {
  name: 'L',
  stops: ["8th", "6th", "Union Square", "3rd", "1st"]
};

const line6 = {
  name: '6',
  stops: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

const subway = [lineN, lineL, line6] ;

const findLine = function (line) {
	let foundIndex = 0;

	//console.log("line = " + line);

	for (let i=0; i<subway.length; i++) {
		//console.log(i, subway[i].name)
		if (line === subway[i].name) {
			//console.log("found it");
			foundIndex = i;
			break;
		}
	}

	//console.log("foundline = " + foundline);
	//return the line
	return subway[foundIndex];
};

const center = "Union Square";

const printStops = function(stopsArray, indexStart, indexEnd) {
	//console.log(stopsArray);
	//console.log("" + indexStart);
	//console.log("" + indexEnd);

	let pArray = [];
	//handle different directions when traversing the array, it could be forward or backward
	if (indexStart > indexEnd) {
		for (let y = (indexStart-1); y >= indexEnd; y--) {
			pArray.push(stopsArray[y]);
		}
	} else {
		for (let y = (indexStart+1); y <= indexEnd; y++) {
			pArray.push(stopsArray[y]);
		}
	}

	return pArray;
}

const planTrip = function (startline, startpt, destline, destpt) {

	// Handled in the web page better:
	
	if (startline===destline && startpt===destpt) {
		printMsg = "Pick different stations as starting and destination points.";
		console.log(printMsg);
		return;
	} else if (startpt===destpt && destpt===center) {
		//alert("You don't need to travel, you're on the same station.");
		printMsg = "You don't need to travel, you're on the same station: " + center;
		console.log(printMsg);
		return;
	}

	////

	//====== startingpt details

	const sLine = findLine (startline);
	
	//console.log("sLine " + sLine.name);
	//console.log("stops " + sLine.stops);

	const sIndex = sLine.stops.indexOf(startpt); 
	//console.log("station " + sIndex + "," + sLine.stops[sIndex] );

	const sUSidx = sLine.stops.indexOf(center);

	let startstops = [];
	
	//====== destination details

	const dLine = findLine (destline);
	const dIndex = dLine.stops.indexOf(destpt); 
	

	if (sLine===dLine) {
		// if same line, no need to stop at Union Square
		// one function call only
		startstops = printStops(sLine.stops, sIndex, dIndex);
		
		console.log(`You must travel through the following stops on the ${startline} line: ${startstops.join(", ")}.`);
		//console.log("No need to change at Union Square.");
		console.log( startstops.length + " stop" + (startstops.length>1 ? "s" : "") + " in total.");
		
		printMsg += `You must travel through the following stops on the ${startline} line: <br>${startstops.join(", ")}.`;
		
		printMsg += "<br><br>";
		
		printMsg += startstops.length + " stop" + (startstops.length>1 ? "s" : "") + " in total.";
	} else {

		//console.log("dLine " + dLine.name);
		//console.log("stops " + dLine.stops);

		//console.log("station " + dIndex + "," + dLine.stops[dIndex] );

		const dUSidx = dLine.stops.indexOf(center);

		startstops = printStops(sLine.stops, sIndex, sUSidx);
		let deststops = printStops(dLine.stops, dUSidx, dIndex);
		
		const stopCount = startstops.length + deststops.length;

		if (startstops.length>0) {
			console.log(`You must travel through the following stops on the ${startline} line: ${startstops.join(", ")}.`);
		}
		
		const hopon = "Hop on the " + destline + " line.";
		
		if (destpt!==center) {
			console.log("Change at Union Square. " + (deststops.length>0 ? hopon : ""));
		}
		
		if (deststops.length>0) {
			console.log(`Your journey continues through the following stops: ${deststops.join(", ")}.`);
		}
		
		console.log( stopCount + " stop" + (stopCount>1 ? "s" : "") + " in total.");
		
		//// html output
		
		if (startstops.length>0) {
			printMsg += `You must travel through the following stops on the ${startline} line: <br>${startstops.join(", ")}.`;
			printMsg += "<br><br>";
		}
		
		if (destpt!==center) { printMsg += "Change at Union Square. "; }
		
		printMsg += (deststops.length>0) ? hopon : "";
		
		if (deststops.length>0) {
			printMsg += "<br><br>";
			
			printMsg += `Your journey continues through the following stops:<br>${deststops.join(", ")}.`;
			
			printMsg += "<br><br>";
		}
		
		printMsg += stopCount + " stop" + (stopCount>1 ? "s" : "") + " in total.";
	}

	
	
};


console.log("TESTING: planTrip('N', 'Times Square', '6', '33rd');");
planTrip('N', 'Times Square', '6', '33rd');
console.log("TESTING: planTrip('N', 'Times Square', 'N', '8th');");
planTrip('N', 'Times Square', 'N', '8th');
console.log("TESTING: planTrip('L', 'Union Square', 'N', 'Union Square');");
planTrip('L', 'Union Square', 'N', 'Union Square');
console.log("TESTING: planTrip('N', '8th', 'N', '8th');");
planTrip('N', '8th', 'N', '8th');

console.log("TESTING: planTrip('6', 'Union Square', 'N', '8th');");
planTrip('6', 'Union Square', 'N', '8th');

console.log("TESTING: planTrip('6', 'Grand Central', 'L', 'Union Square');");
planTrip('6', 'Grand Central', 'L', 'Union Square');


/*
planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
*/



///////////////////////// Handle Web Page

const populateStops = function(selectLineListID, index) {
	let stationsList = document.getElementById(selectLineListID);
	stationsList.innerHTML = ""; //start
	
	let lineSelected = subway[index];

	for (let i=0; i<lineSelected.stops.length; i++) {
		let bt = document.createElement('option');
		bt.setAttribute('value', i);
		bt.innerHTML = lineSelected.stops[i];
		stationsList.appendChild(bt);
	}
	stationsList.options[0].selected = true; //default
};

const updateStartStations = function() {
	//startLinesList
	//startLineStationsList
	
	const sel = document.getElementById("startLinesList");
	const idx = sel.options[sel.selectedIndex].value;
	
	populateStops("startLineStationsList", idx);
};

const updateDestStations = function() {
	//destLinesList
	//destLineStationsList
	
	const sel = document.getElementById("destLinesList");
	const idx = sel.options[sel.selectedIndex].value;
	
	populateStops("destLineStationsList", idx);
};

const populateStartLinesList = function() {
	let startLinesList = document.getElementById("startLinesList");
	startLinesList.innerHTML = ""; //start

	for (let i=0; i<subway.length; i++) {
		let bt = document.createElement('option');
		bt.setAttribute('value', i);
		bt.innerHTML = subway[i].name;
		startLinesList.appendChild(bt);
	}
};

populateStartLinesList();

const populateDestLinesList = function() {
	let destLinesList = document.getElementById("destLinesList");
	destLinesList.innerHTML = ""; //start

	for (let i=0; i<subway.length; i++) {
		let bt = document.createElement('option');
		bt.setAttribute('value', i);
		bt.innerHTML = subway[i].name;
		destLinesList.appendChild(bt);
	}
};

populateDestLinesList();

const populateStartStations = function() {
	//startLinesList
	//startLineStationsList	

	populateStops("startLineStationsList", 0);
};

populateStartStations();

const populateDestStations = function() {
	//destLinesList
	//destLineStationsList

	populateStops("destLineStationsList", 0);
};

populateDestStations();

const handlePlanTrip = function() {
	//startLinesList
	//startLineStationsList
	
	printMsg = "";
	
	const selStartLine = document.getElementById("startLinesList");
	const selStartLineidx = selStartLine.options[selStartLine.selectedIndex].value;

	const selStartStations = document.getElementById("startLineStationsList");
	const selStartStationsidx = selStartStations.options[selStartStations.selectedIndex].value;
	
	const startline = subway[selStartLineidx].name;
	const startpt = subway[selStartLineidx].stops[selStartStationsidx];
	//console.log(startline);
	//console.log(startpt);

	//destLinesList
	//destLineStationsList

	const selDestLine = document.getElementById("destLinesList");
	const selDestLineidx = selDestLine.options[selDestLine.selectedIndex].value;

	const selDestStations = document.getElementById("destLineStationsList");
	const selDestStationsidx = selDestStations.options[selDestStations.selectedIndex].value;
	
	const destline = subway[selDestLineidx].name;
	const destpt = subway[selDestLineidx].stops[selDestStationsidx];
	
	//console.log(destpt);
	//console.log(startpt==="Union Square");
	
	if (startline===destline && startpt===destpt) {
		//alert("Pick different stations as starting and destination points.");
		printMsg = "Pick different stations as starting and destination points.";
	} else if (startpt===destpt && destpt===center) {
		//alert("You don't need to travel, you're on the same station.");
		printMsg = "You don't need to travel, you're on the same station: " + center;
	}	else {
		planTrip(startline, startpt, destline, destpt);
		//document.getElementById("itinerarydisplay").innerHTML = printMsg;
	}
	
	document.getElementById("itinerarydisplay").innerHTML = printMsg;
};