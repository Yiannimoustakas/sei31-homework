// Class Solution

const dashatize = num => {
  const abs = Math.abs(num);

  if (Number.isNaN(abs)) {
    return num;
  };

  let dashed = abs.toString().split("");

  dashed = dashed.map((el, i) => {
    return +el % 2 === 0 ? el : `-${el}-`;
  }).join("").replace(/--/gi, "-")

  if (dashed[0] === "-") {
    dashed = dashed.substr(1, dashed.length)
  }

  if (dashed[dashed.length-1] === "-") {
    dashed = dashed.substr(0, dashed.length-1)
  };

  return dashed
}

// Ritika's Solution
const dashatize = input => {
  const num = Math.abs( input );
  let result = [];
  if ( Number.isNaN( num ) ) {
    return input;
  }
  numArray = num.toString().split('');
  for ( let i = 0; i < numArray.length; i++ ) {
    if ( numArray[i] % 2 === 0 ) {
      result.push( numArray[i] );
    } else {
      if (result.slice(-1)[0] !== '-' &&  i !== 0) {
        result.push('-');
      }
      result.push( numArray[i] );
      if ( i !== numArray.length-1 ) {
        result.push( '-' );
      }
    }
  }
  return result.join('');
}

console.log(dashatize(274))//, "2-7-4", "Should return 2-7-4");
console.log(dashatize(5311))//, "5-3-1-1", "Should return 5-3-1-1");
console.log(dashatize(86320))//, "86-3-20"//, "Should return 86-3-20");
console.log(dashatize(974302))//, "9-7-4-3-02"//, "Should return 9-7-4-3-02");


console.log(dashatize(NaN))//, "NaN"//, "Should return NaN");
console.log(dashatize(0))//, "0"//, "Should return 0");
console.log(dashatize(-1))//, "1"//, "Should return 1");
console.log(dashatize(-28369))//, "28-3-6-9", "Should return 28-3-6-9");
