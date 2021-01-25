import React from "react";
import Board from "./Board";
export default class BoardLogic extends React.Component {
  componentDidMount() {
    const table = this.props.table;
    console.log(table);
  }
  validCell(position) {}
  render() {
    console.log("this is props", this.props);
    // s
    // console.log("this is table", table);
    return <div>{this.props.tablefun()}</div>;
  }
}
