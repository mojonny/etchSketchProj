var htmlElements = "";
//starting 16x16grid for page load
function startGrid (x){
    for (var i = 0; i < x; i++) {  
        htmlElements += '<div class="box"></div>';
        var container = document.getElementById("container");
        container.innerHTML = htmlElements;}

    var boxes = document.getElementsByClassName('box');

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].onmouseover = function(e) {
        var backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        this.style['background-color'] = backgroundColor;}}
}

//Custom Grid with user input
function newGrid (){
    numBoxes = parseInt(prompt ("Pick a number between 1 and 100")); 
    var newHtmlE="";

    for (i=0; i<numBoxes*numBoxes; i++) { 
        newHtmlE += '<div class="box"></div>';
        var container = document.getElementById("container");
        container.innerHTML = newHtmlE;}

    let gridTemplateColumns = 'repeat('+numBoxes+', 1fr)';
        container.style.gridTemplateColumns = gridTemplateColumns;
        container.style.gridTemplateRows = gridTemplateColumns;

    var newBoxes = document.getElementsByClassName('box');

    for (var i = 0; i < newBoxes.length; i++) {
        newBoxes[i].onmouseover = function(e) {
        var backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        this.style['background-color'] = backgroundColor;}}
}

   
    
    
    
      
  
    
    
   
