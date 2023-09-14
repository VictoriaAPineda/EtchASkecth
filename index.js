const containerEl = document.querySelector("#sketch-container");




function grid(numOfSqaures){

    for (let row = 0; row < numOfSqaures; row++) {
       
        for (let col = 0; col < numOfSqaures; col++) {
           const sqDiv = document.createElement("div");
           sqDiv.classList.add("square");
           containerEl.appendChild(sqDiv);
        }
       /// something here>
    }
   
    

};
grid(4);


