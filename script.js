var htmlElements = "";

function startGrid (x){
for (var i = 0; i < x; i++) {  
        
        htmlElements += '<div class="box"></div>';
        var container = document.getElementById("container");
        container.innerHTML = htmlElements;}
        
let boxes = document.querySelectorAll('.box')
        
for (let i=0; i<boxes.length; i++) {
        boxes[i].addEventListener('mouseover', 
        () => {boxes[i].classList.add('colorIn');});
        }
    }
    
    var newHtmlE="";
function newGrid (){
    numBoxes = parseInt(prompt ("Pick a number between 1 and 100")); 

    for (i=0; i<numBoxes*numBoxes; i++) { 
        newHtmlE += '<div class="box2"></div>';
        var container2 = document.getElementById("container2");
        container2.innerHTML = newHtmlE;
    }
    let gridTemplateColumns = 'repeat('+numBoxes+', 5vw)';
        container2.style.gridTemplateColumns = gridTemplateColumns;
        container2.style.gridTemplateRows = gridTemplateColumns;
        
    let boxes2 = document.querySelectorAll('.box2')
    for (let i=0; i<boxes2.length; i++) {boxes2[i].addEventListener('mouseover', 
    () => {boxes2[i].classList.add('colorIn');});
    }
    }    
      
    

   



    /*  
    totalBoxes = numBoxes * numBoxes;
    container2.style.gridTemplateColumns = "repeat("+numBoxes+", 2vw)"; 
    container2.style.gridTemplateRows = "repeat("+numBoxes+", 2vw)";

     
userPick = prompt ("What size grid would you like?Choose any integer from 1 to 100.");

if (userPick >= 1 && userPick <= 100) {
var userPick = 16;
document.getElementById("btn").onclick = function() { 
        
    if (userPick >= 1 && userPick <= 100) {
        for (var i = 0; i < userPick*userPick; i++) {
            htmlElements += '<div class="box"></div>';
            var container = document.getElementById("container");
            container.innerHTML = htmlElements;}}
    else {
          return prompt ("That didn't work, pick a different number.");*/