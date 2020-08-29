const place = document.querySelector('.game');
const slide = document.querySelector('.slide');
let video = document.querySelectorAll('video');
const section = document.querySelector('section');

//SCROLLMAGIC
var controller = new ScrollMagic.Controller({vertical: false});


  var horizontalSlide = new TimelineMax()
  // animate panels
  .to(video, 1,   {x: "-20%"})	
  .to(video, 1,   {x: "-40%"})
  .to(video, 1,   {x: "-60%"})
  .to(video, 1,   {x: "-80%"})

var scene1 = new ScrollMagic.Scene({
    duration: 1000,
    triggerElement: place,
    triggerHook: 0.5
})
.addIndicators()
.setPin(place)
.addTo(controller);

//VIDEO ANIMATION
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

//scene.on("update", e=> {
//    scrollpos = e.scrollPos / 500;
//});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);
    
    video.currentTime = delay;
}, 41.7);// divide seconds by frame rate