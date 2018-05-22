// function divCreate(){
//     var newDiv = document.createElement('div');
//     newDiv.className= 'gameCell';
//     newDiv.id = 'cell';
//     newDiv.textContent = "testing 1 2 3";
//     //newDiv.setAttribute('onmouseenter', blackOut);
     
//     var newContent =document.getElementById('gameCells');
//     newContent.appendChild(newDiv);
// }

// var gridSize = 16;
// for (i = 0; i < gridSize; i++){
//     divCreate();
// }

// document.getElementsByClassName('.gameCell').onmouseover = function() {blackOut()};

// function blackOut(){
//     // var cell = document.getElementsByClassName('gameCell');
//     // cell.style.backgroundColor = 'black'
//     console.log('test')
//}

function divCreate(numDivs){
    
    for(i = 0; i < numDivs; i++){
        for (j = 0; j < numDivs; j++){
            var gridSquare = document.createElement('div');
            gridSquare.className = 'gridSquare';
            var apply = document.getElementById('gameCells');
            apply.appendChild(gridSquare);
        }
      }
    }
divCreate(6);

var slider = document.getElementById("rangeBar");
var output = document.getElementById("gridSize");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};