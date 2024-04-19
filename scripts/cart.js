export let cart;

loadFromStorage();

function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));
  if(!cart){
      cart = [{

        id:'yellow-hoodie',
        color:'yellow',
        image:"/images/285632539_748259956345307_39158008234513840_n.jpg",
        priceCents:250000
      }];
  };
};

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

export function addToCart(productId){
  let matchingitem;
  cart.forEach((cartitem)=>{
    if(productId===cartitem.productId){
      matchingitem=cartitem;
    }
  });

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

export function removeFromCart(){

  let newCart=[];
  cart.forEach((cartitem)=>{
     if(cartitem.productId !== productId){
      newCart.push(cartitem);
     }
  });
  cart=newCart;
  saveToStorage();
}
