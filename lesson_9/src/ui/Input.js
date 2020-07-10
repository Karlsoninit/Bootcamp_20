import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "600px",
    },
  },
}));

export default function Input({ onGetSearchValue }) {
  const classes = useStyles();

  return (
    <form
      onSubmit={onGetSearchValue}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Search" variant="outlined" />
    </form>
  );
}
