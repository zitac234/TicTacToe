import React from "react";
import Board from "./Board";
export default class BoardLogic extends React.Component {
  componentDidMount(){
    const table = this.props.table()
  }
  validCell(position) {}
  render() {
    console.log("this is props", this.props);
    console.log("this is table", );
    return <div>{this.props.table()}</div>;
  }
}
