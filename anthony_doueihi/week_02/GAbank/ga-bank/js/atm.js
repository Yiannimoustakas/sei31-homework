$(document).ready(function(){
  const bank = {
    checking: 0,
    savings: 0,
    deposit: function( account, amount ){
        this[ account ] += amount;
        this.visualisehtml();
      },

      withdraw: function( account, amount ){
        this[ account ] -= amount;
        this.visualisehtml();
      },

      checkWithdrawAmount: function( account, amount ){
        if( amount <= this[ account ] ){
          this.withdraw( account, amount );
        }else if( amount <=  this.checking + this.savings ){
          amount -= this[ account ];
          if( account === 'checking' ){
            this.checking = 0;
            this.withdraw( 'savings', amount );
          }else{
            this.savings = 0;
            this.withdraw( 'checking', amount );
          }
        }
      },

      visualisehtml: function(){
        const $check = $( '#checking-balance' );
        const $save = $( '#savings-balance' );

        $check.html( `$${ this.checking }` );
        $save.html( `$${ this.savings }` );

        if( this.checking === 0 ){
          $check.addClass( 'zero' );
        }else{
          $check.removeClass( 'zero' );
        }

        if( this.savings === 0 ){
          $save.addClass( 'zero' );
        }else{
          $save.removeClass( 'zero' );
        }
      },

      createEvents: function(){
        $( '#savings-deposit' ).on( 'click', function(){
          if(isNaN($( '#savings-amount' ).val())){
            return;
          }
          bank.deposit( 'savings', Number( $( '#savings-amount' ).val()));
        });

        $( '#savings-withdraw' ).on( 'click', function(){
          if(isNaN($( '#savings-amount' ).val())){
            return;
          }
          bank.checkWithdrawAmount( 'savings', Number( $( '#savings-amount' ).val()));
        });

        $( '#checking-deposit' ).on( 'click', function(){
          if(isNaN($( '#checking-amount' ).val())){
            return;
          }
          bank.deposit( 'checking', Number( $( '#checking-amount' ).val()));
        });

        $( '#checking-withdraw' ).on( 'click', function(){
          if(isNaN($( '#checking-amount' ).val())){
            return;
          }
          bank.checkWithdrawAmount( 'checking', Number( $( '#checking-amount' ).val()));
        });
        this.visualisehtml();
      }
    }

    bank.createEvents();
});
