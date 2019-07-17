function quickSort(arr){
  //break case
  sorted = []
  arr1 = []
  arr2 = []

  console.log("original arr " + arr);

  let pivotNum = arr[0]
  arr.shift()

  console.log("pivot " + pivotNum);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivotNum) {
      arr1.push(arr[i])
    } else {
      arr2.push(arr[i])
    }
    console.log(arr1);
    console.log(arr2);
  }


}

module.exports = quickSort;
