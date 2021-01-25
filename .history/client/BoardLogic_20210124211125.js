import React from "react";
import Board from "./Board";
export default class BoardLogic extends React.Component {
  constructor(props) {
    super(props);
    {
    }
  }
  table(){
    return
  }
  validCell(position) {}
  render() {
    console.log("this is props", this.props);
    const table = this.props.table;
    // console.log("this is table", this.state.table);
    return <div>{table}</div>;
  }
}
