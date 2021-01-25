

class BoardLogic {
  constructor() {
    super();
  }
  validCell(position) {
    let [r, c] = [Number(position[0]), Number(position[1])];
    return r < 3 && c < 3 && r >= 0 && c >= 0 ? true : false;
  }
  emptyCell(position) {
    const cell = table.rows[Number(position[0])].cells[Number(position[1])];
    return !cell.innerHTML ? true : false;
  }
  placeMark(position, mark) {
    const cell = table.rows[Number(position[0])].cells[Number(position[1])];
    cell.innerHTML = mark;
  }
  winRow(mark) {
    for (let i = 0; i < 3; i++) {
      for (let n = 0; n < 3; n++) {
        const cell = table.rows[i].cells[n];
        if (cell.innerHTML !== mark) {
          return false;
        }
      }
      return true;
    }
  }
  winCol(mark) {
    for (let i = 0; i < 3; i++) {
      for (let n = 0; n < 3; n++) {
        const cell = table.rows[n].cells[i];
        if (cell.innerHTML !== mark) {
          return false;
        }
      }
      return true;
    }
  }
  winDiag(mark) {
    let n = 2;
    for (let i = 0; i < 3; i++) {
      const table = this.props.table;
      const positiveCell = table.rows[i].cells[i];
      const negativeCell = table.rows[i].cells[n];
      if (positiveCell.innerHTML !== mark && negativeCell.innerHTML !== mark) {
        return false;
      }
      n--;
    }
    return true;
  }
  win(mark) {
    if (this.winDiag(mark) || this.winCol(mark) || this.winRow(mark)) {
      return true;
    }
  }
  avaibleEmptyPositions() {
    for (let i = 0; i < 3; i++) {
      for (let n = 0; n < 3; n++) {
        const table = this.props.table;
        if (this.emptyCell(`${i}${n}`)) {
          return true;
        }
      }
    }
    return false;
  }
}
module.exports = BoardLogic;
