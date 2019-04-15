const withVal = function(mainBal, mainElmnt, otherBal, otherElmnt, withdrawal) { if ( withdrawal.val() < mainBal ){
  console.log('executed')
  mainBal -= parseInt(withdrawal);
  otherElmnt.html(`$${mainBal}`);
} else {
  if ( withdrawal.val() > mainBal + otherBal ){
    $('<p>')
            .html('Balance Exceeded, Try another withdrawal amount.')
            .css('font-weight', 'bold')
            .appendTo('#content')
            .delay(4000).fadeOut()
  } else {
    otherBal += ( mainBal - withdrawal.val() )
    mainBal = 0;
    mainElmnt.html(`$${mainBal}`)
    otherElmnt.html(`$${otherElmnt}`)
  };
};
console.log(`mainBal:${mainBal}, otherBal:${otherBal}`)
};

withVal(100,$savings,200,$checking)