import React, { Component } from "react";
import Computer from "./Computer";
const table = document.createElement("table");
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: table,
      PlayerMark: "O",
      ComputerMark: "X",
    };
    this.placeMark = this.placeMark.bind(this);
  }
  componentDidMount() {
    this.placeMark();
  }

  emptyCell(index) {
    let cell;
    if (index) {
      let [r, c] = [index[0], index[1]];
      cell = table.rows[r].cells[c];
      return cell.innerHTML === "" ? true : false;
    } else {
      for (let i = 0; i < 3; i++) {
        for (let n = 0; n < 3; n++) {
          cell = table.rows[i].cells[n];
          if (cell.innerHTML === "") {
            return true;
          }
        }
        return false;
      }
    }
  }

  rowWin(mark) {
    for (let i = 0; i < 3; i++) {
      for (let n = 0; n < 3; n++) {
        const cell = table.rows[i].cells[n];
        if (cell.innerHTML !== mark) {
          return false;
        }
      }
      return true;
    }
  }
  updateTable(myGrid) {
    for (let i = 0; i < 3; i++) {
      for (let n = 0; n < 3; n++) {
        const grid = myGrid.rows[i].cells[n];
        const cell = this.state.grid.rows[i].cells[n];
        if (grid.innerHTML !== cell.innerHTML) cell.innerHTML = grid.innerHTML;
      }
    }
  }
  colWin(mark) {
    for (let i = 0; i < 3; i++) {
      for (let n = 0; n < 3; n++) {
        const cell = table.rows[n].cells[i];
        if (cell.innerHTML !== mark) {
          return false;
        }
      }
      return true;
    }
  }
  diagWin(mark) {
    let n = 2;
    for (let i = 0; i < 3; i++) {
      const positiveCell = table.rows[i].cells[i];
      const negativeCell = table.rows[i].cells[n];
      if (positiveCell.innerHTML !== mark && negativeCell.innerHTML !== mark) {
        return false;
      }
      n--;
    }
    return true;
  }
  win(mark) {
    if (this.diagWin(mark) || this.colWin(mark) || this.rowWin(mark)) {
      return true;
    }
  }

  switchTurn(mark) {
    if (mark === this.state.PlayerMark) {
      return this.state.ComputerMark;
    } else {
      return this.state.PlayerMark;
    }
  }
  placeMark() {
    let mark = this.state.PlayerMark;
    table.addEventListener("click", (event) => {
      const cellId = event.target.id;
      const cell = document.getElementById(cellId);
      if (!cell.innerHTML) {
        document.getElementById(cellId).innerHTML = mark;
        mark = this.switchTurn(mark);
        // this.updateTable(table);
        this.grabTable()
      }
      if (this.win(mark)) console.log("You Won!!!!!!!!");
      event.stopPropagation();
    });
  }
  myTable() {
    for (let row = 0; row < 3; row++) {
      let tr = document.createElement("tr");
      tr.setAttribute("id", row);
      for (let col = 0; col < 3; col++) {
        let td = document.createElement("td");
        td.setAttribute("id", `[${row}, ${col}]`);
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  }
  render() {
    console.log("this is table form board", this.state.grid);
    return (
      <div>
        {this.myTable().onclick={}}
        <Computer
          win={this.win}
          diagWin={this.diagWin}
          colWin={this.colWin}
          rowWin={this.rowWin}
          grid={this.state.grid}
          emptyCell={this.emptyCell}
          PlayerMark={this.state.PlayerMark}
          ComputerMark={this.state.ComputerMark}
        />
      </div>
    );
  }
}
