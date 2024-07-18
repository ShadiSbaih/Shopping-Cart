const products = [
  {
    "name": "Cherries",
    "price": 4,
    "quantity": 0,
    "productId": 1,
    "image": "images/cherry.jpg"
  },
  {
    "name": "Oranges",
    "price": 1.50,
    "quantity": 0,
    "productId": 2,
    "image": "images/orange.jpg"
  },
  {
    "name": "Strawberries",
    "price": 4.50,
    "quantity": 0,
    "productId": 3,
    "image": "images/strawberry.jpg"
  },
];

/* Declare an empty array named cart to hold the items in the cart */
let cart = [];

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let product = getProductById(productId);
  product.quantity++;
  if (!cart.includes(product)) {
    cart.push(product);
  }
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const product = getProductById(productId);
  product.quantity++;
}
/* Create a utility function getProductById(productId) which 
   takes productId as a param and returns the product from products array.
*/
function getProductById(productId) {
  return products.find(product => product.productId === productId);
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/
function decreaseQuantity(productId) {
  const product = getProductById(productId);
  product.quantity--; // Decrease the product quantity by 1

  if (product.quantity === 0) { // Check if the quantity is now zero
      Swal.fire({
          title: "This will remove the product from the cart, are you sure?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, remove it!",
          cancelButtonText: "Nope",
          reverseButtons: true
      }).then((result) => {
          if (result.isConfirmed) {
              removeProductFromCart(productId); // Remove the product from the cart if confirmed
              Swal.fire({
                  title: "Removed!",
                  text: "The product has been removed from the cart.",
                  icon: "success"
              });
          } else {
              product.quantity = 1; // Revert quantity to 1 if user cancels
          }
          // Always redraw the cart and checkout regardless of confirmation result
          drawCart();
          drawCheckout();
      });
  } else {
      drawCart();
      drawCheckout();
  }
}

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  const index = cart.findIndex((product) => product.productId === productId);
  if (index !== -1) {
    cart[index].quantity = 0;
    cart.splice(index, 1);
  }
}

/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal() {
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].quantity * cart[i].price;
  }
  return totalPrice;
}

/* Create a function called emptyCart that empties the products from the cart */
function emptyCart() {
 cart.forEach(item => {
     item.quantity = 0;
                      });
  cart = [];
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to the customer
*/
let totalPaid = 0;

function pay(amount) {
  totalPaid += amount;
  let remaining = totalPaid - cartTotal();
  if (remaining >= 0) {
    emptyCart();
    totalPaid = 0;
  }
  return remaining;
}

/* Place standout suggestions here (standout suggestions can be found at the bottom of the project rubric.) */

/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in the terminal to run tests
   npm run test
*/
module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay,
  emptyCart,
}
