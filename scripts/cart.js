
export let cart = [];

loadFromStorage();

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart')) || [];

};

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
  let matchingitem =  cart.find((cartitem) => cartitem.productId === productId);
  if(matchingitem){
    matchingitem.quantity+=1;
  }else{
    cart.push({
      productId:productId,
      quantity:1,
    })
  }
saveToStorage();
}

export function removeFromCart(productId){
  cart = cart.filter((cartitem) => cartitem.productId !== productId);
  saveToStorage();
}

export function getProduct(productId) {
  return products.find((product) => product.id === productId);
} 
console.log(cart);
