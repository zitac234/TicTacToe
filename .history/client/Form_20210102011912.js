import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
export default function Form(props) {
  const classes = useStyles();
  return (
    <form
      id="myform"
      onSubmit={props.handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Name"
        variant="outlined"
        name="name"
        type="text"
        onChange={props.handleChange}
        value={props.name}
      />
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Name"
        variant="outlined"
        name="name"
        type="text"
        onChange={props.handleChange}
        value={props.name}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
