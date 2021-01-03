import React, { Component } from "react";
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
  }
  handleSubmit(event) {
    event.style.display = none;
  }
  myForm() {
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="name" value={this.state.name}>
        Name
      </label>
      <input type="text" name="name" onChange={this.handleChange} />
      <label htmlFor="mark" value={this.state.name}>
        Mark
      </label>
      <input type="text" name="mark" onChange={this.handleChange} />
      <button type="submit"> Submit</button>
    </form>;
  }
  render(){
      return
  }
}
