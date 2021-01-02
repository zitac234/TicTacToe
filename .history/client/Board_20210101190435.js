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
    const cells = table.getElementsByTagName("td");
    console.log("this is cells", cells);
    this.placeMark();
  }
  cellFilled() {
    this.setState({
      openCells: this.state.openCells - 1,
    });
  }
  placeMark() {
    const cells = table.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
      let cell = cells[i];
      if (!cell.hasChildNodes()) {
        cell.addEventListener("click", (event) => {
          const cellId = event.target.id;
          console.log("step 1 is working");
          event.stopPropagation();
        });
      }
    }
    //table.addEventListener("click", (event) => {
    // const cellId = event.target.id;
    // if (this.state.openCells > 0) {
    //   document.getElementById(cellId).innerHTML = "Nneoma";
    //   console.log("this is filledcells", this.state.openCells);
    //   this.cellFilled();
    //   console.log("this is after filledcells", this.state.openCells);
    // }
    //});
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
