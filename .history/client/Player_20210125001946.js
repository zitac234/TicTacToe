import React from "react";

export default class Player extends React.Component {
  static contextType = NamContext;
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  render() {
    return null;
  }
}
