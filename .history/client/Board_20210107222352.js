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
      mounted: false,
    };
    this.child = React.createRef();
    this.placeMark = this.placeMark.bind(this);
    this.emptyCell = this.emptyCell.bind(this);
    this.rowWin = this.rowWin.bind(this);
    this.colWin = this.colWin.bind(this);
    this.diagWin = this.diagWin.bind(this);
    this.win = this.win.bind(this);
    this.switchTurn = this.switchTurn.bind(this);
  }
  componentDidMount() {
    this.myTable();
    this.placeMark();
    this.setState({ mounted: true });
    console.log("this is porps from board", this.props);
  }
  emptyCell(index) {
    let cell;
    let table = this.state.grid;
    if (index) {
      let [r, c] = [index[0], index[1]];
      cell = table.rows[r].cells[c];
      return cell.innerHTML === "" ? true : false;
    } else {
      for (let i = 0; i < 3; i++) {
        for (let n = 0; n < 3; n++) {
          cell = table.rows[i].cells[n];
          if (cell.innerHTML === "") return true;
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
    console.log("this is mark", mark);
    table.addEventListener("click", (event) => {
      const cellId = event.target.id;
      const cell = document.getElementById(cellId);
      if (!cell.innerHTML) {
        cell.innerHTML = mark;
        if (this.win(mark)) console.log("You Won!!!!!!!!");
        mark = this.switchTurn(mark);
        this.forceUpdate();
      }
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
    return (
      <div>
        {this.state.mounted && (
          <Computer
            switchTurn={this.switchTurn}
            win={this.win}
            diagWin={this.diagWin}
            colWin={this.colWin}
            rowWin={this.rowWin}
            grid={this.state.grid}
            emptyCell={this.emptyCell}
            PlayerMark={this.state.PlayerMark}
            ComputerMark={this.state.ComputerMark}
          />
        )}
      </div>
    );
  }
}
