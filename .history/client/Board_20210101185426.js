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
    const cells = document.querySelector("tr");
    for (let i = 0; i < cells.length; i++) {
      let cell = cells[i];
      console.log('this is i:')
      cell.addEventListene("click", (event) => {
        const cellId = event.target.id;
        console.log("this is cellId", cellId);
      });
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
