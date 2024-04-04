function getProduct(){
  let matchingProduct='';
products.forEach((product)=>{
  if(product.id===productId){
    matchingProduct = product;
  }
});
return matchingProduct;
 };




  const products = [

  {
    id:'yellow-hoodie',
    color:'yellow',
    image:"/images/285632539_748259956345307_39158008234513840_n.jpg",
    priceCents:250000
  },
  {
    id:'white-hoodie',
    color:'white',
    image:"/images/285525356_380144283934070_867115577592320761_n.jpg",
    priceCents:250000
  },
  {
    id:'black-hoodie',
    color:'black',
    image:"/images/285367133_135733545592323_4297579889631087300_n.jpg",
    priceCents:250000
  },
  {
    id:'green-hoodie',
    color:'green',
    image:"/images/285672459_1841357396069618_2288405835255386728_n.jpg",
    priceCents:250000
  },
  {
    id:'blue-hoodie',
    color:'blue',
    image:"/images/285894833_762375701422613_3010922304766899613_n.jpg",
    pricecents:250000
  }
];


console.log(products);