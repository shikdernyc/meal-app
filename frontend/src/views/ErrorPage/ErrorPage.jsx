import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import errorPageStyle from "assets/jss/material-kit-pro-react/views/errorPageStyles.jsx";

import image from "assets/img/clint-mckoy.jpg";
import { APP_NAME } from "variables/app";

class Components extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [1]
    };
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand={APP_NAME}
          links={<HeaderLinks dropdownHoverColor="dark" />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          {/* <div className={classes.container}> */}
          <div className={classes.contentCenter}>
            <GridContainer>
              <GridItem md={12}>
                <h1 className={classes.title}>404</h1>
                <h2 className={classes.subTitle}>Page not found :(</h2>
                <h4 className={classes.description}>
                  Ooooups! Looks like you got lost.
                </h4>
              </GridItem>
            </GridContainer>
          </div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default withStyles(errorPageStyle)(Components);
