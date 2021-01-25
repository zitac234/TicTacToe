import React from "react";
import Board from "./Board";

import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
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
      // ref="form"
      onSubmit={this.handleSubmit}
      onError={(errors) => console.log(errors)}
    >
      <TextValidator
        label="Name"
        onChange={this.handleChange}
        name="name"
        value={this.state.name}
        validators={["required"]}
        errorMessages={["this field is required"]}
      />
      <Button type="submit">Submit</Button>
    </ValidatorForm>;
    console.log("this is form");
  }
  render() {
    return <div>{this.myForm()}</div>;
  }
}
