const place = document.querySelector('.game');
const wrapper = document.querySelector('#js-wrapper');
const video = place.querySelector('video');
const section = document.querySelector('section');

//SCROLLMAGIC
var controller = new ScrollMagic.Controller({vertical: false});

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