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