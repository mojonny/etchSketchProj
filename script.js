var htmlElements = "";
for (var i = 0; i < 256; i++) {
   htmlElements += '<div class="box"></div>';
}
var container = document.getElementById("container");
container.innerHTML = htmlElements;


let boxes = document.querySelectorAll('.box')

for (let i=0; i<boxes.length; i++) {

    boxes[i].addEventListener('mouseover', () => {
        boxes[i].classList.add('colorIn');
    });
    
    } // next i boxes element;

 