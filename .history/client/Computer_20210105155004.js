import React, { Component } from "react";
import Board from "./Board";
export default class Computer extends Board {
  constructor(props) {
    super(props);
    this.state = {
      Computermark: "X",
      Playermark: "O",
    };
  }
  componentDidMount() {
    console.log("this isi props from Computer", this.props);
  }

  evaluateWin() {
    let ComputerWins = this.propswin(this.state.Computermark);
    let PlayerWins = this.win(this.state.Playermark);
    return ComputerWins ? 10 : PlayerWins ? -10 : 0;
  }
  minimax(board, depth, isMax) {}
}