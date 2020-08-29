console.clear();

gsap.registerPlugin(ScrollTrigger);
// intro section ======================
ScrollTrigger.create({
  trigger: ".sec01",
  start: "top top",
  end: "bottom center+=36",
  pin:'.center',
  toggleClass: {targets: ".center", className: "green"}
});

// all other sections =============

var numbers = gsap.utils.toArray(".sec02").forEach(function(elem) {
  var num = elem.querySelector(".top");
  
  ScrollTrigger.create({
    trigger: elem,
    start: "top center-=34",
    end: "bottom center+=36px",
    pin: num,
    toggleClass: {targets: num, className: "green"}
  })
});

