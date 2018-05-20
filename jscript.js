function divCreate(){
    var newDiv = document.createElement('div');
    newDiv.className(gameCell)
    newDiv.textContent = "testing 1 2 3";

    var gameCell = document.getElementsByClassName('gameCell');
    gameCell.appendChild(newDiv);
}

var gridSize = 5;
for (i = 0; i < gridSize; i++){
    divCreate();
}

