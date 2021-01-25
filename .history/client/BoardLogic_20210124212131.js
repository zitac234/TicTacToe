import React from "react";
import Board from "./Board";
export default class BoardLogic extends React.Component {
  componentDidMount() {
    const table = this.props.table;
    console.log("this is table", table);
  }
  validCell(position) {}
  render() {
    console.log("this is props", this.props);
    return <div>{this.props.table}</div>;
  }
}
