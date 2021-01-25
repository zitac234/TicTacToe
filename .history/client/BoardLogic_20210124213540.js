import React from "react";

export default class BoardLogic extends React.Component {
  validCell(position) {}
  render() {
    return <div>{this.props.tablefun()}</div>;
  }
}
