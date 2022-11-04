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
  setInterval(showSlides, 30000); 
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
