//USER INTERFACE CONTROLLER
var UIController = (function() {
   
    const sectionName = ["Animation", "Games", "Yoga", "Music", "Thoughts"];
    
    for (let index = 0; index < sectionName.length; index++) {
        var section = sectionName[index];
        console.log(section);
         document.querySelector(".section__title").innerHTML = section;
    
    }
//    var image = document.querySelector(".section__image")
    

})();


//SCROLL CONTROLLER
var ctrlArrows = (function() { 
    
document.querySelector('.arrowUp').addEventListener('click', function(){
    
       document.querySelector(".section__title").innerHTML = section;
    });


 document.querySelector('.arrowDown').addEventListener('click', function(){
       console.log("clicked down."); 
    });
    
}) ();

var controller = (function (ctrlArrows, UIController) {
    
//1. Display section info
//var showSection = UIController.displaySection();
//    console.log(showSectionSection);
    
//2. Change section with arrows

    
//var wasdCtrl = (function() {
//       document.addEventListener('keypress', function(e){
//       if (event.keyCode === 119 || event.which === 119) {
//           console.log("code w for up");
//           
//           
//        } else if (event.keyCode === 97 || event.which === 97) {
//            console.log("code a for left");
//            
//            
//        } else if (event.keyCode === 115 || event.which === 115) {
//            console.log("code s for down");
//            
//            
//        } else if (event.keyCode === 100 || event.which === 100) {
//            console.log("code d for right");
//            
//            
//        } else if (event.keyCode === 32 || event.which === 32) {
//            console.log("code space for jump");
//            
//            
//        } 
//           
//    });    
//     
//});

   
});

    