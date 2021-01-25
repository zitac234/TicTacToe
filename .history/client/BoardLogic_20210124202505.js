import React from "react";
import Board from "./Board";
export default class BoardLogic extends React.Component {
  constructor(props) {
    super(props);
  }
  validCell(position) {}
  render() {
    console.log('this is ')
    return <Board />;
  }
}
