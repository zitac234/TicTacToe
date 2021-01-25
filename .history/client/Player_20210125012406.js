import React from "react";
export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      mark: this.props.mark,
    };

    this.getPostion = this.getPostion.bind(this);
  }
  getPosistion() {

  }
  render() {
    console.log("this is name", this.props.name);
    return null;
  }
}
