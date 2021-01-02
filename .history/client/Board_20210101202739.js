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
  rowWin(mark) {
    const rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i].getElementsByTagName("td");
      console.log("this is row", row);
         for (let n = 0; n < row.length; n++) {
      //     const cell = row[0];
      //     console.log("this is cell", cell);
      //     console.log("this is innerhtml", cell.innerHTML);
      //     if (cell.innerHTML !== mark) return false;
         }
      //   console.log("this is mark", mark);
    }
    // return true;
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
      const mark = "Nneoma";
      if (!cell.innerHTML) {
        cell.addEventListener("click", (event) => {
          const cellId = event.target.id;
          document.getElementById(cellId).innerHTML = mark; //change this mark later
          this.rowWin(mark);
          //   if (this.rowWin(mark)) console.log("you won");
          event.stopPropagation();
        });
      }
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
