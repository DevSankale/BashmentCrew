import { getProduct } from "./products";

function renderOrderSummary(){

  let cartSummary='';
  cart.forEach((cartitem)=>{
    const productId = cartitem.productId;
    const matchingProduct = getProduct(productId);


  cartSummary +=
  
  `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
  <div class="delivery-date">
    Delivery date:${dateString}
  </div>
  
  <div class="cart-item-details-grid">
    <img class="product-image" src="${matchingProduct.image}">
  
    <div class="cart-item-details">
      <div class="product-name">
       ${matchingProduct.name}
      </div>
      <div class="product-price">
        ${formatCurrency(matchingProduct.priceCents)}
      </div>
      <div class="product-quantity">
        <span>
          Quantity: <span class="quantity-label">${cartitem.quantity}</span>
        </span>
        <span class="update-quantity-link link-primary">
          Update
        </span>
        <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
          Delete
        </span>
      </div>
    </div>
  `;
});
}

document.querySelector('.js-order-summary').innerHTML= cartSummary;
renderOrderSummary();