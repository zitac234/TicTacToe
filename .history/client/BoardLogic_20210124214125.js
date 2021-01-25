import React from "react";

export default class BoardLogic extends React.Component {
  validCell(position) {
    let table = this.props.table;
    let [r, c] = [postion[0], position[1]];
    cell = table.rows[r].cells[c];
    
  }
  render() {
    return <div>{this.props.tablefun()}</div>;
  }
}
