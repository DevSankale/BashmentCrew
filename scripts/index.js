import { products } from "./products.js";
import formatCurrency from "../utils/money.js";

let productsHTML = '';
products.forEach((product)=>{
  productsHTML+=
`<div class="merchdiv">
    <div class="button-container">
      <button class="add-button js-add-button">Add to cart</button>
      <button class="remove-button js-remove-button">Remove</button>
    </div>
    <img src=${product.image}>
    <div class="product-price">${formatCurrency(product.priceCents)}
    </div>
</div>`
});

document.querySelector('.merchdiv').innerHTML=
productsHTML;

console.log(productsHTML);

const joinbtn = document.querySelector('.js-join-button');
 
joinbtn.addEventListener('click',()=>{

  joinButton();
  
});

const addbtn=document.querySelectorAll('.js-add-button');
addbtn.forEach((addbtn)=>{
addbtn.addEventListener('click',()=>{

  document.textContent = 'Added';
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


 
