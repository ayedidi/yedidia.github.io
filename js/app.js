const yoga = document.querySelector('.yoga')
const video = yoga.querySelector('video');

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

const scene = ScrollMagic.Scene({
    duration: 2000,
    triggerElement: yoga,
    triggerHook: 0.5
})
.setPin(yoga)
.addIndicators()
.addTo(controller);

//VIDEO ANIMATION
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', e=> {
    scrollpos = e.scrollPos;
    console.log(e);
})