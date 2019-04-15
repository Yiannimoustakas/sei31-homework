console.log('hi');

$( document ).ready( function () {

  let currentBalanceSaving = 0;
  let currentBalanceChecking = 0;


  $( '#checking-deposit' ).on( 'click' , function () {
    let $currentCheckingAmount = $('#checking-balance').html();
    let $newCheckingAmount = $('#checking-amount').val();
    //console.log($newCheckingAmount);
    if (isNaN($newCheckingAmount)){
      alert('Please add only number.')
      return;
    } if ($newCheckingAmount < 0){
      alert('Please add only positive number.')
      return;
    }
    //console.log("current HTML: ", $currentCheckingAmount);
    //console.log( "after parseInt: ", parseInt($currentCheckingAmount.slice(1)));
    let currentBalance = parseInt($currentCheckingAmount.slice(1));

    //console.log("current HTML: ", $newCheckingAmount);
    //console.log( "after parseInt: ", parseInt($newCheckingAmount));
    let newBalance = parseInt($newCheckingAmount);

    let totalBalance = newBalance + currentBalance;

    $('#checking-balance').html('$' + totalBalance);

    if(totalBalance > 0){
      $('#checking-balance').removeClass('zero');
      return;
    }
  });

  $( '#checking-withdraw' ).on( 'click' , function () {
    let $newWithdrawAmount = $('#checking-amount').val();
    let $currentCheckingAmount = $('#checking-balance').html();
    //console.log($newWithdrawAmount);
    //console.log($currentCheckingAmount);
    let currentBalance = parseInt($currentCheckingAmount.slice(1));
    let $newCheckingAmount = parseInt($newWithdrawAmount);
    console.log(currentBalance);

    if(isNaN($newWithdrawAmount)){
      alert('Please enter only digits');
      return;
    }
    if($newWithdrawAmount < 0){
      alert('Plaese add only positive value');
      return;
    }

    if( $newCheckingAmount > currentBalance){
      let $currentSavingAmount = $('#savings-balance').html();
      currentBalanceSaving = parseInt($currentSavingAmount.slice(1));
      if(($newCheckingAmount-currentBalance) <= currentBalanceSaving ){

        currentBalanceSaving = currentBalanceSaving-($newCheckingAmount-currentBalance);
        currentBalanceChecking = 0 ;
        $('#savings-balance').html('$' + currentBalanceSaving);
        console.log(currentBalanceSaving);
        if(currentBalanceSaving === 0){
          $('#savings-balance').addClass('zero');

        }

      } else {
        alert('We are sorry! You do not have sufficient fund.');
        return;
      }

    } else {
      currentBalanceChecking = (currentBalance - $newCheckingAmount);
    }


    console.log(currentBalanceChecking);

    $('#checking-balance').html('$'+ currentBalanceChecking);
    if(currentBalanceChecking === 0){
      $('#checking-balance').addClass('zero');
      return;
    }

  });


    $('#savings-deposit').on('click', function(){

    let $newSavingDeposite = $('#savings-amount').val();
    let $newSavingDepositeBalance = $('#savings-balance').html();
    let currentSavingDeposite = parseInt($newSavingDepositeBalance.slice(1));

    console.log($newSavingDeposite);
    console.log(currentSavingDeposite);

    if(isNaN($newSavingDeposite)){
      alert('Only enter the digits here!');
      return;
    }
    if ( $newSavingDeposite < 0 ){
      alert('Please enter only the positive value.');
      return;
    }

    let savingAmount = parseInt($newSavingDeposite);
    let totalBalance = currentSavingDeposite + savingAmount;
    $('#savings-balance').html('$' + totalBalance);

    if(totalBalance > 0){
      $('#savings-balance').removeClass('zero');
      return;
    }

  });

    $( '#savings-withdraw' ).on('click', function(){
      let $savingWithdraw = $('#savings-amount').val();
      let $currentSavingAmount = $('#savings-balance').html();
      console.log($savingWithdraw);
      console.log($currentSavingAmount);
      let $currentSavingWithdraw = parseInt($currentSavingAmount.slice(1));
      let withdrawAmount = parseInt($savingWithdraw);
      if (isNaN($savingWithdraw)){
        alert('Please enter the digits only!');
        return;
      }
      if ($savingWithdraw < 0){
        alert('Please enter the positive value only.');
        return;
      }

      if ($savingWithdraw > $currentSavingWithdraw){
        let $currentCheckingAmount = $('#checking-balance').html();
        currentBalanceChecking = parseInt($currentCheckingAmount.slice(1));
        if(($savingWithdraw-$currentSavingWithdraw) <= currentBalanceChecking ){
          currentBalanceChecking = currentBalanceChecking - ($savingWithdraw-$currentSavingWithdraw);
          currentBalanceSaving = 0;
          $('#checking-balance').html('$'+ currentBalanceChecking);
          if(currentBalanceChecking===0){
            $('#checking-balance').addClass('zero');
          }

        } else {
          alert('Sorry, you do not have sufficient fund.');
          return;
        }

      } else {
        currentBalanceSaving = $currentSavingWithdraw - withdrawAmount;
      }



      $('#savings-balance').html('$' + currentBalanceSaving);

      if(currentBalanceSaving === 0){
        $('#savings-balance').addClass('zero');
        return;
      }

    });


});
