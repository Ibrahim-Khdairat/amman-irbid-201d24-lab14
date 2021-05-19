/* global Cart */
'use strict';
let counter=0;
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);

   counter=cart.items.length;
   console.log(counter);



}
console.log(counter);

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  let counterEl=document.getElementById('itemCount');

counterEl.textContent=` (${counter})`;
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() { 

 document.getElementsByTagName('tbody')[0].innerHTML='';
 }

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  




  // TODO: Find the table body

  let tableEl=document.getElementsByTagName('tbody')[0];
 



  // TODO: Iterate over the items in the cart
  for (let i = 0; i <cart.items.length ; i++) {

    let rawEl=document.createElement('tr');
    tableEl.appendChild(rawEl);

let removeTdElement=document.createElement('td');
rawEl.appendChild(removeTdElement);
let linkEl=document.createElement('a');
removeTdElement.appendChild(linkEl);
linkEl.textContent='X';

// linkEl.addEventListener('click', )
linkEl.setAttribute('item',cart.items[i].product);
linkEl.setAttribute('quantity',cart.items[i].quantity);

linkEl.setAttribute('id',i);






let quantityTdElement=document.createElement('td');
rawEl.appendChild(quantityTdElement);
quantityTdElement.textContent=cart.items[i].quantity;

let itemTdElement=document.createElement('td');
rawEl.appendChild(itemTdElement);
itemTdElement.textContent=cart.items[i].product;

  }


  
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}




function removeItemFromCart(event) {
  
let removeCart=event.target.getAttribute('item');

// let removeId=event.target.getAttribute('id');

let quantity=event.target.getAttribute('quantity');
for (let index = 0; index < cart.items.length; index++) {
if(removeCart===cart.items[index].product && quantity === cart.items[index].quantity ) 
{
  cart.removeItem(index);
} 
}

cart.saveToLocalStorage();

renderCart();



  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}


// This will initialize the page and draw the cart on screen
renderCart();





// let rawEl=document.createElement('tr');
// tableEl.appendChild(rawEl);

// let removeTdElement=document.createElement('td');
// rawEl.appendChild(removeTdElement);

// let quantityTdElement=document.createElement('td');
// rawEl.appendChild(quantityTdElement);
// quantityTdElement.textContent=this.quantity;

// let itemTdElement=document.createElement('td');
// rawEl.appendChild(itemTdElement);
// itemTdElement.textContent=this.product;