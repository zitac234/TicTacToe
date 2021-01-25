import React from "react";

export default class BoardLogic extends React.Component {
  constructor(props) {
    super(props);
    this.validCell = this.validCell.bind(this);
  }
  componentDidMount() {
    let table = this.props.table;

    console.log("checking if working", this.validCell("02"));
  }
  validCell(position) {
    console.log("call this fun");
    let table = this.props.table;
    let [r, c] = [position[0], position[1]];
    const cell = table.rows[r].cells[c];
    console.log(cell);
    cell ? true : false;
  }
  render() {
    return <div>{this.props.tablefun()}</div>;
  }
}
