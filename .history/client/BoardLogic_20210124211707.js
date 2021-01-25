import React from "react";
import Board from "./Board";
const table = this.props.table;
export default class BoardLogic extends React.Component {
  validCell(position) {}
  render() {
    console.log("this is props", this.props);
    console.log("this is table", this.props.table());
    return <div>{this.props.table()}</div>;
  }
}
