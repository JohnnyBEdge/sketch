
var val = prompt("enter value");


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

function createBoard(){
for(var i = 0; i < val; i++){
  createDivs();
  for(var j = 0; j < val-1; j++){
  createDivRow() 
  }
}
}

createBoard(val);

//changes background to black, not yet working

//  let cellColor = 'black';

// var testing = document.getElementsByClassName("cell");
// testing.addEventListener('mouseover', (e) => {
//   e.target.style.backgroundColor = 'black';
// });
  //     for (var i = 0; i < test.length; i++){
  //   test[i].style.backgroundColor = 'yellow';
  // };

  // testing.addEventListener('mouseover',
  // function(e){
  //     e.target.style.backgroundColor = 'black';
  // });

 //Turns grid color black
    var colorBlack = document.getElementsByClassName("cell");
    for (var i=0;i < colorBlack.length;i++){
        (colorBlack[i].addEventListener('mouseover', function(e){
          e.target.style.backgroundColor = 'black';
        })
      )}
  

