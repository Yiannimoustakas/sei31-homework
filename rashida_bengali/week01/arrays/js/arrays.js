console.log('Up and running!');

const maxOfTwoNumbers = function (a,b) {
  // const result = Math.max(a,b);
  // return result;
    if (a > b) {
      return a;
    }
    else {
      return b;
    }
  };

  console.log(`The largest number of the two is ${maxOfTwoNumbers(5,10)}`);
  console.log(`The largest number of the two is ${maxOfTwoNumbers(53,10)}`);


  const maxOfThree = function (p,q,r) {
    // const result = Math.max(p,q,r);
    // return result;
    if (p>q && p>r) {
      return p;
    }
    else if (q>p && q>r) {
      return q;
    }
    else {
      return r;
    }
  };
    console.log(`The largest number of the three is ${maxOfThree(56,41,93)}`);
    console.log(`The largest number of the three is ${maxOfThree(5,1,3)}`);

    const vowel = function (z) {
      const vowelValues = ['a','e','i','o','u'];
      // if (z==='a' || z==='e' || z==='i' || z==='o' || z==='u') {
        if (vowelValues.includes(z)) {
        return true;
      }
      else {
        return false;
      }
    };
    console.log(vowel('a'));
    console.log(vowel('f'));


    const sumArray = function (array) {
      let sum = array[0];
        for (let i=1; i<array.length; i++) {
          sum += array[i];
        }
         return sum;
    };
    console.log(`The total sum is ${sumArray([1,2,3,4])}.`);
    console.log(`The total sum is ${sumArray([91,42,53,34])}.`);


    const multiplyArray = function (array) {
      let answer = array[0];
        for (let i=1; i<array.length; i++) {
          answer = answer * array[i];
        }
         return answer;
    };
    console.log(`The final answer is ${multiplyArray([1,2,3,4])}.`);
    console.log(`The final answer is ${multiplyArray([91,42,53,34])}.`);

    const reverseString = function (string) {
      let newString = '';
        for (let i=string.length-1; i>=0; i--) {
          newString += string[i];
        }
      return newString;
    };

    console.log(reverseString("abcdef"));
    console.log(reverseString("jag tester"));

    const findLongestWord = function (array) {
      let indexLength = [];
        for (let i=0; i<array.length; i++) {
          indexLength.push(array[i].length);
        }

          indexLength.sort(function(a, b){return a - b});

          // let arrayString = arrayLength.toString();
          const longestIndex = indexLength[indexLength.length-1];

            for (let k=0; k<array.length; k++) {
             if (array[k].length === longestIndex) {
              return array[k];
            }
            }
              // longestWord = array[k];
              // return longestWord;
    };

      console.log(findLongestWord(['queen','king','mississipi','rashida','jack']));

const filterLongWords = function (words, i) {
  const longWords = [];
  for (let k = 0; k < words.length; k++) {
    if (words[k].length > i) {
      longWords.push(words[k]);
    }
  }
  return longWords;
}

const words = ['amazed','draw','cat','good','better','wonderful','beautiful'];
console.log('Long words: ', filterLongWords(words, 4));
