const img = document.getElementsByTagName('img')[0];
const img2 = document.getElementsByTagName('img')[1];
const img3 = document.getElementsByTagName('img')[2];
const img4 = document.getElementsByTagName('img')[3];
const img5 = document.getElementsByTagName('img')[4];
img.style.left = '0px';
img2.style.left = '0px';
img3.style.left = '800px';
img2.style.top = '0px';
img4.style.top = '500px';
img4.style.left = '0px';
img2.style.width = '-200px';
img2.style.visibility = 'hidden';
img3.style.visibility = 'hidden';
img4.style.visibility = 'hidden';
img5.style.visibility = 'hidden';
img3.style.width = '400px';
img3.style.height = '400px';

//img.style.webkitTransform scaleX(-1) to flip an image
//img.style.transform scaleX(-1) to flip an image

// const bonusOne = function () {
//   var currentLeft = parseInt(img.style.left);
//   img.style.left = (currentLeft + 10) + 'px';
//   if (currentLeft > (window.innerWidth-img.width)) {
//     img.style.left = '0px';
//     clearInterval(timerID);
//   }
// }
// const timerID = window.setInterval(bonusOne, 50);

var walkForwards = true;
var counter = [];

const catWalk = function () {
  var currentLeft = parseInt(img.style.left);

  if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (currentLeft <= 0)) {
    walkForwards = true;
  }

  if (walkForwards) {
    img.style.webkitTransform  = "scaleX(1)";
    img.style.transform  = "scaleX(1)";
    img.style.left = (currentLeft + 10) + 'px';
    counter++;
  } else {
    img.style.webkitTransform = "scaleX(-1)";
    img.style.transform  = "scaleX(-1)";
    img.style.left = (currentLeft - 10) + 'px';
    counter++;
    console.log( counter );
  }

  if (counter >= 1000) {
    clearInterval( timerID );
    window.setInterval(catBig, 10000);
    img2.style.visibility = "visible";
    // img3.style.visibility = "visible";
    img4.style.visibility = "visible";
    // img5.style.visibility = "visible";
    img3.style.left = "1100px"
    window.setInterval(catZoom, 20)

  }

}

const catBig = function () {
  img2.setAttribute('width', img2.width+2);

  if (img2.width>1440) {
  img2.setAttribute('width', img2.width=1440);
}
};

const catZoom = function () {
  var fourLeft = parseInt(img4.style.left);

  if (walkForwards && (fourLeft > (window.innerWidth-img.width))) {
    walkForwards = false;
  }
  if (!walkForwards && (fourLeft <= 0)) {
    walkForwards = true;
  }

  if (walkForwards) {
    img4.style.webkitTransform  = "scaleX(1)";
    img4.style.transform  = "scaleX(1)";
    img4.style.left = (fourLeft + 10) + 'px';
  } else {
    img4.style.webkitTransform = "scaleX(-1)";
    img4.style.transform  = "scaleX(-1)";
    img4.style.left = (fourLeft - 10) + 'px';
  }
};

const timerID = window.setInterval(catWalk, 10);
const stopBig = window.setInterval(catBig, 20);
const stopZoom = window.setInterval(catZoom, 20);
