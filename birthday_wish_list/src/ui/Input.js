import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "400",
    },
  },
}));

export default function Input({ handleChange, name, value }) {
  const classes = useStyles();

  return (
    <TextField
      onChange={handleChange}
      className={classes.root}
      id="outlined-basic"
      label={name}
      variant="outlined"
      value={value}
      name={name}
    />
  );
}
