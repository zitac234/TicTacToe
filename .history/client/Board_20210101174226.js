import React, { Component } from "react";
const table = document.createElement("table");
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filledCells: [],
      emptyCells: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    };
  }
  componentDidMount() {
    const cells = table.getElementsByTagName("td");
    this.placeMark();
    console.log("this is cells", cells);
  }
  isCellValid(num) {
    const position = table.getElementById(num);
    return position;
  }
  cellFilled(num) {
    this.setState({
      filledCells: [...this.state.filledCells, num],
    });
    this.setState({
      emptyCells: [
        this.state.emptyCells.filter((i) => String(i) !== String(num)),
      ],
    });
  }
  placeMark() {
    const table = document.querySelector("table");
    table.addEventListener('click', (event))
    // // const mark = "X";
    // for (let i = 0; i < cells.length; i++) {
    //   const cell = cells[i];
    //   cell.addEventListener("click", () => {
    //     console.log("this is filledcells", this.state.filledCells);
    //     console.log("this is availbleSpace", this.state.emptyCells);
    //     if (this.state.filledCells.length < 9) {
    //       //       //   const space = this.isCellValid(i);
    //       cell.appendChild("NNEOMA");
    //       this.cellFilled(i);
    //       //   console.log("this is filledcells", this.state.filledCells);
    //       //   console.log("this is availbleSpace", this.state.emptyCells);
    //       console.log("this is step 1");
    //     }
    //   });
    // }
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
