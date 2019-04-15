// //////////CATS///////////////////////////////////////////////////
// const blackCat = document.getElementById("blackCat");
// blackCat.style.left = "0px";
// blackCat.style.right = "0px";
//
// const windowWidth = window.innerWidth;
//
//
// const moveBlackCatRight = () => {
//   console.log("move right");
//   let startPosition = parseInt(blackCat.style.left);
//   let moveBlackCatRight = startPosition + 10;
//   blackCat.style.left = moveBlackCatRight + "px";
//   if (blackCat.style.left === "960px"){
//     blackCat.className = 'flipCat';
//     clearInterval( timerIDBlackCat );
//     timerIDBlackCat = window.setInterval(moveBlackCatLeft, 10);
//   }
// };
//
// const moveBlackCatLeft = () => {
//   console.log("move left");
//   let startPosition = parseInt(blackCat.style.left);
//   let moveBlackCatRight = startPosition - 10;
//   blackCat.style.left = moveBlackCatRight + "px";
//   if (parseInt(blackCat.style.left) <= 0){
//     blackCat.className = '';
//     clearInterval( timerIDBlackCat );
//     console.log("TEST1");
//     timerIDBlackCat = window.setInterval(moveBlackCatRight, 10);
//     console.log("TEST2");
//   }
// };
//
// let timerIDBlackCat = window.setInterval(moveBlackCatRight, 10);


const blackCat = document.getElementById("blackCat");
blackCat.style.left = "0px";
blackCat.style.right = "0px";

const windowWidth = window.innerWidth;


const moveBlackCatRight = () => {

  if (blackCat.style.left === "960px") {
    blackCat.className = 'flipCat';
    clearInterval(timerIDBlackCat);
    timerIDBlackCat = window.setInterval(moveBlackCatLeft, 10);
  } else {
    console.log("move right");
    let startPosition = parseInt(blackCat.style.left);
    let moveBlackCatRight = startPosition + 3;
    blackCat.style.left = moveBlackCatRight + "px";
  }
};

const moveBlackCatLeft = () => {

  if (parseInt(blackCat.style.left[0]) <= 0) {
    blackCat.className = '';
    clearInterval(timerIDBlackCat);
    console.log("TEST1");
    timerIDBlackCat = window.setInterval(moveBlackCatRight, 10);
    console.log("TEST2");
  } else {
    console.log("move left");
    let startPosition = parseInt(blackCat.style.left);
    let moveBlackCatRight = startPosition - 3;
    blackCat.style.left = moveBlackCatRight + "px";
  }
};

let timerIDBlackCat = window.setInterval(moveBlackCatRight, 10);







// const greyCat = document.getElementById("greyCat");
// greyCat.style.left = "0px";
// greyCat.style.top = "0px";



// const moveGreyCatDown = () => {
//   let startPositionTop = parseInt(greyCat.style.top);
//   let moveDown = startPositionTop + 1;
//   let startPositionLeft = parseInt(greyCat.style.left);
//   let moveRight = startPositionLeft + 2;
//   greyCat.style.top = moveDown + "px";
//   greyCat.style.left = moveRight + "px";
//   if (greyCat.style.left === "960px"){
//     greyCat.className = 'flipCat';
//     clearInterval( timerIDGreyCat );
//   }
// };


///////////////////////////////////////////////////////////////////
// clearInterval( timerIDBlackCat );
//////////START TIMERS/////////////////////////////////////////////

// const timerIDBlackCat = window.setInterval(moveBlackCatRight, 1);
// const timerIDGreyCat = window.setInterval(moveGreyCatDown, 1);
