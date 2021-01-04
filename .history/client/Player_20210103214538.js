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
      errorMessage: "",
      showGame: false,
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
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.mark && this.state.name) {
      this.setState({ showGame: true });
    } else {
      this.setState({ errorMessage: "Name and Mark must be filled!" });
    }
    document.getElementById("myform").style.display = "none";
    document.getElementsByTagName("body")[0].style.backgroundColor = "#f4af1b";
  }
  render() {
    const myForm = (
      <Form
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
    return (
      <div>
        {this.state.showGame ? (
          <div id="myboard">
            <Board name={this.state.name}  mark={this.}/>{" "}
          </div>
        ) : (
          <div id="myform">{myForm}</div>
        )}
      </div>
    );
  }
}
