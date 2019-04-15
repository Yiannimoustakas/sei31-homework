const img = document.getElementsByTagName('img')[0];
img.style.position = 'absolute'
img.style.left = 0;
var windowWidth = window.innerWidth - img.width;

const catWalk = function() {

	if ( parseInt(img.style.left) > windowWidth ) {
	  window.clearInterval(catRunner);
		catRunner = window.setInterval(walkBack, 50);

	} else {
		console.log("catWalk is running");
		img.style.transform = 'scaleX(1)'
		let oldPosition = parseInt(img.style.left);
  	let newPosition = oldPosition + 10;
  	img.style.left = newPosition + 'px';
	}
};

let catRunner = window.setInterval(catWalk, 50);

const walkBack = function () {

	if ( parseInt(img.style.left) < 0 ) {
		window.clearInterval(catRunner);
		catRunner = window.setInterval(catWalk, 50);
	}	else {
		console.log("walkBack is running");
		img.style.transform = 'scaleX(-1)'
		let oldPosition = parseInt(img.style.left);
		let newPosition = oldPosition - 10;
		img.style.left = newPosition + 'px';
	}
};
