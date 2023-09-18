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

        square.style.backgroundColor = "blue" // default of color pad
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
    this.style.backgroundColor = "red";
}

