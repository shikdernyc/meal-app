import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  children: {
    marginTop: "20px"
  }
};

class CardTitleView extends Component {
  render() {
    const {
      classes,
      title,
      subtitle,
      children,
      footer,
      styles = {}
    } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary" style={styles.header}>
              <h4 className={classes.cardTitleWhite} style={styles.title}>
                {title}
              </h4>
              <p className={classes.cardCategoryWhite}>{subtitle}</p>
            </CardHeader>
            <CardBody>
              <div className={classes.children}>{children}</div>
            </CardBody>
          </Card>
        </GridItem>
        {footer && <CardFooter>{this.props.footer}</CardFooter>}
      </GridContainer>
    );
  }
}

export default withStyles(styles)(CardTitleView);
