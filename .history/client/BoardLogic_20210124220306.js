import React from "react";

export default class BoardLogic extends React.Component {
  constructor(props) {
    super(props);
    this.validCell = this.validCell.bind(this);
  }
  componentDidMount() {
    let table = this.props.table;

    console.log("checking if working", this.validCell("57"));
  }
  validCell(position) {
    console.log("call this fun");
    let [r, c] = [Number(position[0]), Number(position[1])];
    return ( r < 3 && c< 3) ? true : false;
  }
  render() {
    return <div>{this.props.tablefun()}</div>;
  }
}
