var cart = [];

function getCart() { // simple function to return 'cart' array
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
//=======================================================================================
 function addToCart(item) {
 var item = generateNewItem(item);     // item holds a function to put paramater through
 getCart().push(item);    // places key and value from generateNewItem into the cart array
 return `${item.itemName} has been added to your cart.` // references key from Object 'item'
 }
 
 function generateNewItem(itemName) { 
   return {
     itemName: itemName,    // first itemName is a string, second is a variable
     itemPrice: (Math.floor(Math.random() * 100 + 1))} // create random integer between 1 and 100
 }
//========================================================================================

function viewCart() {
 return getCart().length === 0 ? "Your shopping cart is empty." : getCartList()
}

function getCartList() {
  var inYourCart = 'In your cart, you have '   // first part of returned statement
  if (getCart().length >= 1) {
    inYourCart += `${getCart()[0].itemName} at $${getCart()[0].itemPrice}` // extends statement for first item and price in list
  }
  if (getCart().length >= 2) {
    var moreToYourCart = ''
    for (var i = 1; i < getCart().length - 1; i++)
    moreToYourCart += `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`
  
  inYourCart += `${moreToYourCart}, and ${getCart()[getCart().length-1].itemName} at $${getCart()[getCart().length-1].itemPrice}`
  }
  return `${inYourCart}.`
}
//=============================================================================================
  function findCartCost() {
  cartCost = 0
  for (var i = 0; i <getCart().length; i++) {
    cartCost =`${getCart()[i].itemPrice}` + cartCost
  }
return cartCost
  }
  
function total() {

 var cartCost = findCartCost()
 return cartCost
}


//=============================================================================================

function removeFromCart(item) {
  function searchForItem(item) {
    var itemToRemove
    for (i = 0; i < getCart().length; i++) {
      if (getCart()[i].itemName === item) {itemToRemove = getCart()[i].itemName
      } return itemToRemove;
      function removeFromCart(itemToRemove) {
        var itemIndex = cart.indexOf
      }
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
} 