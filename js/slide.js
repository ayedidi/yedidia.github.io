var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
 
  slides[slideIndex-1].style.display = "block";
  
}

showSlides();

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

//let mouseCursor = document.querySelector(".cursor");
//let links = document.querySelectorAll(".link");
//
//window.addEventListener('mouseover', cursor);
//
//function cursor(e){
//    mouseCursor.style.top = e.pageY + "px";
//    mouseCursor.style.left = e.pageX + "px";
//}
//
//links.forEach(link => {
//   link.addEventListener("mouseover", () => {
//       mouseCursor.classList.add(".cursor-grow");
//   }); 
//    link.addEventListener("mouseleave", () => {
//       mouseCursor.classList.remove(".cursor-grow");
//   }); 
//});


//CHANGE SLIDE ON SCROLL
//window.addEventListener('scroll', function() {
//   
//    let scrollDown = document.documentElement.scrollHeight - window.innerHeight; 
//    let scrollUp = 0;
//    let scrolled = window.scrollY;
//
//    
//    if (scrolled === scrollUp) {
//        
//        console.log("scrolled up works");
//    } else if (scrolled === scrollDown) {
//        console.log("scrolled to scrollable");
//    } else {
//        
//    }
//   
//    });
    


    // Custom mouse cursor.
