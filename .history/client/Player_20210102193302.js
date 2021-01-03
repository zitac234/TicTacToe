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
    console.log("this is", event.target.name, event.target.value);
  }
  handleSubmit(event) {
    this.setState({
      showGame: true,
    });

    console.log("this is showGame", this.state.showGame);
  }
  render() {
    const myForm = (
      <Form
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
    if(this.state.showGame){
        myForm.style.width =   
    }
    return <div>{this.state.showGame ? <Board /> : myForm}</div>;
  }
}
