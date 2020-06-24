import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import FireButton from "../fireButton/FireButton";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 350,
    height: 250,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ task, id, timeStamp, deleteTask }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          task for week
        </Typography>
        <Typography variant="h5" component="h2">
          {task}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          day create task
        </Typography>
        <Typography variant="body2" component="p">
          {timeStamp}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <FireButton
          type="button"
          title="Delete"
          id={id}
          deleteTask={deleteTask}
        />
      </CardActions>
    </Card>
  );
}
