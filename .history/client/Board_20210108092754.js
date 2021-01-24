import React, { Component } from "react";
import Computer from "./Computer";
const table = document.createElement("table");
export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winner:false,
      draw:false,
      PlayerMark: "O",
      ComputerMark: "X",
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
  }
  evaluateWin() {
    let ComputerWins = this.win(this.state.Computermark);
    let PlayerWins = this.statewin(this.state.Playermark);
    return ComputerWins ? 10 : PlayerWins ? -10 : 0;
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
    let cell;
    table.addEventListener("click", (event) => {
      const index = this.refs.child.findBestMove();
      console.log("this is index", index);
      const cellId = event.target.id;
      if (mark === this.state.PlayerMark) {
        cell = table.rows[index[0]].cells[index[1]];
        console.log("this is cell", cell);
      } else {
        cell = document.getElementById(cellId);
      }
      if (!cell.innerHTML) {
        cell.innerHTML = mark;
        if (this.win(mark)) console.log("You Won!!!!!!!!");
        mark = this.switchTurn(mark);
        this.forceUpdate();
      }
    });
  }

  minimax(grid, depth, isMax) {
    let score = this.evaluateWin();
    if (score === 10) return score;
    if (score === -10) return score;
    if (!this.emptyCell()) return 0;
    if (isMax) {
      let best = -1000;
      for (let i = 0; i < 3; i++) {
        for (let n = 0; n < 3; n++) {
          if (this.props.emptyCell([i, n])) {
            let cell = grid.rows[i].cells[n];
            cell.innerHTML = this.state.ComputerMark;
            best = Math.max(best, this.minimax(grid, depth + 1, !isMax));
            cell.innerHTML = "";
          }
        }
      }
      return best;
    } else {
      let best = 1000;
      for (let i = 0; i < 3; i++) {
        for (let n = 0; n < 3; n++) {
          if (this.props.emptyCell([i, n])) {
            let cell = grid.rows[i].cells[n];
            cell.innerHTML = this.state.Playermark;
            best = Math.min(best, this.minimax(grid, depth + 1, !isMax));
            cell.innerHTML = "";
          }
        }
      }
      return best;
    }
  }
  findBestMove() {
    let bestMove = -1000;
    let moveIndex = [0, 0];
    for (let i = 0; i < 3; i++) {
      for (let n = 0; n < 3; n++) {
        if (this.emptyCell([i, n])) {
          let cell = this.state.grid.rows[i].cells[n];
          cell.innerHTML = this.state.Computermark;
          let moveEval = this.minimax(this.state.grid, 0, true);
          cell.innerHTML = "";

          if (moveEval > bestMove) {
            moveIndex = [i, n];
            bestMove = moveEval;
          }
        }
      }
    }
    return moveIndex;
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
        {this.state.mounted
          // <Computer
          //   ref="child"
          //   switchTurn={this.switchTurn}
          //   win={this.win}
          //   diagWin={this.diagWin}
          //   colWin={this.colWin}
          //   rowWin={this.rowWin}
          //   grid={this.state.grid}
          //   emptyCell={this.emptyCell}
          //   PlayerMark={this.state.PlayerMark}
          //   ComputerMark={this.state.ComputerMark}
          // />
        )}
      </div>
    );
  }
}
