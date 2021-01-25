import React from "react";

export default class Player extends React.Component {


  render() {
    this.state.name = this.context;
    console.log("this is name", this.state);
    return null;
  }
}
