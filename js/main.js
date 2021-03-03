// add an onload method that alert's the user to turn on javascript if it's off
//onload methods to start up things


//LOADING SCREEN

$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 4000);
 
});


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

$(document).ready(function(){
    $(".parfait").show();
    $(".coolOff").hide();
    $(".3dart").hide();
    $(".faceFilter").hide();
    $(".projectCards").show();
})

$(".parfai").click(function() {
    $(".parfait").show();
    $(".coolOff").hide();
    $(".3dart").hide();
    $(".faceFilter").hide();
    $(".projectCards").show();
});

$(".cool").click(function() {
    $(".parfait").hide();
    $(".coolOff").show();
    $(".3dart").hide();
    $(".faceFilter").hide();
    $(".projectCards").show();
});

$(".3dar").click(function() {
    $(".parfait").hide();
    $(".coolOff").hide();
    $(".3dart").show();
    $(".faceFilter").hide();
    $(".projectCards").show();
});

$(".face").click(function() {
    $(".parfait").hide();
    $(".coolOff").hide();
    $(".3dart").hide();
    $(".faceFilter").show();
    $(".projectCards").show();
    
});

$(".port").click(function() {
    $(".projectCards").hide();
});



$(".wor").click(function() {
    $(".work").show();
    $(".stills").hide();
    $(".loops").hide();
});

$(".stil").click(function() {
    $(".stills").show();
    $(".loops").hide();
});

$(".loo").click(function() {
    $(".stills").hide();
    $(".loops").show();
});

$(".allar").click(function() {
    $(".stills").show();
    $(".loops").show();
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
