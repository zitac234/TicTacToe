const Player = require("./Player");
const BoardLogic = require("./BoardLogic");
class Game {
  constructor() {
    this.board = document.getElementById("mytable");
    this.player1 = new Player(player1, "X");
    this.player2 = new Player(player2, "O");
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
      let position = this.currentPlayer.getPosistion();
      let mark = this.currentPlayer.mark;
      this.BoardLogic.getPosistion(position, mark);
      if(this.BoardLogic.win(mark)){
        return (`${this.current}`)
      }
    }
  }
}
