// var slider = document.getElementById("rangeBar");
// var output = document.getElementById("gridSize");

// output.innerHTML = slider.value;
// console.log(slider.value)

// // var slideVal = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
//   };


//creates grid

function createGrid(val){ 
    
var apply = document.getElementById('gameCells');

for (var i = 0; i < val; i++){

    var row = document.createElement('div');
        row.className = 'row';

        for( var j = 0; j < val; j++){
            var cell = document.createElement('div');
                cell.className = 'cell';
                row.appendChild(cell);
        }
    apply.appendChild(row);
    }
}

//clears grid
function clearGrid(){

    location.reload()
}