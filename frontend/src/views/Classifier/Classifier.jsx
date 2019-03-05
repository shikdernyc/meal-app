import React, { Component } from "react";
import { classify } from "services/backend/classifier.jsx";
import CardTitleView from "components/Layouts/CardTitleView";
import { Grid } from "@material-ui/core";

import UploadView from "./UploadView";
import ResultView from "./ResultView";
import Muted from "components/Typography/Muted";

class Classifier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      result: null
    };
  }

  onChange = async file => {
    this.setState({ file: file });
    if (file != null) {
      const response = await classify(file);
      console.log(response);
      this.setState({ result: response.result });
    } else {
      this.setState({ result: null });
    }
  };

  render() {
    const splitView = this.state.result !== null;
    return (
      <CardTitleView
        title="Classifier Demo"
        subtitle="Identiy a given food using Tensorflow"
      >
        <Grid container spacing={40}>
          <Grid item xs={12}>
            {/* <Muted> */}
            <div style={{ textAlign: "center" }}>
              <Muted>
                <h2>Welcome to Food Classifier</h2>
              </Muted>
              {/* <p>
                This demo will identify a given food using deep learning. We
                have trained our system with 101 different types of food
              </p> */}
              <p>
                Checkout the available food in our database{" "}
                <a href="https://pastebin.com/QWQJDQKj" target="_blank">
                  here
                </a>
              </p>
            </div>
            {/* </Muted> */}
          </Grid>
          <Grid item xs={splitView ? 6 : 12}>
            <UploadView onChange={this.onChange} />
          </Grid>
          {splitView && (
            <Grid item xs={6}>
              <ResultView result={this.state.result} />
            </Grid>
          )}
        </Grid>
      </CardTitleView>
    );
  }
}

export default Classifier;
