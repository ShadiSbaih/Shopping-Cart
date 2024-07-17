# Storefront Application - Introduction to Programming Nanodegree Project

Welcome to the Storefront Application project! This project is part of the Introduction to Programming Nanodegree Program. The core functionality for a storefront application has been implemented here, using JavaScript to manage the shopping cart and checkout process. The visual elements and connecting JavaScript for the user interface are pre-built.

## Project Overview

The main objectives of this project are:

- To add products to a shopping cart.
- To manage the quantities of products within the cart.
- To handle the checkout process, including calculating totals and managing cash transactions.

## Features

### Product Management

- **Product List:** Products are stored using object literals, and all product objects are stored in an array named `products`.
- **Add Item to Cart:** Clicking on a product adds it to the cart. If the product is already in the cart, its quantity is increased.
- **Increase, Decrease, and Remove Items:** Users can increase or decrease the quantity of products in the cart. Decreasing the quantity to 1 and clicking again will remove the item from the cart. There is also an option to remove the item entirely.

### Shopping Cart Functionality

- **Add Product to Cart:** `addProductToCart(productId)` checks if the product is in the cart. If it is, the quantity is increased. If not, the product is added to the cart.
- **Increase Quantity:** `increaseQuantity(productId)` increases the quantity of the product in the cart.
- **Decrease Quantity:** `decreaseQuantity(productId)` decreases the quantity of the product. If the quantity reaches 0, the product is removed from the cart.
- **Remove Product:** `removeProductFromCart(productId)` removes the product from the cart entirely.

### Checkout Functionality

- **Cart Total:** `cartTotal()` calculates and returns the total cost of all items in the cart.
- **Payment Handling:** `pay(amount)` accepts an amount of cash from the user and calculates if there is any remaining balance or change to be given back to the user.

### Global Variables

- A global variable holds the value of the remaining balance after a payment is made.

