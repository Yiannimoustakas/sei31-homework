///////////////////////////////////
//////////////Part 1, Rectangle
///////////////////////////////////

const rectangle = {
  length: 4,
  width: 5
};

//Check If Sqaure Or Rectangle
const checkShape = () => {
  if (rectangle.length === rectangle.width) {
    console.log("Nope, Thats a Sqaure Mate");
  } else {
    console.log("Yep, That's A Rectangle");
  }
}

//Get The Area
const areaRectangle = () => {
  const area = rectangle.length * rectangle.width;
  console.log(`It's area is ${area}m²`);
}

//Get The Perimeter
const perimeterRectangle = () => {
  const perimeter = (rectangle.length * 2) + (rectangle.width * 2);
  console.log(`It's perimeter is ${perimeter}m`);
}

///////////////////////////////////
//////////////Part 2, Trianlge
///////////////////////////////////

//Function for finding sum of object items
const sum = (obj) => {
  let sum = 0;
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      sum += parseFloat(obj[i]);
    }
  }
  return sum;
}


const triangle = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};


const isEquilateral = () => {
  totalSides = sum(triangle);
  if ((totalSides / 3) === triangle.sideA) {
    console.log("Yes, it is Equilateral");
  } else {
    console.log("No, it is not Equilateral");
  }
}

const isIsosceles = () => {
  if (triangle.sideA === triangle.sideB || triangle.sideA === trinangle.sideC) {
    console.log("Yes, it is Isosceles");
  } else {
    console.log("No, it is not Isosceles");
  }
}

const getArea = () => {
  const perimeter = sum(triangle);
  const half = perimeter / 2;
  const area = Math.sqrt(half * (half - triangle.sideA) * (half - triangle.sideB) * (half - triangle.sideC));
  return area;
}

const isObtuse = () => {
  const sideASqr = (triangle.sideA * triangle.sideA);
  const sideBSqr = (triangle.sideB * triangle.sideB);
  const sideCSqr = (triangle.sideC * triangle.sideC);

  if ((sideASqr + sideBsqr < sideCSqr) || (sideBSqr + sideCsqr < sideASqr) || (sideCSqr + sideAsqr < sideBSqr)) {
    console.log("Yes, it is Obtuse");
  } else {
    console.log("No, it is not Obtuse");
  }
}

///////////////////////////////////
//////////////Part 3, Cash Register
///////////////////////////////////

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const checkOut = () => {
  const total = sum(cartForParty);
  console.log(total);
}

///////////////////////////////////
//////////////Part 4, CreditCardValidation
///////////////////////////////////

function add(string) {
  string = string.split('');
  var sum = 0;
  for (var i = 0; i < string.length; i++) {
    sum += parseInt(string[i], 10);
  }
  return sum;
}

const validateCreditCard = (cc) => {
  let cleanNumber = cc.replace(/-/g, "");
  let sumOfDigits = add(cleanNumber);
  let lastDigit = (cleanNumber.length - 1);
  let isValid = [];
  let notValid = [];

  if (cleanNumber.length >= 16) {
    isValid.push("Card Number Is Long Enough");
    console.log("Test 1 Passed");
  } else {
    notValid.push("Card Number Is Too Short")
  }

  for (let i = 0; i < cleanNumber.length; i++) {
    if (cleanNumber[0] !== cleanNumber[i]) {
      isValid.push("String Has Different Digits");
      console.log("Test 2 Passed");
      break;
    }
  }

  for (let i = 0; i < cleanNumber.length; i++) {
    if (cleanNumber[0] !== NaN) {
      isValid.push("String Does Not Conatain Letters");
      console.log("Test 3 Passed");
      break;
    } else {
      notValid.push("String Conatains Letters")
    }
  }

  if ((cleanNumber[lastDigit]) % 2 === 0) {
    isValid.push("The Last Digit Is Even");
    console.log("Test 4 Passed");
  } else {
    notValid.push("The Last Digit Is Odd");
  }

  if (sumOfDigits > 16) {
    isValid.push("The Sum Is Greater Than 16");
    console.log("Test 5 Passed");
  } else {
    notValid.push("The Sum Is Less Than 16")
  }

  if (isValid.length === 5) {
    console.log(`Card Number ${cc} is valid and here is why: ${isValid.join(", ")}. Thank You for your purchase.`)
  } else {
    console.log(`Card Number ${cc} is not valid as ${notValid.join(", ")}. Please Try Again! `)
  }

}
