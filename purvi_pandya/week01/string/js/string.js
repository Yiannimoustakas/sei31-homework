/*Create a function called DrEvil. It should take a single argument,
an amount, and return ' dollars',
except it will add '(pinky)' at the end if the amount is 1 million. For example:*/

const drEvil = function (amount){

  if ( amount === 1000000 ){
   const dollar = "1000000 dollars (pinky)";
    return dollar;
  } else {
    const dollar = amount + " dollars";
    return dollar;
  }

}
console.log( drEvil( 1000000 ) );

/*Create a function called mixUp. It should take in two strings,
and return the concatenation of the two strings (separated by a space)

slicing out and swapping the first 2 characters of each.*/


const mixUp = function ( str1, str2 ){

  const string1 = str1.slice(0,2) + str2.slice(2) + " ";
  const string2 = str2.slice(0,2) + str1.slice(2);

  console.log( string1) ;
  console.log( string2 );
  return string1.concat( string2 );

}
console.log(mixUp( "dinner","cat" ));

/*Create a function called fixStart. It should take a single argument,
a string, and return a version where all occurences of its first character
 have been replaced with '*', except for the first character itself.
 You can assume that the string is at least one character long.*/


const fixStart = function(str){
  first = str[0];
  let arr= str.split('');
  for( var i=1; i<arr.length;i++ ){

  if( arr.[i] === firstLetter ){
    arr[i]= '*';

    }
    console.log(arr);
    return arr.join('');
}

}
console.log(fixStart("daddy"));

/*Create a function called verbing. It should take a single argument,
a string. If its length is at least 3, it should add 'ing' to its end
, unless it already ends in 'ing', in which case it
should add 'ly' instead. If the string length is less than 3,
it should leave it unchanged*/

const verbing = function(str){
  if(str.length<3){
  return str;
} else if(str.length>3){
  if(str.slice(-3)==="ing"){
    return str + "ly";
  }
    return str + "ing";

}
}
console.log(verbing("coming"));

/*Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole
'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence
(or at all), just return the original sentence.*/

const notBad = function(str){

}
