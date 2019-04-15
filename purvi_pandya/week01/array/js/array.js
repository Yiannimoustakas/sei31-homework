/*Define a function maxOfTwoNumbers that takes two numbers as arguments and returns
the largest of them. Use the if-then-else construct available in Javascript.
You'll have to remember your pre-work, or do some googling to figure this out.*/

const maxOfTwoNumbers = function(num1, num2){

  if(num1 > num2){
    return num1;
  } else {
    return num2;
  }
}
console.log(`The greater number is ${maxOfTwoNumbers(7,21)}.`);
console.log(`The greater number is ${maxOfTwoNumbers(49,2)}.`);

/*Define a function maxOfThree that takes three numbers as arguments and
returns the largest of them.*/

const maxOfThree = function (num1,num2,num3){
if(num1 > num2 && num1 > num3){
return num1;
} else if(num2 > num3 && num2 > num1) {
  return num2;
}else {
  return num3;
}
  //return Math.max(num1,num2,num3); //Math.max function is used
}

console.log(`The greates num is ${maxOfThree(6,45,12)}`);
console.log(`The greates num is ${maxOfThree(99,165,2)}`);

/*Write a function that takes a character (i.e. a string of length 1) and
returns true if it is a vowel, false otherwise.*/
const stringCharacter = function(char){
  if (char==="a" || char==="e" || char==="o" || char==="i" || char==="u" char==="A" || char==="E" || char==="O" || char==="I" || char==="U"){
  return true;
}else {
  return false;
}

}

console.log(stringCharacter('g'));


/*Define a function sumArray and a function multiplyArray that sums and multiplies
(respectively) all the numbers in an array of numbers.
For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4])
should return 24.*/

const sumArray= function(numbers){
  let sum = 0; //initally there is no value for sum
  for(let i = 0; i < numbers.length; i++){
  sum = sum + numbers[i]; //addin all the string numbers to variable sum

  }
return sum;
}
console.log(sumArray([1,2,3,4]));


const multiplyArray= function(numbers){
  let multiply = 1; //lowest multiply value is 1
  for(let i = 0; i < numbers.length; i++){
  multiply = multiply * numbers[i];

  }
return multiply;
}
console.log(multiplyArray([1,2,3,4]));


/*Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".*/

const reverseString = function(str){
if(str === ""){
  return "";
}else {
  return reverseString(str.slice(1)) + str.charAt(0);
  /*Each call: str === "?"         reverseString(str.subst(1))     + str.charAt(0)
1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
4th call – reverseString("lo")      will return   reverseString("o")              + "l"
5th call – reverseString("o")       will return   reverseString("")               + "o"
Second part of the recursion method
The method hits the if condition and the most highly nested call returns immediately
5th call will return reverseString("") + "o" = "o"
4th call will return reverseString("o") + "l" = "o" + "l"
3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h"
*/
}
}
console.log(reverseString("jag testar"));


/*Write a function findLongestWord that takes an array of words and returns
the length of the longest one.*/

const findLongestWord = function (array){
let longestWord = ""; //currently the length of the longest value is o.
  for(let i = 0; i < array.length; i++){
    //console.log(array[0].length);

    if(array[i].length > longestWord.length ){
      longestWord = array[i]; //each word of array will go in the variable longestWord
    }

  }
  return longestWord;
}

console.log(findLongestWord(["hi", "bye","me"]));

/*Write a function filterLongWords that takes an array of words and an number i and
returns the array of words that are longer than i.*/

const filterLongWords = function(array, n){//n, is the number as we are comparing the length of array words with n
let words = "";
for(let i = 0; i < array.length; i++){
  if(array[i].length >= n){ //whichever words are same or greater than 'n' will go as output
 words += array[i];
  }
}
return words;
}
console.log(filterLongWords(["world","development","hi"], 3));
