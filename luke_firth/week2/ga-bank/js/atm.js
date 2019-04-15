console.log('running');


$(function(){
$('body').css({'background-color':'#E3E3E3'});
$('#checking-balance').css({'background-color':'#ff0029'}) //initial 0 balance state
$('#savings-balance').css({'background-color':'#ff0029'})  //initial 0 balance state

let checkBalance = 0;   //checking account numerical balance
let saveBalance = 0;    //saving account numerical balance
let amountInput = null; //input letiable for adding to total balance

//checking balance
$('#checking-amount').keyup(function(a){  //logging the input
  amountInput = parseInt(a.target.value)  //storing the input in a variable
});
$('#checking-deposit').click(function(){        //store currrent input on click
  checkBalance += amountInput;
$('#checking-amount').val('');                  //adding the input to the checkBalance
$('#checking-balance').html(`$${checkBalance}`)                                             //updating the display screen with balance
if (checkBalance === 0){                                          //if balance === 0 display red
  $('#checking-balance').css({'background-color':'#ff0029'})
}else{                                          //if not then normal display
    $('#checking-balance').css({'background-color':'#E3E3E3'})
}
});

//withdraw checking funds
$('#checking-withdraw').click(function(){
  checkBalance -= amountInput;
  $('#checking-balance').html(`$${checkBalance}`)
  if(checkBalance === 0){
  console.log(checkBalance);
  $('#checking-balance').css({'background-color':'#ff0029'})
  }                                            //updating the display screen with balance
  if (checkBalance < 0){                        //if balance === 0 display red
    alert('insufficient funds')
    checkBalance += amountInput;
      $('#checking-balance').html(`$${checkBalance}`)
  }
});


//saving balance
$('#savings-amount').keyup(function(a){          //same as above but for
  amountInput = parseInt(a.target.value)         //savings account
});
$('#savings-deposit').click(function(){
  saveBalance += amountInput;
$('#savings-amount').val('');
$('#savings-balance').html(`$${saveBalance}`)
if (saveBalance > 0){
$('#savings-balance').css({'background-color':'#E3E3E3'})
}
});

$('#savings-withdraw').click(function(){
  saveBalance -= amountInput;
  $('#savings-balance').html(`$${saveBalance}`)
  if(saveBalance === 0){
  console.log(saveBalance);
  $('#savings-balance').css({'background-color':'#ff0029'})
  }                                            //updating the display screen with balance
  if (saveBalance < 0){                        //if balance === 0 display red
    alert('insufficient funds')
    saveBalance += amountInput;
      $('#savings-balance').html(`$${saveBalance}`)
  }
});


//cat animations
const img = document.getElementsByTagName('img')[1];
img.style.position = 'absolute';
img.style.top = '-1400px';
const catsFalling = function() {
  let oldTop = parseInt(img.style.top);
  let newTop = oldTop + 1;
  img.style.top = newTop + 'px';
  //console.log(img.style.top);
  if(img.style.top === '780px'){
    img.style.top = '-760px'
  }
};
window.setInterval(catsFalling, 3);

const img2 = document.getElementsByTagName('img')[3];
img2.style.position = 'absolute';
img2.style.top = '-760px';
const catsRising = function() {
  let oldTop2 = parseInt(img2.style.top);
  let newTop2 = oldTop2 - 1;
  img2.style.top = newTop2 + 'px';
  if(img2.style.top === '-780px'){
    img2.style.top = '760px'
  }
};
window.setInterval(catsRising, 3);


/*          //failed JQuery attempt
const $img = $('img').eq(1);
$img.css({'position':'absolute'});
$img.css({'top':'-1400px'});
$img.animate(function(){
  let $start = parseInt($img.css('top'));
  let $increment = $start + 1;
  $img.css('top') = $increment + 'px';
});
window.setInterval($img, 3);
*/
});
