import React from "react";
import Board from "./Board";
export default class BoardLogic extends React.Component {
  constructor(props) {
    super(props);
    {
    }
  }
  tabled() {
    return <div></div>(;
  }
  validCell(position) {}
  render() {
    console.log("this is props", this.props);
    // console.log("this is table", this.state.table);
    return <div>{this.tabled()}</div>;
  }
}