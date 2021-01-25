import React from "react";
import Board from "./Board";

import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      chioce: "human",
      showtable: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myForm = this.myForm.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ showtable: true });
  }
  myForm() {
    <ValidatorForm
      ref="form"
      onSubmit={this.handleSubmit}
      onError={(errors) => console.log(errors)}
    >
      <TextValidator
        label="Email"
        onChange={this.handleChange}
        name="email"
        value={email}
        validators={["required", "isEmail"]}
        errorMessages={["this field is required", "email is not valid"]}
      />
      <Button type="submit">Submit</Button>
    </ValidatorForm>;
  }
  render() {
    return (
      <div>{this.state.showtable ? <Board /> : <div>{this.myForm()}</div>}</div>
    );
  }
}
