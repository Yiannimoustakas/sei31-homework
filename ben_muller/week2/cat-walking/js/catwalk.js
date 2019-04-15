const cat = document.getElementsByTagName('img')[0];
cat.style.left = 0;

const catWalkRight = function( ) {
  let oldPos = parseInt(cat.style.left); 
  let newPos = oldPos + 7;
  cat.style.left = newPos + 'px';
  

  if ( parseInt(cat.style.left) > window.innerWidth ){
    clearInterval( walking )
    cat.className = 'walkingleft'
    walking = window.setInterval(catWalkleft, 50)
  };  
    
  if ( parseInt(cat.style.left) === 21 || parseInt(cat.style.left) === 700 ){
  
    clearInterval( walking );
    cat.className = 'rotating'
    walking = window.setInterval(catWalkRight, 50);
  };
  
  if ( parseInt(cat.style.left) === 154){
    cat.className = ''
  };
};

const catWalkleft = function( ){
  let oldPos = parseInt(cat.style.left);
  let newPos = oldPos - 7;
  cat.style.left = newPos + 'px';
  
  if (parseInt(cat.style.left) === 0){
    clearInterval( walking )
    cat.className = '';
    walking = window.setInterval(catWalkRight, 50);
  };
};

//////////////////////////////////////////
let walking = window.setInterval(catWalkRight, 50);
//////////////////////////////////////////

///lion king
const simba = document.getElementsByClassName('simba')[0]
simba.style.left = 0;

const simbaWalkRight = function( ) {
  let oldPos = parseInt(simba.style.left); 
  let newPos = oldPos + 8;
  simba.style.left = newPos + 'px';

  if ( parseInt(simba.style.left) > window.innerWidth ){
    clearInterval( simbaWalking )
    simba.className = 'simbaleft'
    simba.src = 'images/oldsimba2.gif'
    simbaWalking = window.setInterval(simbaWalkleft, 70)
  };  
  
};

const simbaWalkleft = function( ){
  let oldPos = parseInt(simba.style.left);
  let newPos = oldPos - 20;
  simba.style.left = newPos + 'px';
  
  if (parseInt(simba.style.left) <= 0){
    clearInterval( simbaWalking )
    simba.className = 'simba';
    simba.src = 'images/simba.gif'
    console.log(simba.src)
    simbaWalking = window.setInterval(simbaWalkRight, 50);
  };
};
//////////////////////////////////////////
let simbaWalking = window.setInterval(simbaWalkRight, 50)
////////////////////////////////////////////

///fat man//////////
const fatty = document.getElementsByClassName('fat')[0]
fatty.style.left = 0;
fatty.style.top = '500px';
let direction = 'up'

const fatRightUp = function( ) {
  let oldPos = parseInt(fatty.style.left); 
  let newPos = oldPos + 6;
  fatty.style.left = newPos + 'px';
  
  
  let oldHeight = parseInt(fatty.style.top)
  direction = 'up'
  let newHeight = oldHeight - 20
  fatty.style.top = newHeight + 'px';

  if ( parseInt(fatty.style.top) <= 0 ){
    clearInterval( fattyRolling )
    let audio = new Audio('images/boing.mp3');
    audio.play();
    fattyRolling = window.setInterval(fatRightDown, 50)
  };  
  
  if (parseInt(fatty.style.left) >= window.innerWidth ){
    clearInterval( fattyRolling )
    fatty.className = 'fat-left'
    if (direction === 'down'){
      fattyRolling = window.setInterval(fatLeftDown, 50)
    } else {
      fattyRolling = window.setInterval(fatLeftUp, 50)
    };
  };
    
  };


const fatRightDown = function( ) {
  let oldPos = parseInt(fatty.style.left); 
  let newPos = oldPos + 6;
  fatty.style.left = newPos + 'px';
  
  let oldHeight = parseInt(fatty.style.top)
  let newHeight = oldHeight + 20
  direction = 'down'
  fatty.style.top = newHeight + 'px';
  
  if ( parseInt(fatty.style.top)>= window.innerHeight){
    clearInterval( fattyRolling );
    
  }

  if ( parseInt(fatty.style.top) >= window.innerHeight ){
    clearInterval( fattyRolling );
    fattyRolling = window.setInterval(fatRightUp, 50)
   };  
   
   if (parseInt(fatty.style.left) >= window.innerWidth ){
     clearInterval( fattyRolling )
     fatty.className = 'fat-left'
     if (direction === 'down'){
       fattyRolling = window.setInterval(fatLeftDown, 50)
     } else {
       fattyRolling = window.setInterval(fatLeftUp, 50)
     };
   };
};
// 
const fatLeftDown = function(  ) {
  let oldPos = parseInt(fatty.style.left); 
  let newPos = oldPos - 6;
  fatty.style.left = newPos + 'px';

  let oldHeight = parseInt(fatty.style.top)
  let newHeight = oldHeight + 20
  direction = 'down'
  fatty.style.top = newHeight + 'px';
  
  if ( parseInt(fatty.style.top) >= window.innerHeight ){
    clearInterval( fattyRolling );
    fattyRolling = window.setInterval(fatLeftUp, 50)
   };  
   
   if (parseInt(fatty.style.left) <= 0 ){
     clearInterval( fattyRolling )
     fatty.className = 'fat'
     if (direction === 'down'){
       fattyRolling = window.setInterval(fatRightDown, 50)
     } else {
       fattyRolling = window.setInterval(fatRightUp, 50)
     }; 
   };
 };


const fatLeftUp = function(  ) {
  let oldPos = parseInt(fatty.style.left); 
  let newPos = oldPos - 6;
  fatty.style.left = newPos + 'px';

  let oldHeight = parseInt(fatty.style.top)
  let newHeight = oldHeight - 20
  direction = 'up'
  fatty.style.top = newHeight + 'px';
  
  if ( parseInt(fatty.style.top) <= 0 ){
    clearInterval( fattyRolling );
    fattyRolling = window.setInterval(fatLeftDown, 50)
   };  
   
   if (parseInt(fatty.style.left) <= 0 ){
     clearInterval( fattyRolling )
     fatty.className = 'fat'
     if (direction === 'down'){
       fattyRolling = window.setInterval(fatRightDown, 50)
     } else {
       fattyRolling = window.setInterval(fatRightUp, 50)
     }; 
   }; 
   
};
//////////////////////////////////////////
let fattyRolling = window.setInterval(fatRightUp, 50);
