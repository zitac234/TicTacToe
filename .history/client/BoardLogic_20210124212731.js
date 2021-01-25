import React from "react";
import Board from "./Board";
export default class BoardLogic extends React.Component {
  componentDidMount() {
    const table = this.props.tablefun;
  }
  validCell(position) {
    table;
  }
  render() {
    console.log("this is props", this.props);
    return <div>{this.props.tablefun()}</div>;
  }
}
