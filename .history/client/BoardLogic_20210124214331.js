import React from "react";

export default class BoardLogic extends React.Component {
  componentDidMount(){
    let table = this.props.table;
    console.log('checking if working' , this.)
  }
  validCell(position) {
    let table = this.props.table;
    let [r, c] = [position[0], position[1]];
    const cell = table.rows[r].cells[c];
    cell ? true : false;
  }
  render() {
    return <div>{this.props.tablefun()}</div>;
  }
}
