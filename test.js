$(".message").click(typeWriter);

var i = 0;
var txt = 'Hello! I\'m a 3D animator and developer with a passion for creating experiences.'; 
const words = [
    "Hello! I\'m a 3D animator and developer with a passion for creating experiences.", 
    " I learned to code to widen the scope of what I could create. Since learning, I have made iOS Apps and websites for clients.", 
    " Let's connect and create something together."
];
var speed = 20; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
let word = words[i].split(".");
  if (i < word.length) {
    document.querySelector(".message").innerHTML += words[i];
    i++;
    setTimeout(typeWriter, speed);
  } else {
      words.shift()
  }
}