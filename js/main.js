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

$(".all").click(function() {
    $(".relSelf").show();
    $(".relOthers").show();
    $(".forGrief").show();
    $(".idSex").show();
    
});

$(".readable").click(function() {
    document.body.style.backgroundColor = "#FA9865";
    document.body.style.color = "white";
});

$(".white").click(function() {
    document.body.style.backgroundColor = "white";
});


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

$('[lang="es"]').hide();

$('#switch-lang').click(function() {
  $('[lang="es"]').toggle();
  $('[lang="en"]').toggle();
});
