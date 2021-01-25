import React from "react";
import Board from "./Board";
export default class BoardLogic extends React.Component {
  validCell(position) {}
  render() {
    console.log("this is props", this.props);
    const table = this.props.table;
    return <div>{this.props.tablefun()}</div>;
  }
}
