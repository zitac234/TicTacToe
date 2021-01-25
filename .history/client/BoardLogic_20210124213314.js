import React from "react";
import Board from "./Board";
export default class BoardLogic extends React.Component {
  // componentDidMount() {
  //   console.log(table);
  // }
  validCell(position) {}
  render() {
    console.log("this is props", this.props);
    const table = this.props.table;
    console.log("this is table", table);
    return <div>{this.props.tablefun()}</div>;
  }
}
