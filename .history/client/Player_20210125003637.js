import React from "react";

export default class Player extends React.Component {
      static contextType = MyContext;
  render() {
    let name = this.context;
    console.log("this is name", this.context);
    return null;
  }
}
// Player.contextType = NameContext;
