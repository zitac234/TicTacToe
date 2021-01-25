import React from "react";
export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      mark: this.props.mark,
    };

    this.getPosistion = this.getPosistion.bind(this);
  }
//   might right this 
  getPosistion() {
    let playerName = this.state.name;
    function validateInput() {
      console.log(`${playerName}, it is your turn.`);
      const answer = readline.question(
        "Please enter your next position(two numbers only)." + "\n"
      );
      return position;
    }
    let position = validateInput();
    if (isNaN(position[0]) || isNaN(position[1])) {
      console.log(`${this.playerName}, please enter two numbers.`);
      position = validateInput();
    }
  }
  render() {
    console.log("this is name", this.getPosistion());
    return null;
  }
}
