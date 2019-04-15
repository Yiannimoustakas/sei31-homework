console.log( "MTA time, bitch." );
console.log( "--------------------" );

const mtaNetwork = {
	n: [ '8th', 'Union Station', '23rd', '28th', '34th', 'Times Square' ],
	l: [ '1st', '3rd', 'Union Station', '6th', '8th' ],
	6: [ 'Astor Place', 'Union Station', '23rd', '28th', '33rd', 'Grand Central' ],
};

const sameLineIncreasingArrayIndexPrint = function( trainLine, trainStation ) {
	// boarding index find and allocation
	stationIndex = mtaNetwork[ trainLine ].indexOf( trainStation );

	traverseStationIndex = stationIndex + 1;

	console.log('traverseStationIndex: ' + traverseStationIndex + ', ' + 'trainStation: ' + trainStation );
	for ( let i = traverseStationIndex; i <= trainStation; i += 1 ) {
		console.log( `You'll traverse across: ${ mtaNetwork[ trainLine ][ i ] }` );
	};

};
const sameLineDecreasingArrayIndexPrint = function( trainLine, trainStation ) {
	// boarding index find and allocation
	stationIndex = mtaNetwork[ trainLine ].indexOf( trainStation );

	traverseStationIndex = stationIndex + 1;

	console.log('traverseStationIndex: ' + traverseStationIndex + ', ' + 'trainStation: ' + trainStation );
	for ( let i = traverseStationIndex; i <= trainStation; i += 1 ) {
		console.log( `You'll traverse across: ${ mtaNetwork[ trainLine ][ i ] }` );
	};

};

const increasingArrayIndexPrint = function( trainLine, trainStation ) {
	// boarding index find and allocation
	stationIndex = mtaNetwork[ trainLine ].indexOf( trainStation );

	traverseStationIndex = stationIndex + 1;

	for ( let i = traverseStationIndex; i <= mtaNetwork[ trainLine ].indexOf( 'Union Station' ); i += 1 ) {
		console.log( `You'll traverse across: ${ mtaNetwork[ trainLine ][ i ] }` );
	};

};
const decreasingArrayIndexPrint = function( trainLine, trainStation ) {
	// boarding index find and allocation
	reversedBoardArray = mtaNetwork[ trainLine ].reverse();
	boardingIndex = reversedBoardArray.indexOf( boardStation );
	// console.log( mtaNetwork[ trainLine ] );
	traverseBoardingIndex = boardingIndex;

	for ( let i = traverseStationIndex; i >= mtaNetwork[ trainLine ].indexOf( 'Union Station' ); i += 1 ) {
		console.log( `You'll traverse across: ${ mtaNetwork[ boardLine ][ i ] }` );
	};

};

// main function called ////////////////////////////////////////////////////////
const planTrip = function( boardLine, boardStation, alightLine, alightStation ) {

	// turn inputs into capitals so don't need to catch both caps and non caps in each if case.
	boardLine = boardLine.toLowerCase();
	alightLine = alightLine.toLowerCase();

	boardingStationIndex = mtaNetwork[ boardLine ].indexOf( boardStation );
	alightStationIndex = mtaNetwork[ alightLine ].indexOf( alightStation );
	unionStationBoardingIndex = mtaNetwork[ boardLine ].indexOf( 'Union Station' );
	unionStationAlightingIndex = mtaNetwork[ alightLine ].indexOf( 'Union Station' );

	// if both stops are on the N line
	if ( boardLine === 'n' && alightLine === 'n' || boardline === 'l' && alightLine === 'l' || boardline === '6' && alightLine === '6' ) {

		// if board[ i ] is less than than alight[ i ] then run this function
		if ( boardingStationIndex < alightStationIndex ) {
			sameLineIncreasingArrayIndexPrint( boardLine, alightStationIndex );
		}

		// if board[ i ] is greater than alight[ i ] then run this code
		if ( boardingStationIndex > alightStationIndex ) {
			sameLineDecreasingArrayIndexPrint( boardLine, alightStationIndex );
		}
	}


	// if board n and alight 6
	if ( boardLine === 'n' && alightLine === '6' ) {
		console.log( `You're getting on Line ${ boardLine.toUpperCase() }, Station: ${ boardStation }.` );
		// if input boarding station index is closer to 0 than Union Station
		if ( boardingStationIndex < unionStationBoardingIndex ) {
		console.log('boardingStationIndex < unionStationBoardingIndex');
		console.log(boardingStationIndex + ' ' + unionStationBoardingIndex);
			increasingBoardingArrayIndexPrint( boardLine, boardStation );
		} // unless boarding station index is farther away from 0 than Union Station
		else if ( boardingStationIndex > unionStationBoardingIndex ) {
			console.log('boardingStationIndex > unionStationBoardingIndex');
			console.log(boardingStationIndex, unionStationBoardingIndex);
			decreasingBoardingArrayIndexPrint( boardLine, boardStation );
		};
		// if input alight station index is closer to 0 than Union Station
		if ( alightStationIndex < unionStationAlightingIndex ) {
			console.log('alightStationIndex < unionStationAlightingIndex');
			console.log(alightStationIndex + ' ' + unionStationAlightingIndex);
			increasingAlightArrayIndexPrint( alightLine, alightStation );
		} // unless alighting station index is farther away from 0 than Union Station
		else if ( alightStationIndex > unionStationAlightingIndex ) {
			console.log('alightStationIndex > unionStationAlightingIndex');
			console.log(alightStationIndex + ' ' + unionStationAlightingIndex);
			decreasingAlightArrayIndexPrint( alightLine, alightStation );
		};
	}


};

planTrip('N', '34th', 'N', '8th');
// planTrip('N', 'Times Square', '6', '33rd');
