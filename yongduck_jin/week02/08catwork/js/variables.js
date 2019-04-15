
// Create a new Javascript file and link to it with a script tag at the bottom.  /done 

// Create a variable to store a reference to the img. /done 

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens. /done

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started,
//  by changing the "left" style property.  //done



// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah! //done

// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). 


// So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead.
//  They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, 
// and then replace the img with the original image and have it continue the walk.

// Bonus #4: Pretty much go nuts or whatever.



// let oldTop = parseInt(img.style.top);  
// let newTop = oldTop + 10;  
// img.style.top = newTop + 'px';

var img = document.getElementsByTagName('img')[0]
console.log(img);

//if you really want to measure end of right end of screen, 
// styl.right == size of container - size of image. 
//style.left = 0, style.right = 0, and -1 for right, and +1 for left. 
img.style.left = '0px'; 
console.log(img.style.right)


const catWalk = function (){
  oldImg = parseInt(img.style.left) //what about px ? 
  newImg = oldImg + 20;
  img.style.left = newImg + 'px'
  if(newImg > 800){
    img.style.left='0px'
    
  }

  
 
}

window.setInterval(catWalk, 50);

