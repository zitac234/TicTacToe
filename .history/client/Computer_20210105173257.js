import React, { Component } from "react";
import Board from "./Board";
const depth = 0;
export default class Computer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Computermark: "X",
      Playermark: "O",
      grid: this.props.grid,
    };
  }
  componentDidMount() {
    console.log("this isi grid from Computer", this.props.grid);
  }

  evaluateWin() {
    let ComputerWins = this.props.win(this.state.Computermark);
    let PlayerWins = this.props.win(this.state.Playermark);
    return ComputerWins ? 10 : PlayerWins ? -10 : 0;
  }

  minimax(grid, depth, isMax) {
    let score = this.evaluateWin();
    grid = this.state.grid;
    if (score === 10) return score;
    if (score === -10) return score;
    if (!this.props.emptyCell()) return 0;
    if (isMax) {
      let best = -1000;
      for (let i = 0; i < 3; i++) {
        for (let n = 0; n < 3; n++) {
          if (this.props.emptyCell([i, n])) {
            let cell = grid.rows[i].cells[n];
            cell.innerHTML = Playermark;
            best = Math.max(best, this.minimax(grid, depth + 1, !isMax));
            cell.innerHTML = "";
          }
        }
      }
      return best;
    }else{
      let best = 1000
      for (let i = 0; i < 3; i++) {
        for (let n = 0; n < 3; n++) {
          if (this.props.emptyCell([i, n])) {
            let cell = grid.rows[i].cells[n];
            cell.innerHTML = Playermark;
            best = Math.max(best, this.minimax(grid, depth + 1, !isMax));
            cell.innerHTML = "";
          }
        }
      }
    }
  }
  render() {
    return null;
  }
}
