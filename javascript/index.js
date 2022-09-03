function cellHoverHandler(e) {
  e.target.classList.add(`cell-hovered`);
}

function createCell(parentElement, denominator) {
  const newCell = document.createElement(`div`);
  const parentHeight = parentElement.offsetWidth;
  const newCellHeight = `${Math.floor(parentHeight / denominator)}px`;
  newCell.style.width = newCellHeight;
  newCell.style.height = newCellHeight;
  newCell.classList.add("cell");
  newCell.addEventListener("mouseover", (e) => {
    cellHoverHandler(e);
  });
  parentElement.appendChild(newCell);
}

function createGrid(gridSize) {
  if(gridSize>=100){return true};
  const NEW_CONTAINER = document.createElement("div");
  const BODY = document.querySelector("body");
  NEW_CONTAINER.classList.add(`container`);
  BODY.appendChild(NEW_CONTAINER);
  const CONTAINER = document.querySelector(".container");
  for (let i = 0; i < gridSize * gridSize; i++) {
    createCell(CONTAINER, gridSize);
  }
}

function removeGrid() {
  const BODY = document.querySelector("body");
  const CONTAINER = document.querySelector(".container");
  if (CONTAINER !== null) {
    BODY.removeChild(CONTAINER);
  }
}

function createButtonOnClickHandler() {
  removeGrid();
  const gridSize = prompt("Please enter valid grid size below 100");
  createGrid(gridSize);
}

function clearButtonOnClickHandler() {
  const cells = document.querySelectorAll(".cell");
  if (cells.length == 0) {
    return;
  }
  cells.forEach((cell)=>{
    cell.classList.remove('cell-hovered');
  })
}
const CREATE_BUTTON = document.querySelector("#createGridButton");
CREATE_BUTTON.addEventListener("click", createButtonOnClickHandler);

const CLEAR_BUTTON = document.querySelector("#clearGridButton");
CLEAR_BUTTON.addEventListener("click", clearButtonOnClickHandler);
