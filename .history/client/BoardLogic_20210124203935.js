import React from "react";
import Board from "./Board";
const table = 
export default class BoardLogic extends React.Component {
  constructor(props) {
    super(props);
  }
  validCell(position) {}
  render() {
    console.log("this is props", this.props);
    console.log("this is table", table);
    return <Board />;
  }
}
