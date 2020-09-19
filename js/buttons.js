//var title = document.querySelector(".section__title").innerHTML;


//USER INTERFACE CONTROLLER

//a. starting position
//    var count = [0];

//function nextSection(sectionName) {
//    
//    var numberOfSections = sectionName.length;
//    var sectionUp = count++;
//    var sectionDown = count--;
//    
//    
//    title = section.toUpperCase();
//    
//};    

 
//2. Print the first section option  
    
    
//1. List section options
//    var sectionName = ["Yoga", "Animation", "Elladia Studio", "Thoughts"];   
//
//    for (var count = [0]; count < sectionName.length; count++) {
//        
//        var section = sectionName[count];
//        console.log(section);
//         document.querySelector(".section__title").innerHTML = section.toUpperCase();
    
//    }

// var displayedSection = "Yoga";

   // var title = document.querySelector(".section__title").innerHTML = displayedSection;
    var title = document.querySelector(".section__title").textContent;
    var subtitle = document.querySelector(".section__subtitle").textContent; 

//    var sectionImageSource = "img/sec" + displayedSection + ".png";
//    console.log(sectionImageSource);
//    
//    
    var image = document.querySelector(".secImg");
    

//    image.setAttribute("src", sectionImageSource);

function Section (secTitle, secImage, secSubtitle) {
    this.secTitle = secTitle;
    this.secImage = secImage;
    this.secSubtitle = secSubtitle;
};

var yoga = new Section("YOGA", "img/secYoga.png", "Hatha and Prenatal");

var animation = new Section("ANIMATION", "img/secAnimation.png", "Art");

var elladia = new Section("ELLADIA STUDIO", "img/secElladia.png", "Apps and games");

var therapy = new Section("THOUGHTS", "img/secThoughts.png", "Musings");

var array = [yoga, animation, elladia, therapy];


var numberOfArrows = document.querySelectorAll(".arrow").length;

//for (var i = 0; i<numberOfArrows; i++){
    
//    document.querySelectorAll('.arrow')[i].addEventListener('click', function(){

    document.querySelector('.up').addEventListener('click', function(){
        
        
        for(var i = 0 ; i < array.length; i++) {
            if (i === 0) {
              console.log(array[0]);
            } else {
                console.log("o");
            }

//        console.log(array[i]);
        }

        

        
        
        
//        title.innerHTML(this.secTitle);
//        subtitle.innerHTML(this.secSubtitle);
//        image.setAttribute("src", this.secImage);
        
        console.log("clicked."); 
    });


    
//}

   
//SCROLL CONTROLLER
//var ctrlArrows = (function() { 
//    
//document.querySelector('.up').addEventListener('click', function(){
//
//
//        console.log("clicked up."); 
//    });
//
//
// document.querySelector('.down').addEventListener('click', function(){
//    
//
//     console.log("clicked down."); 
//    });
//    
//}) ();    


//var output = [];
//var count = 1;
//
//function fizzBuzz() {
//  
//while(count <= 100) {
//    
//};    
//    if (count % 5 === 0 && count % 3 === 0) {
//        output.push("FizzBuzz");
//    } else if (count % 5 === 0) {
//        output.push("Buzz");
//    } else if (count % 3 === 0){
//        output.push("Fizz");
//    } else {
//        output.push(count);
//    };
//    
//    
//    count++;
//    
//    
//    
//    console.log(output);
//};


