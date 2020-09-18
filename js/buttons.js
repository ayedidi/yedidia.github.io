//USER INTERFACE CONTROLLER
var UIController = (function() {

    
    var title = document.querySelector(".section__title").innerHTML;
//1. List section options
    var sectionName = ["Yoga", "Elladia Studio", "Animation", "Thoughts"];
//a. starting position
//    var count = [0];
    
function nextSection(sectionName) {
    
    var numberOfSections = sectionName.length;
    var sectionUp = count++;
    var sectionDown = count--;
    
    
    title = section.toUpperCase();
    
};    
    
    
//2. Print the first section option  
    
    
    
    for (let count = [0]; count < sectionName.length; count++) {
        
        var section = sectionName[count];
        console.log(sectionName[count]);
//         document.querySelector(".section__title").innerHTML = section.toUpperCase();
    
    }

//3. Buttons go up and down the array    
//SCROLL CONTROLLER
var ctrlArrows = (function() { 
    
document.querySelector('.arrowUp').addEventListener('click', function(){
        section++;

        console.log("clicked up."); 
    });


 document.querySelector('.arrowDown').addEventListener('click', function(){
     section--;

     console.log("clicked down."); 
    });
    
}) ();    

})();


var output = [];
var count = 1;

function fizzBuzz() {
  
while(count <= 100) {
    
};    
    if (count % 5 === 0 && count % 3 === 0) {
        output.push("FizzBuzz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else if (count % 3 === 0){
        output.push("Fizz");
    } else {
        output.push(count);
    };
    
    
    count++;
    
    
    
    console.log(output);
};


