import React from "./react";
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
  }
  handleChange = (event) => {
    const name = event.target.value;
    this.setState({ email });
  };
}
