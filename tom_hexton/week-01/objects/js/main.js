// https://gist.github.com/wofockham/dacf2da17c743afb2b17

// --------------------
// Part 1 Rectangles
const rectangleA = {
	length: 4,
	width: 4
};

const rectangleB = {
	length: 1,
	width: 4
};

console.log( 'Is it a square?' );
const isSquare = function( obj ) {
	if ( obj.length === obj.width ) {
		console.log( `Yes, is a square.` );
	} else {
		console.log( `No, is not a square.` );
	}
};
// function called
isSquare( rectangleA );
isSquare( rectangleB );
console.log( '----------' );


// Area of square.
console.log( '\n\nThe area is;' );
const area = function( obj ) {
	return obj.length * obj.width
};
// function called
console.log( area( rectangleA ) );
console.log( area( rectangleB ) );
console.log( '----------' );


// Perimeter of square.
console.log( '\n\nThe perimeter is;' );
const perimeter = function( obj ) {
	return ( 2 * obj.length ) + ( 2 * obj.width );
};
// function called
console.log( perimeter( rectangleA ) );
console.log( perimeter( rectangleB ) );
console.log( '----------' );


// ------------------
// Part 2 Triangles
const triangleA = {
	sideA: 3,
	sideB: 4,
	sideC: 4
};

console.log( '\n\n' );
const isEquilateral = function( triangleToTest ) {
	if ( triangleToTest.sideA === triangleToTest.sideB === triangleToTest.sideC ) {
		console.log( 'The triangle is an equilateral.' );
	} else {
		console.log( 'The triangle is not an equilateral.' );
	}
};
// function called
isEquilateral( triangleA );


// IS IT ISOSCELES
console.log( '\n' );
const isIsosceles = function( triangleToTest ) {

	if ( triangleToTest.sideA === triangleToTest.sideB || triangleToTest.sideB === triangleToTest.sideC || triangleToTest.sideA === triangleToTest.sideC ) {
		console.log( 'The triangle is an isosceles.' );
	} else {
		console.log( 'The triangle is not isosceles.' );
	}
};
// function called
isIsosceles( triangleA );


// AREA OF TRIANGLE
console.log( '\n' );
const areaOfTriangle = function( triangleToTest ) {
	// herons formula
	const herronsValue = ( triangleToTest.sideA + triangleToTest.sideB + triangleToTest.sideC ) / 2;
	const areaCalculation = Math.sqrt( herronsValue * ( herronsValue - triangleToTest.sideA ) * ( herronsValue - triangleToTest.sideB ) * ( herronsValue - triangleToTest.sideC ) );
	return areaCalculation;
};
// function called
console.log( `The area of this triganle is; ${ areaOfTriangle( triangleA ) }` );


// IS IT OBTUSE
console.log( '\n' );
const isObtuse = function( triangleToTest ) {

	// assume the 2 smallest sides and assign to array
	const smallestSides = [ triangleToTest.sideA, triangleToTest.sideB ];

	// check if 3rd side is in fact smaller than assumed two and overwrite the one it is smaller than
	if ( triangleToTest.sideC < smallestSides[ 0 ] ) {
		smallestSides[ 0 ] = triangleToTest.sideC;
	} else if ( triangleToTest.sideC < smallestSides[ 1 ] ) {
		smallestSides[ 1 ] = triangleToTest.sideC;
	}

	// find largest side and assign it to largestSide
	const largestSide = Math.max( triangleToTest.sideA, triangleToTest.sideB, triangleToTest.sideC );

	// square both smaller sides and add together, if less than largest side it is obtuse.
	if ( ( smallestSides[ 0 ] ** 2 ) + ( smallestSides[ 1 ] ** 2 < ( largestSide ** 2 ) ) ) {
		console.log( 'The triangle is obtuse.' );
	} else {
		console.log( 'The triangle is not obtuse.' );
	}
};
// function called
isObtuse( triangleA );
console.log( '----------' );


console.log( '\n\n' );
console.log( 'The Cash Register' );
// --------------------
// Part 3 The Cash Register
const cartForParty = {
	banana: "1.25",
	handkerchief: ".99",
	Tshirt: "25.01",
	apple: "0.60",
	nalgene: "10.34",
	proteinShake: "22.36"
};

const cashRegister = function( cartObject ) {

	let total = 0;

	// pick off all the values of the objects
	const objectValuesOnly = Object.values( cartObject );

	for ( let i = 0; i < objectValuesOnly.length; i += 1 ) {
		// convert the array of values to floats, keeping it as an array
		total += Number( objectValuesOnly[ i ] );
	};

	return total;

};
// function called
console.log( `The total is: $${cashRegister( cartForParty )}` ); // 60.55
console.log( '----------' );


console.log( '\n\n' );
console.log( 'Credit Card Validation' );
// --------------------
// Part 4 Credit Card Validation
const validateCreditCard = function( creditCardString ) {

	// removing hyphen
	creditCardString = creditCardString.split( '-' ).join( '' );

	// converting to a number
	const creditCardNumber = Number( creditCardString );
	console.log( creditCardNumber );

	// checking to see if contains any letters
	if ( !creditCardString.includes( 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z' ) ) {} else {
		console.log( 'Invalid characters.' );
		return false;
	};

	// checking if original string is 16 character
	if ( creditCardString.length === 16 ) {} else {
		return false;
	}

	if ( !allSameNumber(creditCardNumber) ){
		return false
	};

	// assigning final character from original string
	const lastNumber = creditCardString[ creditCardString.length - 1 ];

	// finding if final number is even
	if ( lastNumber % 2 === 0 ) {} else {
		console.log( 'Odd final number.' );
		return false;
	};

	// console.log( 'Good to go.' );
	return true;
};

// read remaining charaters and if different to firstChar add to array
const allSameNumber = function( creditCardNumber ) {
	// declare array and add first character
	creditCardNumber = creditCardNumber.toString()
	let firstNum = creditCardNumber[ 0 ];
	console.log(typeof creditCardNumber);

	for ( let i = 1; i < creditCardNumber.length; i += 1 ) {
		if ( firstNum !== creditCardNumber[ i ] ) {
			return true;
		};
	};
	return false;

};

// functions called
console.log( '\n\n Valid variants.\n-----' );
console.log( validateCreditCard( '9999-9999-8888-0000' ) );
console.log( '\n' );
console.log( validateCreditCard( '6666-6666-6666-1666' ) );
console.log( '\n\n Invalid variants.\n-----' );
console.log( validateCreditCard( 'a923-3211-9c01-1112' ) );
console.log( '\n' );
console.log( validateCreditCard( '4444-4444-4444-4444' ) );
console.log( '\n' );
console.log( validateCreditCard( '1111-1111-1111-1110' ) );
console.log( '\n' );
console.log( validateCreditCard( '6666-6666-6666-6661' ) );
