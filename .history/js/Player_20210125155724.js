// const readline = require("readline-sync");
const table = document.getElementsByTagName("table")[0];
export default class Player {
  constructor(_name, _mark) {
    this.name = _name;
    this.mark = _mark;
  }
  getPosistion() {
    function validateInput() {
      const answer = readline.question(
        "Please enter your next position(two numbers only)." + "\n"
      );
      return answer;
    }
    let position = validateInput();
    while (isNaN(position[0]) || isNaN(position[1])) {
      console.log(`${this.name}, please enter two numbers.`);
      position = validateInput();
    }
    return position;
  }
}
// module.exports = Player;
