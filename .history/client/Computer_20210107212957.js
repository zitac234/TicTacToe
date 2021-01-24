import React, { Component } from "react";
import Board from "./Board";

export default class Computer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Computermark: this.props.ComputerMark,
      Playermark: this.props.Playermark,
      grid: this.props.grid,
    };
  }
  componentDidMount() {
    <Board this />;
  }
  evaluateWin() {
    let ComputerWins = this.props.win(this.state.Computermark);
    let PlayerWins = this.props.win(this.state.Playermark);
    return ComputerWins ? 10 : PlayerWins ? -10 : 0;
  }

  minimax(grid, depth, isMax) {
    let score = this.evaluateWin();
    if (score === 10) return score;
    if (score === -10) return score;
    if (!this.props.emptyCell()) return 0;
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
        if (this.props.emptyCell([i, n])) {
          let cell = this.state.grid.rows[i].cells[n];
          cell.innerHTML = this.state.Computermark;
          // console.log(
          //   "this is grid pass just before recursion",
          //   this.state.grid
          // );
          let moveEval = this.minimax(this.state.grid, 0, true);
          cell.innerHTML = "";

          if (moveEval > bestMove) {
            moveIndex = [i, n];
            bestMove = moveEval;
          }
        }
      }
    }
    console.log("this isbestMove", bestMove);
    console.log("this is moveIndex", moveIndex);
    return moveIndex;
  }
  ComputerPlaceMark() {
    const [r, c] = [this.findBestMove()[0], this.findBestMove()[1]];
    if (this.props.switchTurn() === this.state.ComputerMark) {
      this.state.grid.removeEventListener("click", () => {
        this.state.grid.rows[r].cells[c].innerHTML = this.state.Computermark;
      });
    }
  }
  render() {
    console.log("this is grid from computer", this.state.grid);
    console.log("this findbest move", this.findBestMove());
    const moves = this.findBestMove();
    return null;
  }
}
