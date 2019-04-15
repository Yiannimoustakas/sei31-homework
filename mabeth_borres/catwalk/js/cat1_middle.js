let movePixels = 10;
let delayMs = 50;
let catTimer = null;

let img = document.getElementsByTagName('img')[0];
	
/////// VERSION 1

const sleep = function(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};



const handleDiscoCat = function() {
	window.clearInterval(catTimer);
	img.src = "https://media.giphy.com/media/GmXMpIy7yhlD2/giphy.gif";
	document.body.style.backgroundImage = "url('https://media0.giphy.com/media/qvvONm8Y6RfiM/source.gif')";
	document.body.style.backgroundSize = "cover";
	
	//sleep(2000);
	
	//img.src = "https://media.giphy.com/media/51W8vnpWlJopfiS0FU/giphy.gif";
	//catTimer = window.setInterval(catWalk1, delayMs);
	
	setTimeout(function(){ img.src = "https://media.giphy.com/media/51W8vnpWlJopfiS0FU/giphy.gif"; document.body.style.backgroundImage = null; }, 10000);
	
};

const catWalk1 = function() {
	//let img = document.getElementsByTagName('img')[0];
	let currentLeft = parseInt(img.style.left);
	img.style.left = (currentLeft + movePixels) + 'px';
	
	const screenWidth = window.innerWidth-img.width;
	let middle = Math.floor(screenWidth/2);
	const rem = middle % movePixels;
	middle = middle - rem;
	
	//test middle
	//https://media.giphy.com/media/GmXMpIy7yhlD2/giphy.gif
	//https://media0.giphy.com/media/qvvONm8Y6RfiM/source.gif
	if (currentLeft === middle) {
		//img.src = "https://media.giphy.com/media/GmXMpIy7yhlD2/giphy.gif";
		handleDiscoCat();
		
		//img.src = "https://media.giphy.com/media/51W8vnpWlJopfiS0FU/giphy.gif";
		catTimer = window.setInterval(catWalk1, delayMs);
	}
	
	if (currentLeft > screenWidth) {
		img.style.left = '0px';
	}
 //console.log("left==" + currentLeft + "...." + (window.innerWidth-img.width) );
 //console.log(img.style.right);
};

const startCatWalk1 = function() {
	catTimer = window.setInterval(catWalk1, delayMs);
	//enable stop
	document.getElementById("stop1-button").disabled = false;
	//enable speed
	//document.getElementById("speed1-button").disabled = false;

	//disable start
	document.getElementById("start1-button").disabled = true;
};

const speedUp1 = function() {
	window.clearInterval(catTimer);
	catTimer = window.setInterval(catWalk1, 0);

	//enable stop
	document.getElementById("stop1-button").disabled = false;
};

const stopWalk1 = function () {
	window.clearInterval(catTimer);
	//enable start
	document.getElementById("start1-button").disabled = false;
	//document.getElementById("speed1-button").disabled = false;

	//disable stop
	document.getElementById("stop1-button").disabled = true;
}

document.getElementById('start1-button').addEventListener('click', startCatWalk1);
document.getElementById('stop1-button').addEventListener('click', stopWalk1);
//document.getElementById('speed1-button').addEventListener('click', speedUp1);


////////////////////////////////////////

