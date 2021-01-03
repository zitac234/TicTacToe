import React, { Component } from "react";
import Form from "./Form";
import Board from "./Board";
import { Link } from "react-router-dom";
export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      mark: "",
      showGame: false,
      width: 650,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  componentDidMount() {
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  handleSubmit(event) {
    this.setState({
      showGame: true,
      width: 0,
    });
  }
  render() {
    const myForm = (
      <Form
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
    return <div>{this.state.showGame ? <Board /> : myForm}</div>;
  }
}
