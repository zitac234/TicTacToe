import React from "./react";
import Board from "./Board";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
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
    this.setState({ showtable: true });
  }
  myForm() {
    <ValidatorForm
      //   ref="form"
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
      <FormControl component="fieldset">
        <FormLabel component="legend">Play Human or Computer</FormLabel>
        <RadioGroup
          aria-label="chioce"
          name="chioce"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="human" control={<Radio />} label="Human" />
          <FormControlLabel
            value="computer"
            control={<Radio />}
            label="Computer"
          />
        </RadioGroup>
      </FormControl>
      <Button type="submit">Submit</Button>
    </ValidatorForm>;
  }
  render() {
    return (
      <div>{this.state.showtable ? <Board /> : <div>{this.myForm()}</div>}</div>
    );
  }
}
