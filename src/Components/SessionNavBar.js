import React from "react";
import { Component } from "react";
import bird from "../bird.gif";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Card from "./Card.jsx";
import Login from "./Login";
import Register from "./Register";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import Project from "./Project";
class SessionNavBar extends Component {
  render() {
    return (
      <Router>
        <div className="container-center">
          <div className="Menu-color">
            <div className="headings2">
              <nav className="menu">
                <ul className="MenuList">
                  <img className="bird" src={bird}></img>
                  <li className="MenuListElement">
                    <Link
                      to="/announcements"
                      className={this.state ? "style-selected" : ""}
                    >
                      Announcements
                    </Link>
                  </li>
                  <li className="MenuListElement">
                    <Link to="/sprints">
                      <div onClick="applyLogin" />
                      <div />
                      Sprints
                    </Link>
                  </li>

                  <li className="MenuListElement">
                    <Link to="/issues">Issues</Link>
                  </li>

                  <li className="MenuListElement">
                    <Link to="/people">People</Link>
                  </li>
                  <li className="MenuListElement">
                    <Link to="/progress">Progress</Link>
                  </li>
                  <li className="MenuListElement">
                    <Link to="/confluence">Confluence</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <Project />
      </Router>
    );
  }
}
export default SessionNavBar;
