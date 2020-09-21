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




//CHANGE SLIDE ON SCROLL
window.addEventListener('scroll', function() {
   
    let scrollDown = document.documentElement.scrollHeight - window.innerHeight; 
    let scrollUp = 0;
    let scrolled = window.scrollY;

    
    if (scrolled === scrollUp) {
        
        console.log("scrolled up works");
    } else if (scrolled === scrollDown) {
        console.log("scrolled to scrollable");
    } else {
        
    }
   
    });
    


$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});

