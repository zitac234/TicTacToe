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
      const row = rows[i];
      const cell = row.getElementsByTagName("td");
      if ((cell[0].innerHTML === cell[1].innerHTML) === cell[2].innerHTML) {
          console('this is inner')
        return true;
      } else {
        return false;
      }
    }
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
          if (this.rowWin(mark)) console.log("you won");
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
