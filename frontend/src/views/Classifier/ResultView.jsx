import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";
import Typography from "@material-ui/core/Typography";

const style = {
  cardTitle
};

function ResultView(props) {
  const { classes, result } = props;
  return (
    <Card style={{ width: "20rem" }}>
      <CardHeader color="info">Result</CardHeader>
      <CardBody>
        <h4 className={classes.cardTitle}>Top 5 Predictions</h4>
        <List>
          {result.map(result => (
            <ListItem key={result.prediction}>
              <ListItemText
                primary={result.prediction}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Score: {result.score}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardBody>
    </Card>
  );
}

export default withStyles(style)(ResultView);
