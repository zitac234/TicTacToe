import React, { Component } from "react";
import Board from "./Board";
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
  emptyCell() {
    let space = ()
  }


  minimax(grid, depth, isMax) {
    let score = this.evaluateWin();
    if (score === 10) return score;
    if (score === -10) return score;
    if(score === 0){

    }
  }
  render() {
    return null;
  }
}
