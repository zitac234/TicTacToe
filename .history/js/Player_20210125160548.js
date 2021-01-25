// const readline = require("readline-sync");
const table = document.getElementsByTagName("table")[0];
export default class Player {
  constructor(_name, _mark) {
    this.name = _name;
    this.mark = _mark;
  }
  getPosistion() {
    console.log("this is table", table);
    table.addEventListener("click", (event) => {
      const position = event.target.id;
      console.log('this is ')
      return position;
    });
  }
}
// module.exports = Player;
