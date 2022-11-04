// courses
const cards = document.querySelector(".cardii");
cards.addEventListener('click', ()=>{
  cards.classList.toggle("is-flipped");
})
const card2=document.querySelector(".cardi2");
card2.addEventListener('click',()=>{
  card2.classList.toggle("is-flipped");
})
const card3=document.querySelector(".cardi3");
card3.addEventListener('click',()=>{
  card3.classList.toggle("is-flipped");
})
// courses end


const slides = document.querySelectorAll('.mySlides');
let slideIndex = 0;
showSlides();

function showSlides() {
  slides.forEach(slide => {
    slide.style.display = "none";
  });
  if (slideIndex > (slides.length-1)) {slideIndex = 0}
  if (slideIndex < 0) {slideIndex = 2}
  slides[slideIndex].style.display = "block";
  slideIndex++;
  setInterval(showSlides, 10000); 
}

const prev=document.getElementById('prev');

const next=document.getElementById('next');

prev.addEventListener('click', () =>{
  slideIndex =slideIndex-2;
  showSlides();

})

next.addEventListener('click', () =>{
  showSlides();
})

const dots = document.querySelectorAll('.dot');
dots.forEach(dot =>{
  dot.addEventListener('click',() =>{
    let n=dot.getAttribute("value");
    showSlides(slideIndex = n);
  })
})

//akshay code
const lang=document.getElementById('lang');
const field=document.getElementById('field');
const text =document.getElementById('text');
const reccomendlink=document.getElementById('var');
const submitbtn=document.getElementById('btn');

submitbtn.addEventListener('click',()=>
{
    if(lang.value=='java' && field.value=='dev')
    {
        text.innerHTML="BEST CHOICE:- Experion Technologies";
        reccomendlink.href="https://www.experionglobal.com/";
    }
    else if(lang.value=='java' && field.value=='test')
    {
        text.innerHTML="BEST CHOICE:- Tata Consuctency Service";
        reccomendlink.href="https://www.tcs.com/";
    }
    else if(lang.value=='java' && field.value=='bus')
    {
        text.innerHTML="BEST CHOICE:- I B M";
        reccomendlink.href="https://www.ibm.com/in-en";
    }
    else if(lang.value=='python' && field.value=='dev')
    {
        text.innerHTML="BEST CHOICE:- Wipro";
        reccomendlink.href="https://www.wipro.com/";
    }
    else if(lang.value=='python'&& field.value=='test')
    {
        text.innerHTML="BEST CHOICE:- Google";
        reccomendlink.href="https://www.google.com/";
    }
    else if(lang.value=='python' && field.value=='bus')
    {
        text.innerHTML="BEST CHOICE:- Microsoft";
        reccomendlink.href="https://www.microsoft.com/en-in/";
    }
    else
    {
      text.innerHTML=" ****Please select the field***";
    }

})

//kripa
const buttons=document.querySelectorAll('.contactbutton');
const forms=document.querySelectorAll('.contactform');

buttons.forEach(button =>{
  button.addEventListener('click',()=>{
  forms.forEach(form =>{
    if(button.getAttribute('value')==form.getAttribute('value'))
    {
      form.style.setProperty('display','block');
    }
  })
})
})

function myFunction() {
  let x = document.getElementById("name").value;
  document.getElementById("demo").innerText = "Dear " +x+ " ,Your Ticket for communication is ready🤩";
}

const galleryimages=document.querySelectorAll('.galleryimage');
const imagezoom=document.getElementById('gallerycontainer');
const expandedimg=document.getElementById('expandedImg');
galleryimages.forEach(img =>{
  img.addEventListener('click',()=>{
    let imagelink=img.getAttribute("src");
    expandedimg.setAttribute("src",imagelink);
    imagezoom.style.display="block";
  })
})