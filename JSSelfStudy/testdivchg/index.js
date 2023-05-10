const cells = document.querySelectorAll(".cell");
let options = ["", "", "", "", "", "", "", "", ""];
initialize();
const btn = document.getElementById("btn");
btn.addEventListener("click",alert(21));
function initialize() {
    btn.addEventListener("click",alert(21));
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
}

function cellClicked() {
  alert("Clicked!");
  const cellIndex = this.getAttribute("cellIndex");
  updateCell(this,cellIndex)
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    
}