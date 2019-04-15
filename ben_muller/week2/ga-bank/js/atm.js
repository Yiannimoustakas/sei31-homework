$(document).ready(function(){
  
  // Keep track of starting balances
  let checking = 999;
  let savings = 999;
  
  //cache vals
  let $checking = $('#checking-balance') //gets the balance
  let $savings = $('#savings-balance') //gets the balance
  let $checkingAmount = $('#checking-amount') //gets amount 
  let $savingsAmount = $('#savings-amount') // gets amount 
  
  // starting balances
  $checking.html(`$${checking}`); //initialises the balance to match the variable above
  $savings.html(`$${savings}`);

// checks to make sure a number has been entered, if so changes balances
  const depositChecking = function() {
    if (isNaN($checkingAmount.val())){
      errorMsg('Please Enter A Valid Ammount')
    } else {
      checking += parseInt($checkingAmount.val());
      $checking.html(`$${checking}`)
      $checkingAmount.val('').focus()
    }
  };
  
  $('#checking-deposit').on('click',depositChecking) //check deposit click
  
  // checks to make sure a number has been entered, if so changes balances
  const depositSavings = function() {
    if (isNaN($savingsAmount.val())){
      errorMsg('Please Enter A Valid Ammount')
    } else {
      savings += parseInt($savingsAmount.val());
      $savings.html(`$${savings}`)
      $savingsAmount.val('').focus()
    }
  };

  $('#savings-deposit').on('click',depositSavings); //savings deposit click
  
  
  //validates withdrawals and returns array of updated balances
  const withVal = function(mainBal, $mainElmnt, otherBal, $otherElmnt, withdrawal){ 
    if ( withdrawal.val() < mainBal ){
    mainBal -= withdrawal.val();
    $mainElmnt.html(`$${mainBal}`);
    return { "mainBal": mainBal, "otherBal":otherBal }
  
  } else {
    
    if ( withdrawal.val() > mainBal + otherBal ){
      errorMsg('Balance Exceeded, Try another withdrawal amount.')
    } else {
      
      otherBal += ( mainBal - withdrawal.val() )
      mainBal = 0;
      $mainElmnt.html(`$${mainBal}`)
      $otherElmnt.html(`$${otherBal}`)
      return { "mainBal": mainBal, "otherBal":otherBal }
      // return [mainBal, otherBal]
    };
  };
  };
  
  //checks for a num and if not changes balances
  const withdrawChecking = function(  ) {
    if (isNaN($checkingAmount.val())){
    errorMsg('Please Enter A Valid Ammount')
    } else {
      let account = withVal(checking, $checking, savings, $savings, $checkingAmount)
      checking = account['mainBal']
      savings = account['otherBal']
      
    };
  };

  $('#checking-withdraw').on('click', withdrawChecking);
  
  //checks for a num and if not changes balances
  const withdrawSavings = function(  ) {
    if (isNaN($savingsAmount.val())){
      errorMsg('Please Enter A Valid Ammount')
    } else {
      let account = withVal(savings, $savings, checking, $checking, $savingsAmount)
      savings = account['mainBal']
      checking = account['otherBal']      
    };
  };
    $('#savings-withdraw').on('click', withdrawSavings);

    
  //watches balances to see if the class needs to be changed   
  const makeRed = function(  ) {
    if ( savings === 0 ){
      $savings.addClass('zero')    
    } else { 
      $savings.removeClass('zero')             
    };
    
    if ( checking === 0 ){
      $checking.addClass('zero')
    } else { 
      $checking.removeClass('zero')   
    };
  };
  
  $('input').on('click',makeRed); // watches for inputs and checks balances 
  
})

const errorMsg = function( comment ) {
  $('<p>')
          .html(comment)
          .css('font-weight', 'bold')
          .appendTo('#content')
          .delay(4000).fadeOut()
};