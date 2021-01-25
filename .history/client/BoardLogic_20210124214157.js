import React from "react";

export default class BoardLogic extends React.Component {
  validCell(position) {
    let table = this.props.table;
    let [r, c] = [position[0], position[1]];
    const cell = table.rows[r].cells[c];
  }
  render() {
    return <div>{this.props.tablefun()}</div>;
  }
}
