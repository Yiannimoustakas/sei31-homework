console.log( "MTA time, bitch." );
console.log( "--------------------" );

const mtaNetwork = {
	n: [ '8th', 'Union Station', '23rd', '28th', '34th', 'Times Square' ],
	l: [ '1st', '3rd', 'Union Station', '6th', '8th' ],
	six: [ 'Astor Place', 'Union Station', '23rd', '28th', '33rd', 'Grand Central' ],
};

const sameLineStationAdditionPrint = function( trainLine ) {

	console.log( `You'll get on at: ${ trainLine[ boardingIndex ] }.` );

	traverseBoardingIndex = boardingIndex + 1;
	traverseAlightingIndex = alightingIndex - 1;
	// print current boarding and alighting values
	// console.log(`traverseBoardingIndex: ${ traverseBoardingIndex }, traverseAlightingIndex: ${ traverseAlightingIndex }`);

	// for loop that starts at the boardingIndex and proceeds is as long as alightingIndex
	for ( let i = traverseBoardingIndex; i <= traverseAlightingIndex; i += 1 ) {
		console.log( `You'll traverse across: ${ trainLine[ i ] }` );
	}

	console.log( `And get off at: ${ trainLine[ alightingIndex ] }` );
};

const sameLineStationSubtractionPrint = function( trainLine ) {

	console.log( `You'll get on at: ${ trainLine[ boardingIndex ] }` );

	traverseBoardingIndex = boardingIndex - 1;
	traverseAlightingIndex = alightingIndex + 1;
	// print current boarding and alighting values
	// console.log(`traverseBoardingIndex: ${ traverseBoardingIndex }, traverseAlightingIndex: ${ traverseAlightingIndex }`);

	for ( let i = traverseBoardingIndex; i >= traverseAlightingIndex; i -= 1 ) {
		console.log( `You'll traverse across: ${ trainLine[ i ] }` );
	}

	console.log( `And get off at: ${ trainLine[ alightingIndex ] }` );
};

const increasingBoardingArrayIndexPrint = function( boardLine, boardStation ) {
	// boarding index find and allocation
	boardingIndex = mtaNetwork[ boardLine ].indexOf( boardStation );

	traverseBoardingIndex = boardingIndex + 1;

	for ( let i = traverseBoardingIndex; i <= mtaNetwork[ boardLine ].indexOf( 'Union Station' ); i += 1 ) {
		console.log( `You'll traverse across: ${ mtaNetwork[ boardLine ][ i ] }` );
	};

};
const decreasingBoardingArrayIndexPrint = function( boardLine, boardStation ) {
	// boarding index find and allocation
	reversedBoardArray = mtaNetwork[ boardLine ].reverse();
	boardingIndex = reversedBoardArray.indexOf( boardStation );
	// console.log( mtaNetwork[ boardLine ] );
	traverseBoardingIndex = boardingIndex;

	for ( let i = mtaNetwork[ boardLine ].indexOf( 'Union Station' ); i >= traverseBoardingIndex; i -= 1 ) {
		console.log( `You'll traverse across: ${ mtaNetwork[ boardLine ][ i ] }` );
	};

};

const increasingAlightArrayIndexPrint = function( alightLine, alightStation ) {
	// alighting index find and allocation
	alightingIndex = mtaNetwork[ alightLine ].indexOf( alightStation );

	traverseAlightingIndex = alightingIndex + 1;

	for ( let i = traverseAlightingIndex; i >= mtaNetwork[ alightLine ].indexOf( 'Union Station' ); i += 1 ) {
		console.log( `You'll traverse across: ${ mtaNetwork[ alightLine ][ i ]}` );
	}
};
const decreasingAlightArrayIndexPrint = function( alightLine, alightStation ) {
	// alighting index find and allocation
	reversedAlightArray = mtaNetwork[ alightLine ].reverse();
	alightingIndex = reversedAlightArray.indexOf( alightStation );
	// console.log( mtaNetwork[ alightLine ] );

	traverseAlightingIndex = alightingIndex;

	// console.log( reversedAlightArray.indexOf( 'Union Station' ), alightingIndex );

	for ( let i = reversedAlightArray.indexOf( 'Union Station' ); i >= traverseAlightingIndex ; i -= 1 ) {
		console.log( `You'll traverse across: ${ mtaNetwork[ alightLine ][ i ]}` );
	}
};

// main function called ////////////////////////////////////////////////////////
const planTrip = function( boardLine, boardStation, alightLine, alightStation ) {

	// converting input of '6' to 'six' for array referencing
	if ( boardLine === '6' ) {
		boardLine = 'six';
	} else if ( alightLine === '6' ) {
		alightLine = 'six';
	};

	// turn inputs into capitals so don't need to catch both caps and non caps in each if case.
	boardLine = boardLine.toLowerCase();
	alightLine = alightLine.toLowerCase();

	boardingStationIndex = mtaNetwork[ boardLine ].indexOf( boardStation );
	alightStationIndex = mtaNetwork[ alightLine ].indexOf( alightStation );
	unionStationBoardingIndex = mtaNetwork[ boardLine ].indexOf( 'Union Station' );
	unionStationAlightingIndex = mtaNetwork[ alightLine ].indexOf( 'Union Station' );

	// if both stops are on the N line
	if ( boardLine === 'n' && alightLine === 'n' ) {
		// assign index1 to where they board the train
		boardingIndex = mtaNetwork.n.indexOf( boardStation );

		// assign index2 to where they alight the train
		alightingIndex = mtaNetwork.n.indexOf( alightStation );

		// assign to pass into sameLineStationAdditionPrint function
		trainLine = mtaNetwork.n;

		// if board[ i ] is less than than alight[ i ] then run this function
		if ( boardingIndex < alightingIndex ) {
			sameLineStationAdditionPrint( trainLine );
		}

		// if board[ i ] is greater than alight[ i ] then run this code
		if ( boardingIndex > alightingIndex ) {
			sameLineStationSubtractionPrint( trainLine );
		}
	}

	// if both stops are on the L line
	if ( boardLine === 'l' && alightLine === 'l' ) {
		// assign index1 to where they board the train
		boardingIndex = mtaNetwork.l.indexOf( boardStation );

		// assign index 2 to where they alight the train
		alightingIndex = mtaNetwork.l.indexOf( alightStation );

		// assign to pass into sameLineStationAdditionPrint function
		trainLine = mtaNetwork.l;

		// if board[ i ] is less than than alight[ i ] then run this function
		if ( boardingIndex < alightingIndex ) {
			sameLineStationAdditionPrint();
		}

		// if board[ i ] is greater than alight[ i ] then run this code
		if ( boardingIndex > alightingIndex ) {
			sameLineStationSubtractionPrint();
		}
	}

	// if both stops are on the 6 line
	if ( boardLine === 'six' && alightLine === 'six' ) {
		// assign index1 to where they board the train
		boardingIndex = mtaNetwork.six.indexOf( boardStation );

		// assign index 2 to where they alight the train
		alightingIndex = mtaNetwork.six.indexOf( alightStation );

		// assign to pass into sameLineStationAdditionPrint function
		trainLine = mtaNetwork.six;

		// if board[ i ] is less than than alight[ i ] then run this function
		if ( boardingIndex < alightingIndex ) {
			sameLineStationAdditionPrint();
		}

		// if board[ i ] is greater than alight[ i ] then run this code
		if ( boardingIndex > alightingIndex ) {
			sameLineStationSubtractionPrint();
		}
	}

	// if board n and alight l
	if ( boardLine === 'n' && alightLine === 'l' ) {
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

	// if board n and alight six
	if ( boardLine === 'n' && alightLine === 'six' ) {
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

	// if board l and alight six
	if ( boardLine === 'l' && alightLine === 'six' ) {
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

	// if board l and alight n
	if ( boardLine === 'l' && alightLine === 'n' ) {
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

	// if board six and alight n
	if ( boardLine === 'six' && alightLine === 'n' ) {
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

	// if board six and alight l
	if ( boardLine === 'six' && alightLine === 'l' ) {
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

// planTrip( 'N', '8th', 'L', '1st' );
// planTrip( 'L', '1st', 'N', '8th' );
planTrip('N', 'Times Square', '6', '33rd');
