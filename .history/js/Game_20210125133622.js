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
    console.log('this is player1', this.player1)
    console.log('this is player2', this.player1)
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
      if (this.BoardLogic.win(mark)) {
        return `${this.currentPlayer.name}, you won!!!`;
      }
      this.switchTurn();
    }
    return "Draw good play";
  }
}
let myGame = new Game();
myGame.play();
