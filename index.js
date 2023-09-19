let drawColor = "black"; // default color
let isClicked = true;
let drawingStateEl =  document.querySelector("#drawing-state");

function createGrid( size ){
    let containerEl = document.querySelector("#sketch-container");
    let square = containerEl.querySelectorAll("div"); // selects all divs in container
    square.forEach((d) => d.remove); // clears prev. container to prep for  new one

    containerEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    containerEl.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let area = size * size;
    for (let i = 0; i < area; i++) {
        // create a div element (a square)
        let square = document.createElement('div');

        // add a event listener to each square
        square.addEventListener("mouseover", colorSquare);

        square.style.backgroundColor = "white" // default of color pad
        // append a square before the end of the container
        containerEl.insertAdjacentElement("beforeend", square);
    }
    
}
createGrid(16); // initial default drawing container

function changeGridSize(userInput){
    // area limit
    if(userInput >= 2 && userInput <= 100 ){
        createGrid(userInput);
    }else{
        alert("Too Big!");
    }
}

function colorSquare(){
    // "this" refers to a each square(div) the function is called upon
    if(isClicked){
        this.style.backgroundColor = drawColor;
        drawingStateEl.textContent = "Mode: Drawing";

    }else{
        drawingStateEl.textContent = "Mode: Not Drawing";
    }
    
}
// changes drawing color based on button
function changeColor(colorSelected){
    drawColor = colorSelected;
}

function clearGrid(){
    let containerEl = document.querySelector("#sketch-container");
    let square = containerEl.querySelectorAll("div"); // selects all divs in container
    square.forEach((d) => d.style.backgroundColor ="white"); // clears prev. container to prep for  new one
}
// check to see if user has clicked within the canvas area
document.querySelector('#sketch-container').addEventListener('click',()=>{
    isClicked = !isClicked;
});