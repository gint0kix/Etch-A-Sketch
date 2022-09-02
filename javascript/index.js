const CONTAINER = document.querySelector(`#container`);

function createCell(parentElement,denominator){
    const newCell = document.createElement(`div`);
    const parentHeight = parentElement.offsetHeight;
    const newCellHeight = `${parentHeight/denominator}px`;
    newCell.style.width = newCellHeight;
    newCell.style.height = newCellHeight;
    newCell.style.backgroundColor="red";
    newCell.classList.add('cell');
    parentElement.appendChild(newCell);
}
let gridSize = 4
for(let i=0;i<(gridSize*gridSize);i++){
    createCell(CONTAINER,gridSize);
}