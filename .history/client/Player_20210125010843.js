import React from "react";

export default class Player extends React.Component {
  static contextType = NameContext;
  render() {
    console.log("this is name", this.props.name);
    return null;
  }
}
