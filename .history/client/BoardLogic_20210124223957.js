import React from "react";

export default class BoardLogic extends React.Component {
  constructor(props) {
    super(props);
    this.validCell = this.validCell.bind(this);
    this.emptyCell = this.emptyCell.bind(this);
    this.placeMark = this.placeMark.bind(this);
  }
  componentDidMount() {
    console.log(this.emptyCell("0 2"));
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
  render() {
    return <div>{this.props.tablefun()}</div>;
  }
}
