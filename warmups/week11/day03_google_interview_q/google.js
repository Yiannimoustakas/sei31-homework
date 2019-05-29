// 1st solution

const findSum = (arr, val) => {
  let searchValues = new Set();
  searchValues.add(val - arr[0]);

  for ( let i = 1; i < arr.length; i++ ) {
    let searchVal = val - arr[i];

    if (searchValues.has(arr[i])) {
      return true;
    } else {
      searchValues.add(searchVal);
    }
  };

  return false;
};

console.log(findSum([3,5,1,3], 9));



// One Liner Solution

const findSum = (arr, sum) => arr.some((set => n => set.has(n) || !set.add(sum - n))(new Set));

console.log(findSum([3,5,6,4], 9));



// Mabeth's Solution


const google = (array, sum) => {

  for (let i = 0; i< array.length; i++) {
    if ( array.filter( num => num===array[i] ).includes( (sum - array[i]) ) ) {
        return true;
    }
  }

  return false;
};

console.log( google([3, 5, 1, 4], 9) );
console.log( google([2, 5, 6, 4], 10) );
console.log( google([2, 5, 6, 4], 2) );



// Ritika's Solution

const isSum = ( arr, sum ) => {

  function individualCheck( base=0, current=1 ) {
    // console.log(`individualCheck with base: ${ base } and current: ${ current }`);
    while ( base < arr.length ) {
      if ( base === current && base !== arr.length - 1 ) {
        // console.log('Checking with the number itself');
      } else
      if ( sum === arr[base] + arr[current] ) {
        return true;
      } else if ( base === arr.length - 1 && current === arr.length - 1 ) {
        return false;
      }

      if ( current >= arr.length - 1 ) {
        base += 1;
        current = 0;
      } else {
        current += 1;
      }
      individualCheck( base, current );
    }
  }

  return individualCheck();
}

console.log( isSum([3, 5, 1, 4], 9) ); // true
console.log( isSum([1, 2, 4, 6], 5) ); // true
console.log( isSum([1, 3, 5, 4], 2) ); // false
console.log( isSum([2, 3, 5, 8], 6) ); // false



// Michael's Solution

const findSum = (array, sum) => {
  let arrSumArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      let arrSum = array[i] + array[j];
      arrSumArray.push(arrSum);
      console.log(arrSumArray);
      console.log(arrSum);
    }
  }
  if (arrSumArray.includes(sum)) {
    return true;
  } else {
    return false;
  }
}

console.log(findSum([3, 5, 1, 4], 9));
