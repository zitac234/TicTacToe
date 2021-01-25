import React from "react";
import Board from "./Board";
export default class BoardLogic extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      table
    }
  }
  validCell(position) {}
  render() {
    console.log("this is props", this.props);
    console.log("this is table", table);
    return <Board />;
  }
}
