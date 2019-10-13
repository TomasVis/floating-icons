import React from "react";
import Measure from "react-measure";

class AutoSizer extends React.Component {
  state = {
    dimensions: {
      width: -1,
      height: -1
    }
  };

  componentDidMount() {
    if (this._measureRef) {
      this._parentNode = this._measureRef.parentNode;
      this.forceUpdate();
    }
  }

  render() {
    const { dimensions } = this.state;

    // maybe we can pass the parentNode ref down in props ?
    return (
      <div ref={ref => (this._measureRef = ref)}>
        <Measure
          bounds
          onResize={contentRect => {
            this.setState({ dimensions: contentRect.bounds });
          }}
        >
          {({ measureRef }) => {
            if (!this._parentNode) {
              return null;
            }

            measureRef(this._parentNode);

            return this.props.children({ ...dimensions });
          }}
        </Measure>
      </div>
    );
  }
}

export default AutoSizer;
