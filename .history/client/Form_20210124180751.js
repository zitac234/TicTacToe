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
        return (

        )
        
  }
  render() {
    return <div>{this.myForm()}</div>;
  }
}
