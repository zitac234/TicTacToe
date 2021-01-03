import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  body: {
    backgroundColor: theme.palette.background.default,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    <Container component="main" maxWidth="md">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create a Mark
        </Typography>
        <form className={classes.form} noValidate onSubmit={}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            type="text"
            onChange={props.handleChange}
            value={props.name}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="mark"
            label=" Mark"
            id="mark"
            onChange={props.handleChange}
            value={props.mark}
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onSubmit={props.handleSubmit}
          >
            Start Game
          </Button>
        </form>
      </div>
    </Container>
  );
}
