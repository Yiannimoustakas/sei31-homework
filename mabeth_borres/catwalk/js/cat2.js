let movePixels = 10;
let delayMs = 50;
let catTimer = null;

//// VERSION 2
const catWalk2 = function(){
	let catImg = document.getElementsByTagName('img')[0];

	let widCompare = parseInt(window.innerWidth) - parseInt(catImg.width);
 
	if (parseInt(catImg.style.left.replace("px","")) === parseInt(widCompare) || check == false) {
		if(catImg.style.left.replace("px","") > 0){
			check = false;
			moveleft(catImg);
		} else if (catImg.style.left.replace("px","") == 0) {
			check = true;
        }
	} else if (catImg.style.left.replace("px","") < (window.innerWidth) && check == true) {
		moveRight(catImg);
	} 
};


const moveRight = function(catImg) {
	catImg.style.transform = 'rotateY(360deg)';
	
	if(catImg.style.left != ""){
		let temp = catImg.style.left.replace("px","");
		temp = parseInt(temp);
		catImg.style.left = (temp+movePixels) + "px";
	} else {
		catImg.style.left = "1px";
	}
};


const moveleft = function (catImg) {
	catImg.style.transform = 'rotateY(180deg)';
	
	if(catImg.style.left != ""){
		let temp = catImg.style.left.replace("px","");
		temp = parseInt(temp);
		catImg.style.left = (temp-movePixels) + "px";
	} else {
	   catImg.style.left = "1px";
	}
};

var check = true;
//catTimer = window.setInterval(catWalk2,delayMs);

const startCatWalk2 = function() {
 catTimer = window.setInterval(catWalk2, delayMs);
 //enable stop
 document.getElementById("stop2-button").disabled = false;
 //enable speed
 //document.getElementById("speed2-button").disabled = false;

 //disable start
 document.getElementById("start2-button").disabled = true;
};

const speedUp2 = function() {
 window.clearInterval(catTimer);
 catTimer = window.setInterval(catWalk2, 0);

 //enable stop
 document.getElementById("stop2-button").disabled = false;

};

const stopWalk2 = function () {
 window.clearInterval(catTimer);
 //enable start
 document.getElementById("start2-button").disabled = false;
 //document.getElementById("speed2-button").disabled = false;

 //disable stop
 document.getElementById("stop2-button").disabled = true;
}

document.getElementById('start2-button').addEventListener('click', startCatWalk2);
document.getElementById('stop2-button').addEventListener('click', stopWalk2);
//document.getElementById('speed2-button').addEventListener('click', speedUp2);




