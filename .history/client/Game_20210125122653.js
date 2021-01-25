const Player = require("./Player");
const BoardLogic = require("./BoardLogic");
class Game {
  constructor() {
    this.board = document.getElementById("mytable");
    this.player1 = new Player(player1, "X");
    this.player2 = new Player(player2, "O");
    this.currentPlayer = this.player1;
  }
  switchTurn() {
    this.currentPlayer === this.player1
      ? (this.currentPlayer = this.player2)
      : (this.currentPlayer = this.player1);
    return this.currentPlayer;
  }
  play() {}
}
