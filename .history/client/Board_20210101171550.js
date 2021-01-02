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
    const mark = "X";
    if (this.state.emptyCells.includes(num)) {
      const cell = this.isCellValid(num);
      cell.appendChild(mark);
      this.cellFilled(num);
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
