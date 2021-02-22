import React from "react";
import { Component } from "react";

class UserCreated extends Component {
  render() {
    let message = (
      <div>
        <div className="textStyle2">
          {" "}
          <div className="boxcontainer">{this.props.children}</div>
          <button className="butalert" onClick={this.props.isClose}>
            x
          </button>
        </div>
      </div>
    );
    if (!this.props.isOpen) {
      message = null;
    }
    return <div>{message}</div>;
  }
}
export default UserCreated;
