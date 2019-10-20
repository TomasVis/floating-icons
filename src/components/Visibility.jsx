import React, { Component } from 'react';
import VizSensor from 'react-visibility-sensor';

class VizAwareImg extends Component {
  state = {
    imgViz: false
  }
  render() {
    return (
      <VizSensor
        onChange={(isVisible) => {
          this.setState({imgViz: isVisible})
        }}
      >
        <img
          src={this.props.src}
          style={{
            width: 300,
            height: 300,
            opacity: this.state.imgViz ? 1 : 0.25,
            transition: 'opacity 500ms linear'
          }}
        />
      </VizSensor>
    );
  }
}
export default VizAwareImg;