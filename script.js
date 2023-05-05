'use strict';

confirm('change pictures using buttons or arrows on the keyboard');

let imgIndex = 1;
showSlides(imgIndex);

function moveRight(n) {
  showSlides(imgIndex += n);
}

function moveLeft(n) {
  showSlides(imgIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("image");
    if (n > slides.length) {imgIndex = 1}    
    if (n < 1) {imgIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[imgIndex-1].style.display = "block";  
}

window.addEventListener('keydown', function(s) {
    console.log(s.keyCode);
    const move = this.document.querySelector(`[data-key="${s.keyCode}"]`);
    console.log(move);
    if (s.keyCode === 37) {
        moveRight(1);
    } else if (s.keyCode === 39) {
        moveLeft(-1)
    } else {
        return;
    }
})





