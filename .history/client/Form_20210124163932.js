import React from "./react";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      chioce: "",
      showtable: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    this.setState({ showtable: true });
  };
  render() {
    return (
      <ValidatorForm
        ref="form"
        onSubmit={this.handleSubmit}
        onError={(errors) => console.log(errors)}
      >
        <TextValidator
          label="Name"
          onChange={this.handleChange}
          name="name"
          value={name}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <Radio
          ch={selectedValue === "a"}
          onChange={handleChange}
          value="a"
          name="radio-button-demo"
          inputProps={{ "aria-label": "A" }}
        />
        <Radio
          checked={selectedValue === "b"}
          onChange={handleChange}
          value="b"
          name="radio-button-demo"
          inputProps={{ "aria-label": "B" }}
        />
        <Button type="submit">Submit</Button>
      </ValidatorForm>
    );
  }
}
