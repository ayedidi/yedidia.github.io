// add an onload method that alert's the user to turn on javascript if it's off
//onload methods to start up things



//$(".video").on("mouseover", function() {
//    play;
//}); 
//
//$(".video").on("mouseout", function() {
//    stop;
//}); 

//$(".portOne").click(function() {
//    $(".portfOne").show();
//    $(".portfTwo").hide();
//    
//});
//
//$(".portTwo").click(function() {
//    $(".portfOne").hide();
//    $(".portfTwo").show();
//    
//});
//
//$(function() {
//    $(".parfait").show();
//    $(".esteria").hide();
//    $(".therap").hide();
//});

$(".parfai").click(function() {
    $(".parfait").show();
    $(".esteria").hide();
    $(".therap").hide();
    
});

$(".esteri").click(function() {
    $(".parfait").hide();
    $(".esteria").show();
    $(".therap").hide();
    
});

$(".thera").click(function() {
    $(".parfait").hide();
    $(".esteria").hide();
    $(".therap").show();
    
});



$(".wor").click(function() {
    $(".work").show();
    $(".stills").hide();
    $(".loops").hide();
});

$(".stil").click(function() {
    $(".work").hide();
    $(".stills").show();
    $(".loops").hide();
});

$(".loo").click(function() {
    $(".work").hide();
    $(".stills").hide();
    $(".loops").show();
});

$(".allar").click(function() {
    $(".work").show();
    $(".stills").show();
    $(".loops").show();
});




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

$(".all").click(function() {
    $(".relSelf").show();
    $(".relOthers").show();
    $(".forGrief").show();
    $(".idSex").show();
    
});


$(".readable").click(function() {
    document.body.style.backgroundColor = "#c57b57";
    document.body.style.color = "white";
});

$(".white").click(function() {
    document.body.style.backgroundColor = "white";
});



// When the user scrolls the page, execute myFunction
//window.onscroll = function() {myFunction()};
//
//function myFunction() {
//  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//  var scrolled = (winScroll / height) * 100;
//  document.getElementById("myBar").style.width = scrolled + "%";
//}

$('[lang="es"]').hide();

$('#switch-lang').click(function() {
  $('[lang="es"]').toggle();
  $('[lang="en"]').toggle();
});
