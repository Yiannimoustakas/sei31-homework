// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//

const image = document.getElementsByTagName('img')[0];
const originalImage = image.src;
const dancingCat = 'http://animated.name/uploads/posts/2016-08/1471202361_604.gif';
const width = window.innerWidth -296;
const center = Math.ceil((width / 2) / 10 ) * 10;
let direction = "right";

// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//

image.style.left = '0px';

// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//

const makeDancingCat = function ()
{
  image.src = dancingCat;
}

const keepWalking = function() {
  image.src = originalImage;
  timerID = window.setInterval(catWalk, 50);
};

const changeImage = function () {
  clearInterval(timerID);
  makeDancingCat();
  window.setTimeout(keepWalking, 5000);
}

const catWalk = function () {
  let move = (direction === "right") ? 10 : -10;
  let oldLeft = parseInt(image.style.left);
  let newLeft = oldLeft + move;
  image.style.left = newLeft + 'px';

  if( newLeft == center )
  {
    changeImage();
  } else if( newLeft > width ) // When reaching the right edge
  {
    clearInterval(timerID);
    direction = "left";
    image.className = 'right-cat';
    timerID = window.setInterval(catWalk, 50);
  } else if( newLeft <= 0 ) //New change
  {
    clearInterval(timerID);
    direction = "right";
    image.className = 'left-cat';
    timerID = window.setInterval(catWalk, 50);
  }
}

let timerID = window.setInterval(catWalk, 50);
