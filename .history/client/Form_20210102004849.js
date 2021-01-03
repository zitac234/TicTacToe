import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const Form = (props) => (
  <form id="todo-form" onSubmit={props.handleSubmit}>
    <label htmlFor="name">Name:</label>
    <input
      name="name"
      type="text"
      onChange={props.handleChange}
      value={props.name}
    />

    <label htmlFor="mark">Mark:</label>
    <input
      name="name"
      type="text"
      onChange={props.handleChange}
      value={props.mark}
    />
    <button type="submit">Submit</button>
  </form>
);
export default Form;