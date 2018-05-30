
var val = prompt("enter value");


function createDivs(){

var getContainer = document.getElementById('contain');
contain.style.display= 'grid';
contain.style.gridTemplateColumns = 'repeat('+val+',1fr)';

var createDiv = document.createElement('div');
createDiv.className = "cell";

getContainer.appendChild(createDiv);
}

function createDivRow(){
var getContainer = document.getElementById('contain');

var createRow = document.createElement('div');
createRow.className = "cell";

getContainer.appendChild(createRow);
}

function createBoard(){
for(var i = 0; i < val; i++){
  createDivs();
  for(var j = 0; j < val-1; j++){
  createDivRow() 
  }
}
}

createBoard(val);
 


// //clears grid
// function clearGrid(){

//     location.reload()
// }
