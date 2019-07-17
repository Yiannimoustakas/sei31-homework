function bubbleSort(array) {

let swapHappened = true

  while (swapHappened === true) {
    for (let i = 1; i < array.length; i++) {
      if (array[i - 1] > array[i]) {
        //console.log(`${array[i - 1]} is greater than ${array[i]}`);
        big = array[i - 1]
        small = array[i]
        array[i] = big
        array[i - 1] = small
        //console.log(big, small);
        swapHappened = true
      } else {
        //console.log(`${array[i - 1]} is less than ${array[i]}`);
        swapHappened = false
      }
    }
  }
  return array;
}

module.exports = bubbleSort;

// swapHappened = true
//
// for (let i = 0; i < array.length; i++) {
  //   if (swapHappened === true ){
    //
    //     for (let j = 1; j < array.length; j++) {
      //       if (array[j-1] > array[j]) {
        //         //some code
        //       } else {
          //         swapHappened === false
          //         return
          //       }
          //     }
          //   } else {
            //     return
            //   }
            // }

            // Make some sort of loop that keeps happening if there were any swaps
            // that happened this turn

            // reset swapHappened to false each time so we can detect if a swap
            // happened in this specific iteration.

            // Make another loop (inside the first one) to go through one
            // round of swapping from the start of the list to the end

            // Inside inner loop:
            // compare each pair of elements near each other
            // swap them if the bigger one was at a lower index.

            // Make sure to keep track of whether a swap happened!

            // After both loops have exited, remember to return the array
