// const readline = require("readline-sync");
const table = document.getElementsByTagName("table")[0];
export default class Player {
  constructor(_name, _mark) {
    this.name = _name;
    this.mark = _mark;
  }
  getPosistion() {
    console.log()
    table.addEventListener("click", (event) => {
      const position = event.target.id;
      return position;
    });
  }
}
// module.exports = Player;
