import React, { Component } from "react";
import { win } from "./Board";
export default class Computer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Computermark: "X",
      Playermark: "O",
    };
  }
  evaluateWin() {
    let ComputerWins = win(this.state.Computermark);
    let PlayerWins = win(this.state.Playermark);
    return ComputerWins ? 10 : PlayerWins ? -10 : 0;
  }
  minimax(board )
}
