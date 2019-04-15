const sergeSays = function(input){
  // if(input === "" || input === null || input === undefined){
  //   return "fine, be that way";
  // }
  // OR
  if (!input){
    return "fine, be that way";
  }

  // if the input ends with a question mark
  if (input.endsWith("?")){
    return "sure."
  } else if (input === input.toUpperCase()){ // if the input is the same as the input in all uppercase letters
    return "Woah, chill out!"
  }

  return "Whatever."
}

console.log(sergeSays(undefined));
console.log(sergeSays(""));
console.log(sergeSays("Hello?"));
console.log(sergeSays("HELLO?"));
console.log(sergeSays("Hello."));
console.log(sergeSays("HELLO."));
