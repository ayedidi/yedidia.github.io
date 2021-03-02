const menuBtn = document.getElementById('#menu_button');
let menuOpen = false;


menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        openNav();
    } else {
        closeNav();
    }
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
    menuBtn.classList.add('open');
    menuOpen = true;
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
    menuBtn.classList.remove('open');
    menuOpen = false;
}


