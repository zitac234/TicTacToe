export default class Player {
  constructor(name) {
    super(props);
    this.state = {
      name: this.props.name,
      mark: this.props.mark,
    };
    this.getPosistion = this.getPosistion.bind(this);
  }
  getPosistion() {
    let playerName = this.state.name;
    console.log(playerName);
    function validateInput() {
      console.log(`${playerName}, it is your turn.`);
      const answer = prompt(
        "Please enter your next position(two numbers only)."
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
