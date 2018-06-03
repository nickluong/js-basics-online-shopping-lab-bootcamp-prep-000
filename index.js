var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
  var price = Math.random()*99+1

  var newCartItem = {
    itemName: `${item}`,
    itemPrice: price
  }

  cart.push(newCartItem)

  return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if(cart.length === 0)
  return "Your shopping cart is empty."
  
  else{
    var line = "In your cart, you have "
  for(let i = 0 ; i < cart.length ; i++){
    if(cart.length === 1)
    line += `${cart[i].itemName} at $${cart[i].itemPrice}.`
    else if(cart.length === )
  }
}
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
