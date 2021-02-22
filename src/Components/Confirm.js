import React from "react";
import { Component } from "react";

class Confirm extends Component {
  render() {
    let message = (
      <div>
        <div className="textStyle4">
          {" "}
          <div className="boxcontainerconfirm">{this.props.children}</div>
          <button className="butalert" onClick={this.props.isClose}>
            x
          </button>
          <div>
            <button className="butalert2" onClick={this.props.isClose}>
              Yes
            </button>
          </div>
        </div>
      </div>
    );
    if (!this.props.isOpen) {
      message = null;
    }
    return <div>{message}</div>;
  }
}
export default Confirm;
