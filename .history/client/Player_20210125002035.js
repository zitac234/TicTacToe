import React from "react";

export default class Player extends React.Component {
  static contextType = NameContext;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  render() {
        console.log('this is name', )
    return null;
  }
}
