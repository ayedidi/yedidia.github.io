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
    


    new hoverEffect({
      parent: document.querySelector('.distortion'),
      intensity: 0.2,
      image1: '/img/secYoga.png',
      image2: '/img/repeat.png',
      displacementImage: '/img/diss2.png',
      imagesRatio: 380 / 300
    })

    // MEDIA
    TweenMax.staggerFrom(".media ul li", 1.5, {
      delay: 1.5,
      opacity: 0,
      x: "-20",
      ease: Expo.easeInOut
    }, 0.08);

    // TEXT
    TweenMax.from(".text h1 .hidetext", 1.5, {
      delay: 1,
      y: "100%",
      ease: Expo.easeInOut
    });

    TweenMax.from(".text h3 .hidetext", 1.5, {
      delay: 1.2,
      y: "100%",
      ease: Expo.easeInOut
    });

    TweenMax.from(".text p .hidetext", 1.5, {
      delay: 1.3,
      y: "100%",
      ease: Expo.easeInOut
    });

    TweenMax.from(".text h2", 1.5, {
      delay: 1.5,
      opacity: 0,
      x: "-10000",
      ease: Expo.easeInOut
    });


    // DISTORTION
    TweenMax.from(".distortion", 1.5, {
      delay: 2,
      opacity: 0,
      y: "20",
      ease: Expo.easeInOut
    });

    // OVERLAY
    TweenMax.to(".first", 1.5, {
      delay: .5,
      top: "-100%",
      ease: Expo.easeInOut
    });

    TweenMax.to(".second", 1.5, {
      delay: .7,
      top: "-100%",
      ease: Expo.easeInOut
    });

    TweenMax.to(".third", 1.5, {
      delay: .9,
      top: "-100%",
      ease: Expo.easeInOut
    });

