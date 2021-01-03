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
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
