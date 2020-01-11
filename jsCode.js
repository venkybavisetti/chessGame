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

class Bishop {
  constructor(position, img) {
    this.position = position.slice();
    this.img = img;
  }
  get location() {
    return this.position.slice();
  }
  get image() {
    return this.img;
  }
}

class Knight {
  constructor(position, img) {
    this.position = position.slice();
    this.img = img;
  }
  get location() {
    return this.position.slice();
  }
  get image() {
    return this.img;
  }
}

class King {
  constructor(position, img) {
    this.position = position.slice();
    this.img = img;
  }
  get location() {
    return this.position.slice();
  }
  get image() {
    return this.img;
  }
}

class BlackPawn {
  constructor(position, img) {
    this.position = position.slice();
    this.img = img;
  }
  get possibleMoves() {
    const [row, colum] = this.position;
    return [++row, colum];
  }
  get location() {
    return this.position.slice();
  }
  get image() {
    return this.img;
  }
}
class WhitePawn {
  constructor(position, img) {
    this.position = position.slice();
    this.img = img;
  }
  get location() {
    return this.position.slice();
  }
  get image() {
    return this.img;
  }
  get possibleMoves() {
    [row, colum] = this.position;
    return [--row, colum];
  }
}

class Queen {
  constructor(position, img) {
    this.position = position.slice();
    this.img = img;
  }
  get location() {
    return this.position.slice();
  }
  get image() {
    return this.img;
  }
}

class Rook {
  constructor(position, img) {
    this.position = position.slice();
    this.img = img;
  }
  get location() {
    return this.position.slice();
  }
  get image() {
    return this.img;
  }
}

const displayPiecesPositions = function(chessPiecesPositions) {
  let table = getTable();
  for (const piece in chessPiecesPositions) {
    console.log(piece);
    const [x, y] = chessPiecesPositions[piece].location;
    table.rows[x].cells[
      y
    ].innerHTML = `<img src=${chessPiecesPositions[piece].image} alt =${piece} height ='80' width ='70'/>`;
  }
};
const BlackChessPieces = {
  blackRookLeft: new Rook([0, 0], "./chessImages/blackRook.png"),
  blackRookRight: new Rook([0, 7], "./chessImages/blackRook.png"),
  blackKnightLeft: new Knight([0, 1], "./chessImages/blackKnight.png"),
  blackKnightRight: new Knight([0, 6], "./chessImages/blackKnight.png"),
  blackBishopLeft: new Bishop([0, 2], "./chessImages/blackBishop.png"),
  blackBishopRight: new Bishop([0, 5], "./chessImages/blackBishop.png"),
  blackQueen: new Queen([0, 3], "./chessImages/blackQueen.png"),
  blackKing: new King([0, 4], "./chessImages/blackKing.png"),

  blackPawn1: new BlackPawn([1, 0], "./chessImages/blackPawn.png"),
  blackPawn2: new BlackPawn([1, 1], "./chessImages/blackPawn.png"),
  blackPawn3: new BlackPawn([1, 2], "./chessImages/blackPawn.png"),
  blackPawn4: new BlackPawn([1, 3], "./chessImages/blackPawn.png"),
  blackPawn5: new BlackPawn([1, 4], "./chessImages/blackPawn.png"),
  blackPawn6: new BlackPawn([1, 5], "./chessImages/blackPawn.png"),
  blackPawn7: new BlackPawn([1, 6], "./chessImages/blackPawn.png"),
  blackPawn8: new BlackPawn([1, 7], "./chessImages/blackPawn.png")
};

const WhiteChessPieces = {
  whiteRookLeft: new Rook([7, 0], "./chessImages/whiteRook.png"),
  whiteRookRight: new Rook([7, 7], "./chessImages/whiteRook.png"),
  whiteKnightLeft: new Knight([7, 1], "./chessImages/whiteKnight.png"),
  whiteKnightRight: new Knight([7, 6], "./chessImages/whiteKnight.png"),
  whiteBishopLeft: new Bishop([7, 2], "./chessImages/whiteBishop.png"),
  whiteBishopRight: new Bishop([7, 5], "./chessImages/whiteBishop.png"),
  whiteQueen: new Queen([7, 3], "./chessImages/whiteQueen.png"),
  whiteKing: new King([7, 4], "./chessImages/whiteKing.png"),

  whitePawn1: new WhitePawn([6, 0], "./chessImages/whitePawn.png"),
  whitePawn2: new WhitePawn([6, 1], "./chessImages/whitePawn.png"),
  whitePawn3: new WhitePawn([6, 2], "./chessImages/whitePawn.png"),
  whitePawn4: new WhitePawn([6, 3], "./chessImages/whitePawn.png"),
  whitePawn5: new WhitePawn([6, 4], "./chessImages/whitePawn.png"),
  whitePawn6: new WhitePawn([6, 5], "./chessImages/whitePawn.png"),
  whitePawn7: new WhitePawn([6, 6], "./chessImages/whitePawn.png"),
  whitePawn8: new WhitePawn([6, 7], "./chessImages/whitePawn.png")
};

const main = function() {
  createChessBoard();
  displayPiecesPositions(WhiteChessPieces);
  displayPiecesPositions(BlackChessPieces);
};
