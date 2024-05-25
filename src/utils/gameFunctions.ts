import { t_gameMatrix } from "./zod";

function getSurroundingCells(
  _rowId: number,
  _colId: number,
  _board: t_gameMatrix
) {
  const rowCount = _board!.length;
  const colCount = _board![0].length;
  const surroundingCells: Array<Array<number>> = [];

  const colSetter = (row: number, col: number) => {
    if (row === _rowId) {
      if (col === 0) {
        surroundingCells.push([row, 1]);
      } else if (col === colCount - 1) {
        surroundingCells.push([row, col - 1]);
      } else {
        {
          surroundingCells.push([row, col - 1]);
          surroundingCells.push([row, col + 1]);
        }
      }
    } else {
      if (col === 0) {
        surroundingCells.push([row, col]);
        surroundingCells.push([row, 1]);
      } else if (col === colCount - 1) {
        surroundingCells.push([row, col]);
        surroundingCells.push([row, col - 1]);
      } else {
        surroundingCells.push([row, col]);
        surroundingCells.push([row, col - 1]);
        surroundingCells.push([row, col + 1]);
      }
    }
  };

  if (_rowId === 0) {
    colSetter(0, _colId);
    colSetter(1, _colId);
  }
  if (_rowId === rowCount - 1) {
    colSetter(_rowId, _colId);
    colSetter(_rowId - 1, _colId);
  }
  if (_rowId !== 0 && _rowId !== rowCount - 1) {
    colSetter(_rowId, _colId);
    colSetter(_rowId - 1, _colId);
    colSetter(_rowId + 1, _colId);
  }

  return surroundingCells;
}

function getSurroundingBombs(
  _rowId: number,
  _colId: number,
  _board: t_gameMatrix
) {
  let count = 0;

  const potentialBombs = getSurroundingCells(_rowId, _colId, _board);

  potentialBombs.forEach((p) => {
    if (_board![p[0]][p[1]].isBomb) {
      count = count + 1;
    }
  });

  return count > 0 ? count : null;
}

function editCell(_rowId: number, _colId: number, _board: t_gameMatrix) {
  if (_board[_rowId][_colId].open || _board[_rowId][_colId].isBomb) {
    console.log("err Cell is already open", _board[_rowId][_colId]);
    return _board; // stop if the cell is already open
  }
  const surroundingBombs = getSurroundingBombs(_rowId, _colId, _board);
  if (!surroundingBombs) {
    // getSurroundingCells(_rowId, _colId, _board).forEach((cell) => {
    //   // _board = editCell(cell[0], cell[1], _board);
    //   console.log("err", cell, cell[0], cell[1]);
    // });
    const surroundingCells = getSurroundingCells(_rowId, _colId, _board);
    for (let i = 0; i < surroundingCells.length; i++) {
      _board[_rowId][_colId].open = true;
      _board[_rowId][_colId].bombsTouching = surroundingBombs;
      _board = editCell(surroundingCells[i][0], surroundingCells[i][1], _board);
    }
  } else {
    _board[_rowId][_colId].open = true;
    _board[_rowId][_colId].bombsTouching = surroundingBombs;
  }

  return _board;
}

export function updateBoard(
  _rowId: number,
  _colId: number,
  _board: t_gameMatrix
) {
  let tempBoard = _board ?? [];
  tempBoard = editCell(_rowId, _colId, tempBoard); // use editCell function here
  return tempBoard!.map((row) => row.map((col) => col));
}

export function setFlag(_rowId: number, _colId: number, _board: t_gameMatrix) {
  const newBoard = _board!.map((row, i) => {
    if (i === _rowId) {
      return row.map((col, j) => {
        if (j === _colId) {
          return {
            ...col,
            hasFlag: !col.hasFlag,
          };
        }
        return col;
      });
    }
    return row;
  });
  return newBoard;
}
