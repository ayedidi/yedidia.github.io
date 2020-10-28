var player = document.querySelector(".player");
var map = document.querySelector(".map");


//CHARACTER MOVEMENT
const SPEED = 1;


function update(){
    let inputDirection = {x: 0, y: 0};
    
    playerBody.x += inputDirection.x;
    playerBody.y += inputDirection.y;
}



         
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            inputDirection = {x: 0, y: -1}
            break
        case 'ArrowDown':
            inputDirection = {x: 0, y: 1}
            break
        case 'ArrowLeft':
            inputDirection = {x: -1, y: 0}
            break
        case 'ArrowRight':
            inputDirection = {x: 1, y: 0}
            break    
    }
})