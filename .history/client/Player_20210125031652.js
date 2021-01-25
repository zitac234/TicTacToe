const readline = require("readline-sync");
export default class Player {
  constructor(name, mark) {
    this.name = name;
    this.mark = mark;
  }
  getPosistion() {
    let playerName = this.state.name;
    console.log(playerName);
    function validateInput() {
      console.log(`${playerName}, it is your turn.`);
      const answer = readline.question(
        "Please enter your next position(two numbers only)." + "\n"
      );
      return answer;
    }
    let position = validateInput();
    console.log("this is postion", position);
    while (isNaN(position[0]) || isNaN(position[1])) {
      console.log(`${playerName}, please enter two numbers.`);
      position = validateInput();
    }
    return position;
  }
  render() {
    console.log("this is name", this.getPosistion());
    return null;
  }
}
