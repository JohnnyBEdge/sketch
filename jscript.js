function play(){
var val = prompt("Enter grid size 2-100");

//creates divs
function createDivs(){



var getContainer = document.getElementById('screenplay');
getContainer.style.display= 'grid';
getContainer.style.gridTemplateColumns = 'repeat('+val+',1fr)';

var createDiv = document.createElement('div');
createDiv.className = "cell";
createDiv.id= "cells";

getContainer.appendChild(createDiv);
}

function createDivRow(){
var getContainer = document.getElementById('screenplay');

var createRow = document.createElement('div');
createRow.className = "cell";
createRow.id = 'cells';

getContainer.appendChild(createRow);
}

//creates grid
function createBoard(){
  for(var i = 0; i < val; i++){
  createDivs();
  for(var j = 0; j < val-1; j++){
  createDivRow() 
  }
}
}

createBoard();
};
 //Turns grid multicolored
 function colorize(){
    var colorBlack = document.getElementsByClassName("cell");
    for (var i=0;i < colorBlack.length;i++){
        (colorBlack[i].addEventListener('mouseover', function(e){
          e.target.style.backgroundColor = addRandomBackgroundColor(e);
        })
      )}
    }
    
 


    //Turns grid color black
function blackout(){
    var colorBlack = document.getElementsByClassName("cell");
    for (var i=0;i < colorBlack.length;i++){
        (colorBlack[i].addEventListener('mouseover', function(e){
          e.target.style.backgroundColor = 'black';
        })
      )}
    };

    //creates random color

    function addRandomBackgroundColor(e) {
      e.target.style.backgroundColor = randomColor();
    }
    
    function randomColor() {
      return `rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)})`;
    }
    
    function randomNum(max) {
      return Math.floor(Math.random() * Math.floor(max)); //The maximum is exclusive
    };

    function refresh(){
      location.reload();
    };