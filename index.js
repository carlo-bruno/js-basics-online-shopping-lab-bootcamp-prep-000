var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let newItem = {
    itemName : item,
    itemPrice: Math.floor(Math.random() * 100)
  };
  cart.push(newItem);
  return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length === 0) {return 'Your shopping cart is empty.'}
  
  let cartItemsAndPrice = [];
  cart.forEach( item => {
    cartItemsAndPrice.push( `${item.itemName} at $${item.itemPrice}`); 
  }
  )
  
  return `In your cart, you have ${cartItemsAndPrice.join(', ')}.`
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
