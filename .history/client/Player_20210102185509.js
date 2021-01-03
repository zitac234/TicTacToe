import React, { Component } from "react";
import Form from "./Form";
import Board from "./Board";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mark: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log("this is", event.target.name, event.target.value);
  }
  handleSubmit(event) {
    return <Board />;
  }
  render() {
    return (
      <div>
        <Form
          {...this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}