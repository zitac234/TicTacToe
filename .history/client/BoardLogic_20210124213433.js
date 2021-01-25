import React from "react";

export default class BoardLogic extends React.Component {
  validCell(position) {}
  render() {
    console.log("this is props", this.props);
  
    console.log("this is table", table);
    return <div>{this.props.tablefun()}</div>;
  }
}
