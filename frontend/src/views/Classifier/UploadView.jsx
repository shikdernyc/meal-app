import React, { Component } from "react";
// core components
import ImageUpload from "components/CustomUpload/ImageUpload.jsx";

class UploadView extends Component {
  render() {
    return (
      <div>
        <ImageUpload onChange={this.props.onChange} />
      </div>
    );
  }
}

export default UploadView;
