// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

// Input this object
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

var summed = 0;

//Function
const cashRegister = function(){
 // The JavaScript for/in statement loops through the properties of an object:
    for (let key in cartForParty) {
    summed += Number(cartForParty[key]);
    console.log(summed);
  }
};
