const sample=document.getElementById('samplex');
sample.addEventListener('click',() =>{
  console.log("clicked");
})

// function sample()
// {
//   console.log("Hello");
// }

// var next=document.getElementsByClassName('.next');

//   next.add('click', () =>{
//     console.log(n);
//     showSlides(slideIndex += n);
//    });


let slideIndex = 0;
showSlides();


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 8000); // Change image every 7 seconds
}


// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }


