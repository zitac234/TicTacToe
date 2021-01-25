import React from "react";
export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.getPostion = this.getPostion.bind(this);
  }
  
  render() {
    console.log("this is name", this.props.name);
    return null;
  }
}
