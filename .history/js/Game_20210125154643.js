import Player from "./Player.js";
import BoardLogic from "./BoardLogic.js";
// const Player = require("./Player");
// const BoardLogic = require("./BoardLogic");
class Game {
  constructor(player1, player2, mark1, mark2) {
    this.board = document.getElementById("mytable");
    this.player1 = new Player(player1, mark1);
    this.player2 = new Player(player2, mark2);
    this.currentPlayer = this.player1;
    this.BoardLogic = new BoardLogic();
  }
  switchTurn() {
    this.currentPlayer === this.player1
      ? (this.currentPlayer = this.player2)
      : (this.currentPlayer = this.player1);
    return this.currentPlayer;
  }
  play() {
    while (this.BoardLogic.avaibleEmptyPositions()) {
      let mark = this.currentPlayer.mark;
      this.BoardLogic.placeMark(mark);
      if (this.BoardLogic.win(mark)) {
        return `${this.currentPlayer.name}, you won!!!`;
      }
      this.switchTurn();
    }
    return "Draw good play";
  }
}
let myGame = new Game("player1", "player2", "X", "O");
myGame.play();
