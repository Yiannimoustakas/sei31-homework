// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen,
// forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds,
// and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.

const cat = document.getElementById('cat');
cat.style.position = 'absolute';
cat.style.left = '0px';
const watchCatWalk = function() {
  var oldLeft = parseInt(cat.style.left);
  var newLeft = oldLeft + 1;
  cat.style.left = newLeft + 'px';
  if (newLeft === 2000){
    cat.style.left = '-200px';
  }
};
window.setInterval(watchCatWalk, 5);

const cat1 = document.getElementById('cat1');
cat1.style.position = 'absolute';
cat1.style.left = '0px';
const watchCat1Walk = function() {
  var oldLeft = parseInt(cat1.style.left);
  var newLeft = oldLeft + 1;
  cat1.style.left = newLeft + 'px';
  if (newLeft === 2000){
    cat1.style.left = '-200px';

  }
};
window.setInterval(watchCat1Walk, 10);



//

var goatWalk = document.getElementById('goat');
goatWalk.style.position= 'absolute';
goatWalk.style.left = '0px';
goatWalk.style.bottom = '0px';

var moveLeft = +10;

var move = function() {

var x = window.innerWidth;
var y = window.innerHeight;

  goatWalk.style.left = parseInt(goatWalk.style.left) + moveLeft+'px';
  // console.log(parseInt(catWalk.style.left));
  if (parseInt(goatWalk.style.left) <= 0) {
    moveLeft = +10;
    goatWalk.style.webkitTransform = 'scaleX(-1)';
  } else if (parseInt(goatWalk.style.left) >= (x-270)) {
  	goatWalk.style.webkitTransform = 'scaleX(+1)';
    moveLeft = -10;
  }
};
var catPace = 0;
var walkStart = setInterval(move, 10);

//Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.


const homer = document.getElementById('homer');
homer.style.position = 'absolute';
homer.style.left = '0px';
const watchHomerRun = function() {
  var oldLeft = parseInt(homer.style.left);
  var newLeft = oldLeft + 5;
  homer.style.left = newLeft + 'px';
  if (newLeft === 2000){
    homer.style.left = '-200px';

  }
};
window.setInterval(watchHomerRun, 10);
