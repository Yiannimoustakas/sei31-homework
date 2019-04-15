/*Write a function called cashRegister that takes a shopping cart object.
The object contains item names and prices (itemName: itemPrice).
The function should return the total price of the shopping cart.*/

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

console.log(Object.values(cartForParty));

const cashRegister = function () {
  let total = 0;
  let priceArr = Object.values(cartForParty)
  for (let i = 0; i < priceArr.length; i++){
    total += parseFloat(priceArr[i]);
  }
return total;

}
console.log(cashRegister());
