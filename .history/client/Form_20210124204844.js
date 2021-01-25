import React from "react";
import BoardLogic from "./BoardLogic";
import Radio from "@material-ui/core/Radio";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      choice: "human",
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
      <div id="myform">
        <ValidatorForm
          onSubmit={this.handleSubmit}
          onError={(errors) => console.log(errors)}
          id="name"
        >
          <TextValidator
            label="Name"
            onChange={this.handleChange}
            name="name"
            value={this.state.name}
            validators={["required"]}
            errorMessages={["this field is required"]}
          />
          <div>
            <h4>Play Human or Computer</h4>
            <div id="radio">
              <p>Human</p>
              <Radio
                checked={this.state.choice === "human"}
                onChange={this.handleChange}
                value="human"
                name="choice"
              />
              <p>Computer</p>
              <Radio
                label="Computer"
                checked={this.state.choice === "computer"}
                onChange={this.handleChange}
                value="computer"
                name="choice"
              />
            </div>
          </div>
          <Button type="submit">Submit</Button>
        </ValidatorForm>
      </div>
    );
  }
  render() {
    return (
      <div>
        {this.state.showtable ? <BoardLogic  name={}/> : <div>{this.myForm()}</div>}
      </div>
    );
  }
}
