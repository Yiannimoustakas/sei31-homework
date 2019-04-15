$( document ).ready( function() {

	////////////////////////////////////////////////////////////////////////////
	// jQuery caching

	// create a jQuery object for the checking account DOM node
	const $checkingBalance = $( '#checking-balance' );
	// select Checking ID input
	const $checkingInput = $( '#checking-amount' );

	// create a jQuery object for the savings account DOM node
	const $savingsBalance = $( '#savings-balance' );
	// select Savings ID input
	const $savingsInput = $( '#savings-amount' );

	////////////////////////////////////////////////////////////////////////////
	// shared functions

	const getBalance = function( accountBalance ) {
		// get balance's current innerHTML
		// remove the dollar sign from returned string and convert to number
		return Number( accountBalance.html().slice( 1 ) );
	};

	const checkingInput = function() {
		if ( !Number( $checkingInput.val() ) ) {
			console.log( 'Number required.' );
			$checkingBalance.html( '$0' );
			return
		} else {
			return Number( $checkingInput.val() );
		}
	};

	const savingsInput = function() {
		if ( !Number( $savingsInput.val() ) ) {
			console.log( 'Number required.' );
			$savingsBalance.html( '$0' );
			return
		} else {
			return Number( $savingsInput.val() );
		}
	};

	const totalDollars = function( a = checkingTotal, b = savingsTotal ) {
		return a + b;
	}

	////////////////////////////////////////////////////////////////////////////
	// button events

	// Checking deposit ////////////////////
	// select Checking deposit button & add on click listener then run anonymous function
	$( '#checking-deposit' ).on( 'click', function() {

		// get current Checking balance and add Users input value
		checkingTotal += checkingInput();
		$checkingBalance.html( "$" + checkingTotal );

		// chagne BG to red if total is less than 0
		if ( checkingTotal > 0 ) {
			$( '#checking' ).removeClass( 'zero' )
		};

	} );

	const withdrawal = function( whichInput, originalAcc, overdraftAcc ) {

	};

	// Checking withdraw ////////////////////
	// select Checking withdraw button & add on click listener then run anonymous function
	$( '#checking-withdraw' ).on( 'click', function() {

		// if total dollars is less than input, no withdrawal
		if ( totalDollars() < checkingInput() ) {
			console.log( 'Sorry, not enough funds to make that withdrawl.' );

		} // if there is not enough in checkingTotal but there is enough across both accounts
		else if ( checkingTotal < checkingInput() && totalDollars() >= checkingInput() ) {

			// if there is sufficient overdraft funds, but the current account has $0, it must come from the opposite account
			// if input account's total is 0 then it must all come from the opposite
			if ( checkingTotal === 0 || checkingInput() === savingsTotal ) {
				// update global savingsTotal
				savingsTotal -= checkingInput();
				// apply updated value to HTML
				$savingsBalance.html( "$" + savingsTotal );
			} else {
				// subtract as much as possible from savingsTotal and the remainder from checkingTotal, assigning the difference
				const remainder = checkingInput() - checkingTotal;
				// update global variable
				checkingTotal = 0;
				// apply updated value to HTML
				$checkingBalance.html( "$" + checkingTotal );

				// update global checkingTotal
				savingsTotal -= remainder;
				// apple updated value to HTML
				$savingsBalance.html( "$" + savingsTotal );
			}

			// chagne BG to red if total is less than or 0
			if ( checkingTotal <= 0 ) {
				$( '#checking' ).addClass( 'zero' );
			};
			if ( savingsTotal <= 0 ) {
				$( '#savings' ).addClass( 'zero' );
			};

		} else {
			checkingTotal -= checkingInput()
			$checkingBalance.html( "$" + checkingTotal );

			// chagne BG to red if total is less than or 0
			if ( checkingTotal <= 0 ) {
				$( '#checking' ).addClass( 'zero' );
			};
		}
	} );

	// Savings deposit ////////////////////
	// select Savings desposit button & add on click listener then run anonymous function
	$( '#savings-deposit' ).on( 'click', function() {

		// get current Savings balance and add Users input value
		savingsTotal += savingsInput();
		$savingsBalance.html( "$" + savingsTotal );

		// chagne BG to red if total is more than 0
		if ( savingsTotal > 0 ) {
			$( '#savings' ).removeClass( 'zero' )
		};
	} );

	// Savings withdraw ////////////////////
	// select Savings desposit button & add on click listener then run anonymous function
	$( '#savings-withdraw' ).on( 'click', function() {

		// if total dollars is less than input, no withdrawal
		if ( totalDollars() < savingsInput() ) {
			console.log( 'Sorry, not enough funds to make that withdrawl.' );

		} // if there is not enough in savingsTotal but there is enough across both accounts
		else if ( savingsTotal < savingsInput() && totalDollars() >= savingsInput() ) {

			// if there is sufficient overdraft funds, but the current account has $0, it must come from the opposite account
			// if input account's total is 0 then it must all come from the opposite
			if ( savingsTotal === 0 || savingsInput() === checkingTotal ) {
				// update global checkingTotal
				checkingTotal -= savingsInput();
				// apply updated value to HTML
				$checkingBalance.html( "$" + checkingTotal );
			} else {
				// subtract as much as possible from savingsTotal and the remainder from checkingTotal, assigning the difference
				const remainder = savingsInput() - savingsTotal;
				// update global variable
				savingsTotal = 0;
				// apply updated value to HTML
				$savingsBalance.html( "$" + savingsTotal );

				// update global checkingTotal
				checkingTotal -= remainder;
				// apple updated value to HTML
				$checkingBalance.html( "$" + checkingTotal );
			}

			// chagne BG to red if total is less than or 0
			if ( savingsTotal <= 0 ) {
				$( '#savings' ).addClass( 'zero' );
			};
			if ( checkingTotal <= 0 ) {
				$( '#checking' ).addClass( 'zero' );
			};

		} // if savingsTotal covers the amount being asked by user
		else {
			savingsTotal -= savingsInput();
			$savingsBalance.html( "$" + savingsTotal );

			// chagne BG to red if total is less than or 0
			if ( savingsTotal <= 0 ) {
				$( '#savings' ).addClass( 'zero' );
			};
		};

	} );

	////////////////////////////////////////////////////////////////////////////
	// totals

	// Checking account balance
	let checkingTotal = getBalance( $checkingBalance );
	// console.log( "Checking total on load: $" + checkingTotal ); // DEBUG ONLY

	// Savings account balance
	let savingsTotal = getBalance( $savingsBalance );
	// console.log( "Savings total on load: $" + savingsTotal ); // DEBUG ONLY

	// debugger
} );
