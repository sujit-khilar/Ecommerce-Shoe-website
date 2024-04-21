const wrapper=document.querySelector(".sliderwrapper");
const menuitems= document.querySelectorAll('.menuitem');

const products=[
   {
      id: 1,
      title: 'Air Jordan',
      price: 15999,
      colors: [
         {
            code:'lightgray',
            img:'./image/jordan.png'
         },
         {
            code:'green',
            img:'./image/jordan2.png'
         }
      ] 
   },
   {
      id: 2,
      title: 'Air Force',
      price: 14999,
      colors: [
         {
            code:'black',
            img:'./image/air.png'
         },
         {
            code:'darkblue',
            img:'./image/air2.png'
         }
      ] 
   },
   {
      id: 3,
      title: 'Blazer',
      price: 14999,
      colors: [
         {
            code:'lightgray',
            img:'./image/blazer.png'
         },
         {
            code:'green',
            img:'./image/blazer2.png'
         }
      ] 
   },
   {
      id: 4,
      title: 'Dunk',
      price: 14999,
      colors: [
         {
            code:'black',
            img:'./image/crater.png'
         },
         {
            code:'lightgray',
            img: './image/crater2.png'
         }
      ] 
   },
   {
      id:5,
      title:'Hippie',
      price: 13999,
      colors: [
         {
            code: 'gray',
            img: './image/hippie.png',
         },
         {
            code: 'black',
            img:'./image/hippie2.png'
         }
      ]
   }
]

let choosenproduct= products[0]

const currentProductImg=document.querySelector('.productimg');
const currentProductTitle=document.querySelector('.producttitle');
const currentProductPrice= document.querySelector('.productprice');
const currentProductColors= document.querySelectorAll('.color');
const currentProductSizes= document.querySelectorAll('.size')

menuitems.forEach((item, index) =>{
   item.addEventListener('click', ()=>{
      //change the current slide
      wrapper.style.transform = `translate(${-100 * index}vw)`;

      //change the choosen product
      choosenproduct=products[index];

      //change texts of currentProduct
      currentProductTitle.textContent=choosenproduct.title;
      currentProductPrice.textContent="₹"+choosenproduct.price;
      currentProductImg.src=choosenproduct.colors[0].img;

      //assign new colors
      currentProductColors.forEach((color, index)=>{
         color.style.backgroundColor = choosenproduct.colors[index].code;
      })
   })
})

 
currentProductColors.forEach((color,index)=>{
   color.addEventListener('click',()=>{
      currentProductImg.src = choosenproduct.colors[index].img;
   })
})

currentProductSizes.forEach((size,index)=>{
   size.addEventListener('click',()=>{
      currentProductSizes.forEach((size)=>{
         size.style.backgroundColor='transparent';
         size.style.color='black';
      });
      size.style.backgroundColor='black';
      size.style.color='white';
   })
})

const productButtton=document.querySelector('.productbutton');
const payment=document.querySelector('.payment');
const closeButton=document.querySelector('.close');
const paymentbutton=document.querySelector('.payButton')

const buy= document.querySelector('.buy');

productButtton.addEventListener('click',()=>{
   payment.style.display='flex';
});

closeButton.addEventListener('click',()=>{
   payment.style.display='none'
})

paymentbutton.addEventListener('click',()=>{
   payment.style.display='none'
   alert('Your product will delevired in 7 Days')  
})

buy.addEventListener('click',()=>{
   payment.style.display='none'
   alert('Your product will delevired in 7 Days')  
})