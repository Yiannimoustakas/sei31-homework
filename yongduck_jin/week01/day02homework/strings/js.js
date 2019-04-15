// These exercises will test your knowledge of string functions, conditionals, 
// and arrays. For many of them, you will want to consult the JavaScript strings 
// reference to find useful string methods to call.

// DrEvil
// Create a function called DrEvil. It should take a single argument, an amount,
//  and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:


function DrEvil(amount){
  if(amount === 1000000){
    return `${amount}+ collars (pinky)`
  } else{
    return `${amount} dollars`
  }
}

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)


function mixUp(a, b){
  var a1 = a.split("")
  var b1 = b.split("");
  var aSplice =a1.splice(0, 2)
  var bSplice= b1.splice(0, 2)
  var a2 = bSplice.concat(a1)
  var b2 = aSplice.concat(b1)
  
  // var a2 = a1.unshift(bSplice); //when I use unshift why this return number "4"??
  
  
  return a2.join("") +" "+ b2.join("");
}
console.log(mixUp('apple', 'microsoft'))



// MixUp
// Create a function called mixUp. It should take in two strings, 
// and return the concatenation of the two strings (separated by a space) slicing out and swapping 
// the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', 'pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!



function fixStart(a){
  let a1 = a.split("")
  
  let newOne = []
  for(var i =0; i < a1.length ; i++){
    if(newOne.includes(a1[i])){
      newOne.push('*')
    } else{
      newOne.push(a1[i])
    }   

  }
  return newOne.join("");
}
let aWord = "babble"
console.log(fixStart(aWord)); 

// FixStart
// Create a function called fixStart. It should take a single argument, a string, 
// and return a version where all occurences of its first character have been replaced with '*',
//  except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'

