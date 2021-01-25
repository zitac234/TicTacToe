import React from "react";

export default class BoardLogic extends React.Component {
  validCell(position) {
    let table = this.props.table;
    let [r, c] = [postion[0], position1]];
    //     cell = table.rows[r].cells[c]
    const cell = table;
  }
  render() {
    return <div>{this.props.tablefun()}</div>;
  }
}
