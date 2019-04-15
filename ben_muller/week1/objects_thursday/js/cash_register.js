const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const totalPrice = function ( obj ){
  return Object.values(cartForParty).reduce((sum, element) => sum + Number(element),0)
};

console.log(totalPrice(cartForParty))

