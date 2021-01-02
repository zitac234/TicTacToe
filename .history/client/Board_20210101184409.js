import React, { Component } from "react";
const table = document.createElement("table");
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openCells: 9,
    };
  }
  componentDidMount() {
    this.placeMark();
  }
  cellFilled() {
    this.setState({
      openCells: this.state.openCells - 1,
    });
  }
  placeMark() {
    const table = document.querySelector("table");
    table.addEventListener("click", (event) => {
      const cellId = event.target.id;
      if (this.state.openCells > 0) {
        document.getElementById(cellId).innerHTML = "Nneoma";
        console.log("this is filledcells", this.state.openCells);
        this.cellFilled();
        console.log("this is after filledcells", this.state.openCells);
      }
    });
  }
  
  render() {
    return <div>{this.myTable()}</div>;
  }
}
