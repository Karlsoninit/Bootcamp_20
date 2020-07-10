import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function FireButton({ type, title, deleteTask, id }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        type={type ? type : "button"}
        variant="contained"
        color="secondary"
        onClick={deleteTask ? () => deleteTask(id) : () => console.log("click")}
      >
        {title ? title : "button"}
      </Button>
    </div>
  );
}
