import { products } from "./products.js";
import formatCurrency from "../utils/money.js";
import { cart,addToCart } from "./cart.js";


let productsHTML = '';
products.forEach((product)=>{
  productsHTML+=
`<div class="merchdiv">
    <img src=${product.image}>
    <div class="product-price">ksh ${formatCurrency(product.priceCents)}
    </div>
    <div class="button-container">
      <button class="add-button js-add-button" data-product-id="${product.id}">Add to cart</button>
      <button class="remove-button js-remove-button">Remove</button>
    </div>
 </div>`
});


document.querySelector('.merchdiv').innerHTML=
productsHTML;


function updateCartQuantity(){
  let cartQuantity = 0;
  cart.forEach((cartitem)=>{
    cartitem+= cartitem.quantity;
  });
  document.querySelectorAll('.cart-quantity').innerHTML = cartQuantity;
}

const joinbtn = document.querySelector('.js-join-button');
 
joinbtn.addEventListener('click',()=>{

  joinButton();
  
});


const addbtn=document.querySelectorAll('.js-add-button');
addbtn.forEach((addbtn)=>{
addbtn.addEventListener('click',()=>{
  const productId = addbtn.dataset.productId;
  addToCart(productId);
  updateCartQuantity();
 
})
});

const removebtn = document.querySelectorAll('.js-remove-button');
 removebtn.forEach((removebtn)=>{
removebtn.addEventListener('click',()=>{
  console.log('removed');
})
 });

function joinButton(){
  document.querySelector('.js-join-button').innerHTML= "WELCOME." 
  document.querySelector('.js-join-button').style.color = 'black';
  document.querySelector('.js-join-button').style.background= 'grey';
;
}


 
