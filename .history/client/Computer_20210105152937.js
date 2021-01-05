import React, { Component } from "react";
import Grid from "./Board";
export default class Computer extendsB {
  constructor(props) {
    super(props);
    this.state = {
      Computermark: "X",
      Playermark: "O",
    };
  }
  evaluateWin() {
    let ComputerWins = Grid.win(this.state.Computermark);
    let PlayerWins = Grid.win(this.state.Playermark);
    return ComputerWins ? 10 : PlayerWins ? -10 : 0;
  }
  minimax(board, depth, isMax) {}
}
