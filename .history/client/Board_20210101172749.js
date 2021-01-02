import React, { Component } from "react";
const table = document.createElement("table");
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filledCells: [],
      emptyCells: [1, 2, 3, 4, 5, 6, 7, 8, 9],
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
    const cells = table.getElementsByTagName("td");
    // const mark = "X";
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      console.log("this is cell", cell);
      console.log('this is ')
      //   cell.addEventListener("click", () => {
      //     if (this.state.emptyCells.includes(Number(i))) {
      //       //   const space = this.isCellValid(i);
      //       cell.appendChild("NNEOMA");
      //       this.cellFilled(i);
      //       console.log("this is step 1");
      //     }
      //   });
    }
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
