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
 //liya
const slides = document.querySelectorAll('.mySlides');
const loginbtn=document.getElementById("loginbtn");
const loginMessage=document.getElementById("loginMessage");
const signinbtn=document.getElementById("signinbtn");
const signinMessage=document.getElementById("signinMessage");
const loginIds=[
  {username : 'LiyaElsa',
   password : 'liya@1264'},
  {username : 'kripa',
   password : 'kripa@2001'},
   {username : 'liya',
   password : 'liya@2000'},
];
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
  setTimeout(showSlides, 30000); 
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


loginbtn.addEventListener('click',() =>{
   let usernameCollected=document.getElementById('logName').value;
   let passwordCollected=document.getElementById('logPassword').value;
  //  let validitycheck=0;
  // loginIds.forEach(loginId =>{
  //   if(loginId.username == usernameCollected && loginId.password == passwordCollected)
  //   {
  //     validitycheck=1
      
  //   }
  // })
  // if(validitycheck==1)
  // {
  //   loginMessage.innerHTML="You are logged in successfully";
  // }
  // else
  // {
  //   loginMessage.innerHTML="Please enter a valid username and password";
  // }
  let selectedId=loginIds.find(loginId => loginId.username==usernameCollected);
  if(selectedId==undefined)
  {
    loginMessage.innerHTML="You are not registered with the service";
  }
  else{
    if(selectedId.password==passwordCollected)
    {
      loginMessage.innerHTML="You are logged in successfully";
    }
    else{
      loginMessage.innerHTML="Please enter correct password";
    }
  }

})

signinbtn.addEventListener('click',() =>{
  let usernameCollected=document.getElementById('signName').value;
  let passwordCollected=document.getElementById('signPassword').value;
  if(passwordCollected.length < 8)
  {
    signinMessage.innerHTML="Use a password with more than 8 characters";
  }
  else
  {
    let object={username:usernameCollected,password:passwordCollected};
    loginIds.push(object);
    signinMessage.innerHTML="Successfully signed up for the service";
  }

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