import { IsoTwoTone } from "@material-ui/icons";
import React, { Component } from "react";
import Computer from "./Computer";
const table = document.createElement("table");
let counter = 0;
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: table,
      PlayerMark: "O",
      ComputerMark: "X",
    };
  }
  componentDidMount() {
    console.log("this is props", this.props);
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
  upDateCell(cellId,mark){
    const []
        const mytable = table.row[i].cells[n]
    this.setState({grid: })
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
    console.log("Mark b4", mark);
    if (mark === this.state.PlayerMark) {
      return this.state.ComputerMark;
    } else {
      return this.state.PlayerMark;
    }
  }
  placeMark() {
    let mark = this.state.PlayerMark;
    const cells = table.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
      let cell = cells[i];
      if (!cell.innerHTML) {
        cell.addEventListener("click", (event) => {
          const cellId = event.target.id;
          document.getElementById(cellId).innerHTML = mark;
          console.log("this is cellid", cellId);
          mark = this.switchTurn(mark);
          if (this.win(mark)) console.log("You Won!!!!!!!!");
          event.stopPropagation();
        });
      }
    }
  }

  myTable() {
    for (let row = 0; row < 3; row++) {
      let tr = document.createElement("tr");
      tr.setAttribute("id", row);
      for (let col = 0; col < 3; col++) {
        let td = document.createElement("td");
        td.setAttribute("id", `[${row}, ${col}]`);
        counter++;
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    document.body.appendChild(table);
  }
  render() {
    console.log("this is grid from board", table);
    return (
      <div>
        {this.myTable()}
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
