const joinbtn = document.querySelector('.js-join-button');
 
joinbtn.addEventListener('click',()=>{
  document.innerText = 'Joined';
  console.log('Joined')
});

const addbtn=document.querySelectorAll('.js-add-button');
addbtn.forEach((addbtn)=>{
addbtn.addEventListener('click',()=>{
  console.log('added');
})
});


const removebtn = document.querySelectorAll('.js-remove-button');
 removebtn.forEach((removebtn)=>{
removebtn.addEventListener('click',()=>{
  console.log('removed');
})
 })

 