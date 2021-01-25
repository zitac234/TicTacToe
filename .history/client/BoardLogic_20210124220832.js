import React from "react";

export default class BoardLogic extends React.Component {
  constructor(props) {
    super(props);
    this.validCell = this.validCell.bind(this);
    this.emptyCell = this.emptyCell.bind(this);
  }
  componentDidMount() {}
  validCell(position) {
    let [r, c] = [Number(position[0]), Number(position[1])];
    return r < 3 && c < 3 && r >= 0 && c >= 0 ? true : false;
  }
  emptyCell(position) {
    const table = this.props.table;
    const cell = table.rows[position[0]].cells[position[1]];
    retuen 
  }
  render() {
    return <div>{this.props.tablefun()}</div>;
  }
}
