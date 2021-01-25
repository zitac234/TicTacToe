import React from "react";

export default class BoardLogic extends React.Component {
  constructor(props) {
    super(props);
    this.winRow = this.winRow.bind(this);
    this.validCell = this.validCell.bind(this);
    this.emptyCell = this.emptyCell.bind(this);
    this.placeMark = this.placeMark.bind(this);
    this.winCol = this.winCol.bind(this);
  }
  componentDidMount() {
    this.placeMark("00", "X");
    this.placeMark("10", "X");
    this.placeMark("20", "X");
    console.log(this.winCol("X"));
  }
  validCell(position) {
    let [r, c] = [Number(position[0]), Number(position[1])];
    return r < 3 && c < 3 && r >= 0 && c >= 0 ? true : false;
  }
  emptyCell(position) {
    const table = this.props.table;
    const cell = table.rows[Number(position[0])].cells[Number(position[1])];
    return !cell.innerHTML ? true : false;
  }
  placeMark(position, mark) {
    const table = this.props.table;
    const cell = table.rows[Number(position[0])].cells[Number(position[1])];
    cell.innerHTML = mark;
  }
  winRow(mark) {
    for (let i = 0; i < 3; i++) {
      for (let n = 0; n < 3; n++) {
        const table = this.props.table;
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
        const table = this.props.table;
        const cell = table.rows[n].cells[i];
        if (cell.innerHTML !== mark) {
          return false;
        }
      }
      return true;
    }
  }
  render() {
    return <div>{this.props.tablefun()}</div>;
  }
}
