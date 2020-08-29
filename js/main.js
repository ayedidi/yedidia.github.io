// add an onload method that alert's the user to turn on javascript if it's off
//onload methods to start up things


//
//$(".devs").hide();
//$("#journey").hide();
//
//
//$(".journey").click(function() {
//    $("#journey").show();
////    $(".journey").hide();
//});

//$(".video").on("mouseover", function() {
//    play;
//}); 
//
//$(".video").on("mouseout", function() {
//    stop;
//}); 

$(".developer").click(function() {
    $(".devs").show();
    $(".anim").hide();
//    console.log("ooo");
    
});

$(".animator").click(function() {
    $(".devs").hide();
    $(".anim").show();
    
});

$(".self").click(function() {
    $(".relSelf").show();
    $(".relOthers").hide();
    $(".forGrief").hide();
    $(".idSex").hide();
    console.log("ooo");
    
});

$(".others").click(function() {
    $(".relSelf").hide();
    $(".relOthers").show();
    $(".forGrief").hide();
    $(".idSex").hide();
    
});

$(".grief").click(function() {
    $(".relSelf").hide();
    $(".relOthers").hide();
    $(".forGrief").show();
    $(".idSex").hide();
    
});

$(".sex").click(function() {
    $(".relSelf").hide();
    $(".relOthers").hide();
    $(".forGrief").hide();
    $(".idSex").show();
    
});


//$(".message").click(typeWriter);
//
//var i = 0;
//var txt = 'Hi, I\'m Yedidia (yeh-deed-yaa), an animator and software developer. I specialize in music videos and iOS apps.'; 
//const words = [
//    "Hi! I\'m Yedidia, an animator and developer available for freelance work.", 
//    "I like to bring things to life. I make iOS Apps, websites, and animations.", 
//    "Scroll down to see my work. Let\'s create something together!"];
//var speed = 20; /* The speed/duration of the effect in milliseconds */
//
//function typeWriter() {
//  if (i < txt.length) {
//    document.querySelector(".message").innerHTML += txt.charAt(i);
//    i++;
//    setTimeout(typeWriter, speed);
//  }
//}

//$(".message").click(typingEffect);
//
//const words = ["Hello! I\'m Yedidia, a 3D animator and developer with a passion for creating experiences.", "I learned to code to widen the scope of what I could create. Since learning, I have made iOS Apps and websites for clients.", "Let's connect and create something together."];
//let i = 0;
//let timer;

//function typingEffect() {
//	let word = words[i].split("");
//	var loopTyping = function() {
//		if (word.length > 0) {
//			document.querySelector('.message').innerHTML += word.shift();
//		} else {
//			deletingEffect();
//			return false;
//		};
//		timer = setTimeout(loopTyping, 50);
//	};
//	loopTyping();
//};

//function typingEffect() {
//let word = words[i]
//  if (words[0]) {
//    document.querySelector(".message").innerHTML += word;
//    i++;
//    timer = setTimeout(typingEffect, 50);
//  } else {
//			deletingEffect();
//			return false;
//		};
//}

//function deletingEffect() {
//	let word = words[i].split("");
//	var loopDeleting = function() {
//		if (word.length > 0) {
//			word.pop();
//			document.querySelector('.message').innerHTML = word.join("");
//		} else {
//			if (words.length > (i + 1)) {
//				i++;
//			} else {
//				i = 0;
//			};
//			typingEffect();
//			return false;
//		};
//		timer = setTimeout(loopDeleting, 10);
//	};
////	loopDeleting();
//};

//typingEffect();

//function typingEffect() {
//	let word = words[i].split("");
//	var loopTyping = function() {
//		if (word.length > 0) {
//			document.querySelector('.message').innerHTML += word.shift();
//		} else {
//			deletingEffect();
//			return false;
//		};
//		timer = setTimeout(loopTyping, 50);
//	};
//	loopTyping();
//};
//
//function deletingEffect() {
//	let word = words[i].split("");
//	var loopDeleting = function() {
//		if (word.length > 0) {
//			word.pop();
//			document.querySelector('.message').innerHTML = word.join("");
//		} else {
//			if (words.length > (i + 1)) {
//				i++;
//			} else {
//				i = 0;
//			};
//			typingEffect();
//			return false;
//		};
//		timer = setTimeout(loopDeleting, 10);
//	};
//	loopDeleting();
//};
//
//typingEffect();


//function hoverPlay() {
//    
//}

//$('.carousel').carousel();

//document.querySelector(".ratings").innerHTML = "Ratings used to live here";
//
//document.getElementById("journey").innerHTML = "Timeline will be made here";
//
//document.getElementsByClassName("btn")[1].onclick = function animator() {
//    
//    document.querySelector("btn")[2].style.backgroundColor = "grey";
//    document.getElementsByClassName("btn")[3].style.backgroundColor = "grey";
//}


//$("panel").on("mouseleave", function() {
//    $("img").show();
//}); 
