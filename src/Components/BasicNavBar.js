import React from "react";
import { Component } from "react";
import bird from "../bird.gif";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const defaultprop = {
  isOpen: false,
};

class BasicNavBar extends Component {
  state = defaultprop;
  isOpen = (event) => {
    {
      console.log(this.state);

      this.setState({ isOpen: true });
    }
  };
  show = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState(defaultprop);
    this.isOpen();
  };

  render() {
    return (
      <div>
        <Router>
          <div className="container-center">
            <div className="Menu-color">
              <div className="headings2">
                <nav className="menu">
                  <ul className="MenuList">
                    <img className="bird" src={bird}></img>
                    <li className="MenuListElement">
                      <a href="/home">Home</a>
                    </li>
                    <li className="MenuListElement">
                      <a href="/register">Signup</a>
                    </li>
                    <li className="MenuListElement">
                      <a href="/login">Login</a>{" "}
                    </li>

                    <li className="MenuListElement">
                      <a href="/contactus">Contact us</a>
                    </li>

                    <li className="MenuListElement">
                      <a href="/aboutus">About us</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <Switch></Switch>
        </Router>
      </div>
    );
  }
}

export default BasicNavBar;
