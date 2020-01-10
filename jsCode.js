const NUM_OF_COLS = 8;
const NUM_OF_ROWS = 8;

const getTable = () => document.getElementById("tableGrid");

const createRow = function(tableRow, colorDecider) {
  const cell = document.createElement("th");
  const color = colorDecider == 0 ? "white" : "black";
  cell.className = color;
  tableRow.appendChild(cell);
  return tableRow;
};

const createChessBoard = function() {
  const table = document.getElementById("tableGrid");
  for (let y = 0; y < NUM_OF_ROWS; y++) {
    let tableRow = document.createElement("tr");
    let colorDecider = y % 2;
    for (let x = 0; x < NUM_OF_COLS; x++) {
      tableRow = createRow(tableRow, colorDecider);
      colorDecider = (colorDecider + 1) % 2;
    }
    table.appendChild(tableRow);
  }
};

const main = function() {
  createChessBoard();
};
