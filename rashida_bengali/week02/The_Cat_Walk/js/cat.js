console.log('cat walk');

const tomImage = document.getElementById('tom');
const tomWidth = tomImage.width;
const jerryImage = document.getElementById('jerry');
const jerryWidth = jerryImage.width;

tomImage.style.position = 'absolute';
tomImage.style.left = '0px';
jerryImage.style.position = 'absolute';
jerryImage.style.left = '100px';
jerryImage.style.top = '200px';

let tomRun = true;
let jerryRun = true;
let dance = true;

const makeTomDanceForFiveSeconds = function() {
  jerryImage.style.display = 'none';
  tomImage.src = 'images/tom_jerry_dancing.gif';
  tomRun = false;
  jerryRun = false;

  setTimeout(function() {
    tomImage.src = 'images/tom_running.gif';
    jerryImage.style.display = 'block';
    tomRun = true;
    jerryRun = true;
  }, 4000);
};

const catWalkTwo = function () {
  if (tomRun === false) return;

  const oldLeft = parseInt(tomImage.style.left);
  const newLeft = oldLeft - 10;
  tomImage.style.left = newLeft + 'px';

  if (dance && (newLeft <= ((window.innerWidth / 2) - (tomWidth / 2))))
  {
    makeTomDanceForFiveSeconds();
    dance = false;
  }

  if (newLeft < 0) {
    clearInterval(timerTwo);
    tomImage.className ='flip-back';
    timer = window.setInterval(catWalk, 50);
    dance = true;
  }
};

const catWalk = function () {
  if (tomRun === false) return;

  const oldLeft = parseInt(tomImage.style.left);
  const newLeft = oldLeft + 10;
  tomImage.style.left = newLeft + 'px';

  if (dance && (newLeft >= ((window.innerWidth / 2) - (tomWidth / 2))))
  {
    makeTomDanceForFiveSeconds();
    dance = false;
  }

  if (newLeft >= (window.innerWidth - tomWidth)) {
    clearInterval(timer);
    tomImage.className ='flip';
    timerTwo = window.setInterval(catWalkTwo, 50);
    dance = true;
  }
};

let timer = window.setInterval(catWalk, 50);
let timerTwo;

const sleep = function(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

const jerryWalkTwo = function () {
  if (!jerryRun) return;

  const oldLeft = parseInt(jerryImage.style.left);
  const newLeft = oldLeft - 10;
  jerryImage.style.left = newLeft + 'px';
  if (newLeft < (jerryWidth / 3)) {
    clearInterval(durationTwo);
    jerryImage.className ='flip-back';
    duration = window.setInterval(jerryWalk, 50);
  }
};

const jerryWalk = function () {
  if (!jerryRun) return;

  const oldLeft = parseInt(jerryImage.style.left);
  const newLeft = oldLeft + 10;
  jerryImage.style.left = newLeft + 'px';
  if (newLeft > (window.innerWidth - jerryWidth - (tomWidth / 2))) {
    clearInterval(duration);
    jerryImage.className ='flip';
    durationTwo = window.setInterval(jerryWalkTwo, 50);
  }
};

let duration = window.setInterval(jerryWalk, 50);
let durationTwo;
let stop;

const dog = document.getElementsByTagName('img')[2];
const lost = document.getElementsByTagName('img')[3];

dog.style.position = 'absolute';
dog.style.right = '0px';
dog.style.top = '350px';
lost.style.right = '300px';
lost.style.top = '300px';

const cold = document.getElementsByTagName('img')[4];

cold.style.position = 'absolute';
cold.style.left = '0px';
cold.style.bottom = '10px';

// const makeImageBigger = function() {
//   cold.setAttribute('width', cold.width+10);
//   // if (cold.width > 500) {
//   //   clearInterval(stop);
//   //   image.width ='300px';
//   // }
// };
// let stop = setInterval(makeImageBigger, 50);
