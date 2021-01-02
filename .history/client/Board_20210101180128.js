import React, { Component } from "react";
const table = document.createElement("table");
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filledCells: [],
    };
  }
  componentDidMount() {
    this.placeMark();
    console.log("first run");
  }
  cellFilled(num) {
    this.setState({
      filledCells: ,
    });
  }
  placeMark() {
    const table = document.querySelector("table");
    table.addEventListener("click", (event) => {
      const cellId = event.target.id;
      if (this.state.filledCells.length < 9)
        document.getElementById(cellId).innerHTML = "Nneoma";
      console.log("this is filledcells", this.state.filledCells);
      this.cellFilled(cellId);
    });
  }
  myTable() {
    let counter = 1;
    for (let row = 0; row < 3; row++) {
      let tr = document.createElement("tr");
      for (let col = 0; col < 3; col++) {
        let td = document.createElement("td");
        td.setAttribute("id", counter);
        tr.appendChild(td);
        counter++;
      }
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  }
  render() {
    return <div>{this.myTable()}</div>;
  }
}
