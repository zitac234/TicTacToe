import React from "react";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  render() {
    console.log("this is name", this.context);
    return null;
  }
}
