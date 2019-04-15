console.log(
  "%c---Homework:The Cash Register---",
  "color: blue; font-size: large; background-color: yellow;"
);

/*The Cash Register
Write a function called cashRegister that takes a shopping cart object.
The object contains item names and prices (itemName: itemPrice).
The function should return the total price of the shopping cart. Example:

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55
*/

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(shopCart) {
  let price = 0;
  let cartList = Object.values(shopCart);
  //console.log(cartList);

  for (let i = 0; i < cartList.length; i++) {
    price += parseFloat(cartList[i]);
    //console.log("price", price)
  }
  return `The total price of shopping cart is ${price}`;
};

console.log(cashRegister(cartForParty));
