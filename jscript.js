function divCreate(){
    var newDiv = document.createElement('div');
    newDiv.className= 'gameCell';
    newDiv.textContent = "testing 1 2 3";
  
    var newContent =document.getElementById('gameCells');
    newContent.appendChild(newDiv);
}

var gridSize = 12;
for (i = 0; i < gridSize; i++){
    divCreate();
}

