const body = document.body;
body.style.backgroundColor = 'white';

const img = document.getElementsByTagName('img')[0];
const rudd = document.getElementsByTagName('img')[1];

img.style.top = '200px';
img.style.left = '0px';
img.style.right = '-1060px';
rudd.style.visibility = 'hidden';
rudd.style.left = '500px';
rudd.style.top = '100px';

const catWalk = function() {
let lOrigin = parseInt(img.style.left);
let lDirection = lOrigin + 1;
img.style.left = lDirection + 'px';
console.log(img.style.left);
if (img.style.left === '1060px'){
img.style.left = '';
img.style.transform = 'scaleX(-1)';
rCatWalk();
}
if (img.style.right === '1060px'){
  img.style.left = '0px';
  img.style.right = '-1060px';
  img.style.transform = 'none';

}
if (img.style.left === '200px'){
  rudd.style.visibility = 'visible';
  rudd.style.width = '30%';
  img.style.visibility = 'hidden';
}
if (img.style.left === '800px'){
  rudd.style.visibility = 'hidden';
  img.style.visibility = 'visible';
}
};

const rCatWalk = function() {
let rOrigin = parseInt(img.style.right);
let rDirection = rOrigin + 1;
img.style.right = rDirection + 'px';
console.log(img.style.right);

};
window.setInterval(catWalk, 25);
window.setInterval(rCatWalk, 25);
