const walkCatImg = document.getElementById('main-cat');

const streetView1 = document.getElementById('street-view1');
const streetView2 = document.getElementById('street-view2');
streetView1.style.transform = 'scale(3.3, 3) translateY(95px) translateX(145px)';
streetView2.style.transform = 'scale(3.3, 3) translateY(95px) translateX(595px)';

const catSway = document.getElementById('cat-sway');
catSway.style.transform = 'scale(0.6, 0.6) translateY(480px) translateX(4000px)';

const danceCarlton = document.getElementById('dance-carlton');
danceCarlton.style.transform = 'scale(1, 1) translateY(610px) translateX(3000px)';

const dancingDuet = document.getElementById('dancing-duet');
dancingDuet.style.transform = 'scale(0.4, 0.4) translateY(-250px) translateX(9000px)';

const dancingHotdog = document.getElementById('dancing-hotdog');
dancingHotdog.style.transform = 'scale(1.3, 1.3) translateY(420px) translateX(3300px)';

const penguinMopping = document.getElementById('penguin-mopping');
penguinMopping.style.transform = 'scale(0.5, 0.5) translateY(500px) translateX(6400px)';

const sketchedWalking = document.getElementById('sketched-walking');
sketchedWalking.style.transform = 'scale(1, 1) translateY(400px) translateX(-500px)';
sketchedWalking.style.display = 'none';


let start = null;

const step = function (timestamp) {
  if (!start) start = timestamp;
  const progress = timestamp - start;
  if (progress < 6000) {
    catWalk(progress);
  }else if ( progress < 45000 ){
    requestAnimationFrame(buildStep);
    largeMoveGround(progress);
  }

  if( progress < 46000 ){
    window.requestAnimationFrame(step);
     hideOrNot(timestamp);
  }else{
    requestAnimationFrame(fly);
  }
}

const catWalk = function(progress){
  walkCatImg.style.transform = 'translate(' + progress / 9.6 + 'px, 400px)';
}

let buildStart = null;
const buildStep = function (timestamp) {
  if (!buildStart) buildStart = timestamp;
  const progress = timestamp - buildStart;
  const stepDis = 145 - (progress/28.8);
  const stepDis2 = 595 - (progress/28.8);
  streetView1.style.transform =  'scale(3.3, 3) translateY(95px) translateX(' + stepDis + 'px)';
  streetView2.style.transform =  'scale(3.3, 3) translateY(95px) translateX(' + stepDis2 + 'px)';
  if(stepDis2 < 145){
    buildStart = timestamp;
  }
}

const largeMoveGround = function(progress){

  const catSwayStepDis = 4000 - ((progress-6000)/5.76);
  catSway.style.transform = 'scale(0.6, 0.6) translateY(480px) translateX(' + catSwayStepDis + 'px)';

  const danceCarltonStepDis = 3000 - ((progress-6000)/9.6);
  danceCarlton.style.transform = 'scale(1, 1) translateY(610px) translateX(' + danceCarltonStepDis + 'px)';

  const dancingDuetStepDis = 9000 - ((progress-6000)/3.84);
  dancingDuet.style.transform = 'scale(0.4, 0.4) translateY(-250px) translateX(' + dancingDuetStepDis + 'px)';

  const dancingHotdogStepDis = 3300 - ((progress-6000)/12.48);
  dancingHotdog.style.transform = 'scale(1.3, 1.3) translateY(420px) translateX(' + dancingHotdogStepDis + 'px)';

  const penguinMoppingStepDis = 6400 - ((progress-6000)/4.8);
  penguinMopping.style.transform = 'scale(0.5, 0.5) translateY(500px) translateX(' + penguinMoppingStepDis + 'px)';

}



//const sketchedWalkingStepDis = 145 - ((progress-6000)/9.6);
//sketchedWalking.style.transform = 'scale(1, 1) translateY(400px) translateX(' + sketchedWalkingStepDis + 'px)';


const flyCatImg = document.getElementById('flying-cat');
flyCatImg.style.transform = 'scale(2, 2) translateY(230px) translateX(300px)';
flyCatImg.style.display = 'none';

const spaceImg = document.getElementById('space');
spaceImg.style.transform = 'translateY(0px) translateX(0px)';
spaceImg.style.display = 'none';
spaceImg.style.opacity = 0;

const spaceCat = document.getElementById('cat-space');
spaceCat.style.transform = 'scale(12, 12) translateY(70px) translateX(0px)';
spaceCat.style.display = 'none';

const nyanCat1 = document.getElementById('nyan-cat-1');
nyanCat1.style.transform = 'scale(1, 1) translateY(100px) translateX(-300px)';
nyanCat1.style.display = 'none';

const nyanCat2 = document.getElementById('nyan-cat-2');
nyanCat2.style.transform = 'scale(1, 1) translateY(100px) translateX(-300px)';
nyanCat2.style.display = 'none';

const nyanCat3 = document.getElementById('nyan-cat-3');
nyanCat3.style.transform = 'scale(1, 1) translateY(100px) translateX(-300px)';
nyanCat3.style.display = 'none';

const nyanCat4 = document.getElementById('nyan-cat-4');
nyanCat4.style.transform = 'scale(1, 1) translateY(100px) translateX(-300px)';
nyanCat4.style.display = 'none';

const nyanCat5 = document.getElementById('nyan-cat-5');
nyanCat5.style.transform = 'scale(1, 1) translateY(100px) translateX(-300px)';
nyanCat5.style.display = 'none';

const nyanCat6 = document.getElementById('nyan-cat-6');
nyanCat6.style.transform = 'scale(1, 1) translateY(100px) translateX(-300px)';
nyanCat6.style.display = 'none';

const nyanCat7 = document.getElementById('nyan-cat-7');
nyanCat7.style.transform = 'scale(1, 1) translateY(100px) translateX(-300px)';
nyanCat7.style.display = 'none';

const nyanCat8 = document.getElementById('nyan-cat-8');
nyanCat8.style.transform = 'scale(1, 1) translateY(100px) translateX(-300px)';
nyanCat8.style.display = 'none';

// y -150 750    x  -300 1500

let flyStart = null;
const fly = function (timestamp) {
  if (!flyStart) flyStart = timestamp;
  const flyProgress = timestamp - flyStart;
  if (flyProgress < 5000) {
    catFlyAway(flyProgress);
  }else if (flyProgress < 10000){
    console.log('fly2');
    catFlyBack(flyProgress);
    spaceBackground(flyProgress);
  }else if (flyProgress < 23800){
    console.log('fly3');
    catFlyRandomly(flyProgress);
    nyanCatsFly(flyProgress);
  }else if(flyProgress < 30800){
    console.log('fly4');
    fadeOut(flyProgress);
  }

  if(flyProgress < 30800){
    window.requestAnimationFrame(fly);
    hideOrNot(timestamp);
  }
}

const catFlyAway = function(flyProgress){
  flyCatImg.style.transform = `scale(2, 2) translateY(${230 - (flyProgress / 5)}px) translateX(${300 - (flyProgress / 5)}px)`;
}

const catFlyBack = function(flyProgress){
  flyCatImg.style.transform = `scale(2, 2) translateY(${100 * (5000/ (flyProgress - 5000))}px) translateX(${300 * (5000 / (flyProgress - 5000))}px)`;
}

const catFlyRandomly = function(flyProgress){
 flyCatImg.style.transform = `scale(${2 * Math.sin((flyProgress + 3800) * 0.001)}, ${2 * Math.sin((flyProgress + 3800) * 0.001)}) translateY(${100 * Math.sin((flyProgress + 3800) * 0.001)}px) translateX(${300 * Math.sin((flyProgress + 3800) * 0.001)}px)`;
}

let nyanStart = null;
const nyanCatsFly = function(flyProgress){
  if (!nyanStart) nyanStart = flyProgress;
  const nyanProgress = flyProgress - nyanStart;

  if(nyanProgress < 3500){
    nyanCat1.style.transform = `scale(1, 1) translateY(100px) translateX(${-300 + nyanProgress/ 2 }px)`;
  }
  if(nyanProgress > 1500 && nyanProgress < 5000){
    nyanCat2.style.transform = `scale(1, 1) translateY(200px) translateX(${-300 + (nyanProgress - 1500)/ 2 }px)`;
  }
  if(nyanProgress > 3000 && nyanProgress < 6500){
    nyanCat3.style.transform = `scale(1, 1) translateY(300px) translateX(${-300 + (nyanProgress - 3000)/ 2 }px)`;
  }
  if(nyanProgress > 4500 && nyanProgress < 8000){
    nyanCat4.style.transform = `scale(1, 1) translateY(400px) translateX(${-300 + (nyanProgress - 4500)/ 2 }px)`;
  }
  if(nyanProgress > 5500 && nyanProgress < 9000){
    nyanCat5.style.transform = `scale(1, 1) translateY(500px) translateX(${-300 + (nyanProgress - 5500)/ 2 }px)`;
  }
  if(nyanProgress > 6500 && nyanProgress < 10000){
    nyanCat6.style.transform = `scale(1, 1) translateY(600px) translateX(${-300 + (nyanProgress - 6500)/ 2 }px)`;
  }
  if(nyanProgress > 8000 && nyanProgress < 11500){
    nyanCat7.style.transform = `scale(1, 1) translateY(700px) translateX(${-300 + (nyanProgress - 8000)/ 2 }px)`;
  }
  if(nyanProgress > 9500 && nyanProgress < 13000){
    nyanCat8.style.transform = `scale(1, 1) translateY(50px) translateX(${-300 + (nyanProgress - 9500)/ 2 }px)`;
  }
}

const spaceBackground = function(flyProgress){

  spaceImg.style.opacity = 0 + ((flyProgress - 5000)/5000);
  streetView1.style.opacity =  1 - ((flyProgress - 5000)/5000);
  streetView2.style.opacity =  1 - ((flyProgress - 5000)/5000);
}

const fadeOut = function(flyProgress){
 flyCatImg.style.transform = `scale(${2 - (0.01 * (flyProgress - 23800))}, ${2 - (0.01 * (flyProgress - 23800))}) translateY(100px) translateX(300px)`;

  spaceImg.style.opacity = 1 - ((flyProgress - 23800)/7000);

  spaceCat.style.transform = `scale(${12 - (11 * (flyProgress - 23800)/7000)}, ${12- (11 * (flyProgress - 23800)/7000)}) translateY(${70}px) translateX(0px)`;
}

window.requestAnimationFrame(step);

let hideStart = null;
const hideOrNot = function(timestamp){
  if (!hideStart) hideStart = timestamp;
  const timePassed = timestamp - hideStart;


  if(timePassed > 45000){
    walkCatImg.style.display = 'none';
    flyCatImg.style.display = 'inline-block';
  }

  if(timePassed > 51000){
    spaceImg.style.display = 'inline-block';
    catSway.style.display = 'none';
    danceCarlton.style.display = 'none';
    penguinMopping.style.display = 'none';
    dancingDuet.style.display = 'none';
    dancingHotdog.style.display = 'none';
  }

  if(timePassed > 56000){
    spaceCat.style.display = 'inline-block';
    nyanCat1.style.display = 'inline-block';
    nyanCat2.style.display = 'inline-block';
    nyanCat3.style.display = 'inline-block';
    nyanCat4.style.display = 'inline-block';
    nyanCat5.style.display = 'inline-block';
    nyanCat6.style.display = 'inline-block';
    nyanCat7.style.display = 'inline-block';
    nyanCat8.style.display = 'inline-block';
  }

}
