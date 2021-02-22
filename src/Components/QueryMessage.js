import React from "react";
import { Component } from "react";

class QueryMessage extends Component {
  render() {
    let message = (
      <div>
        <div className="textStyle2">
          {" "}
          <div className="boxcontainer">{this.props.children}</div>
          <button className="butalert" onClick={this.props.notShow}>
            x
          </button>
        </div>
      </div>
    );
    if (!this.props.show) {
      message = null;
    }
    return <div>{message}</div>;
  }
}
export default QueryMessage;
