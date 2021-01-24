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
  }
  emptyCell(index) {
    let cell;
    let table = this.state.grid; 
    if (index) {
      //index = [row, column] of cell, if cell is passed
      let [r, c] = [index[0], index[1]];
      cell = table.rows[r].cells[c]; //get square of table (global variable)
      return cell.innerHTML === "" ? true : false; //if cell doesnt have mark, return true, else false
    } else {
      for (let i = 0; i < 3; i++) {
        for (let n = 0; n < 3; n++) {
          cell = table.rows[i].cells[n]; //loop through each cell in grid
          if (cell.innerHTML === "") {
            // if one cell is empty, return true
            return true;
          }
        } //no cells are empty, return false
        return false;
      }
    }
  }
  rowWin(mark) {
    //checking for 3 of same mark in a row
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
    //checking for 3 of same mark in a col
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
    //checking for 3 of same mark in a diagonal
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
  //check all 3 win conditions
  win(mark) {
    if (this.diagWin(mark) || this.colWin(mark) || this.rowWin(mark)) {
      return true;
    }
  }
  //change mark signaling alternating turns
  switchTurn(mark) {
    if (mark === this.state.PlayerMark) {
      return this.state.ComputerMark;
    } else {
      return this.state.PlayerMark;
    }
  }
  //each time I place a mark, i add a click event listener to the table that will trigger later
  //the trigger is:
  // change the cells innerHTML to the mark
  // check the win condition
  // if no win, switch turns
  // forceUpdate()
  placeMark() {
    let mark = this.state.PlayerMark;
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
  // create table, triggered everytime the page renders
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
        {/* {this.myTable()} */}
        {this.state.mounted && (
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
        )}
      </div>
    );
  }
}
