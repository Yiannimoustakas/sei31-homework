console.log('Up and running');


/*______     ______     __    __        ______     ______     ______     ______     ______     __  __     ______     __   __
/\  ___\   /\  __ \   /\ "-./  \      /\  ___\   /\  ___\   /\  __ \   /\  == \   /\  __ \   /\ \/\ \   /\  == \   /\ "-.\ \
\ \___  \  \ \  __ \  \ \ \-./\ \     \ \___  \  \ \  __\   \ \  __ \  \ \  __<   \ \ \/\ \  \ \ \_\ \  \ \  __<   \ \ \-.  \
\/\_____\  \ \_\ \_\  \ \_\ \ \_\     \/\_____\  \ \_____\  \ \_\ \_\  \ \_____\  \ \_____\  \ \_____\  \ \_\ \_\  \ \_\\"\_\
 \/_____/   \/_/\/_/   \/_/  \/_/      \/_____/   \/_____/   \/_/\/_/   \/_____/   \/_____/   \/_____/   \/_/ /_/   \/_/ \/*/

//Walk Right
var img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute';
img.style.left = '20px';



var watchKittyForward = function() {
  const oldRight = parseInt(img.style.left);
  var newRight = oldRight + 2.25
  if (newRight < 1000) {
    img.style.left = newRight + 'px';
  } else {
    clearInterval(timer);
    console.log(timer)
    timer = window.setInterval(watchKittyBack, 25);
  }
};

var watchKittyBack = function() {
  var oldleft = parseInt(img.style.left);
  var newleft = oldleft - 2.25
  if (newleft > 20) {
    img.style.left = newleft + 'px';
  } else {
    clearInterval(timer);
    console.log(timer)
    timer = window.setInterval(watchKittyForward, 25);
  }
};

let timer = window.setInterval(watchKittyForward, 25);
console.log(timer)




/*
 var img = document.getElementsByTagName('img')[0];
 img.style.position = 'absolute';
 img.style.left = '50px';

 var watchKittyForward = function() {
   var oldRight = parseInt(img.style.left);
   var newRight = oldRight + 2.25
   img.style.left = newRight + 'px';
   if (newRight > 400){
     clearInterval(leftTimer);
     console.log("backwards")
     watchKittyBack()

   }
 };
 const leftTimer = window.setInterval(watchKittyForward, 25);

 var watchKittyBack = function() {
   var oldleft = parseInt(img.style.left);
   var newleft = oldleft - 2.25
   img.style.left = newleft + 'px';
   if (newleft < 3){
     console.log("forwards")
     clearInterval(rightTimeer);
     watchKittyForward()
   }
 };
 const rightTimeer = window.setInterval(watchKittyBack, 25);
*/








//Walk left
