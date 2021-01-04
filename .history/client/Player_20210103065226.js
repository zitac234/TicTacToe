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
      if(!this.state.mark || c)
    this.setState({
      showGame: true,
    });
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
            <Board />{" "}
          </div>
        ) : (
          <div id="myform">{myForm}</div>
        )}
      </div>
    );
  }
}
