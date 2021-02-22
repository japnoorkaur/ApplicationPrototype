import React from "react";
import { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import bird from "../bird.gif";
import Confirm from "./Confirm";

const defaultprop = {
  isOpen: false,
};
class Overview extends Component {
  state = defaultprop;

  handleEvent = (event) => {
    console.log(this.state);
    this.setState(defaultprop);
    this.isOpen();
  };
  isOpen = (event) => {
    {
      this.setState({ isOpen: true });
    }
  };
  render() {
    return (
      <Router>
        {" "}
        <div>
          <Confirm
            isOpen={this.state.isOpen}
            isClose={(event) => this.setState({ isOpen: false })}
          >
            Are you sure you want to delete this project?{" "}
          </Confirm>
          <div className="container-center">
            <div className="Menu-color">
              <div className="headings2">
                <nav className="menu">
                  <ul className="MenuList">
                    <img className="bird" src={bird}></img>
                    <li className="MenuListElement">
                      <Link to="/announcements">Announcements</Link>
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
          <div className="inner-container">
            <h5 className="headings" className="headings">
              Project Overview
            </h5>
            <br />
            <div className="inputs">
              <label htmlFor="mang">
                Project Name:{" "}
                <label htmlFor="mang" className="inputcell">
                  React Project
                </label>
              </label>
            </div>
            <div className="inputs">
              <span>
                {" "}
                <label htmlFor="mang">Manager: </label>
                <label htmlFor="mang" className="inputcell">
                  Japnoor Kaur
                </label>
              </span>
            </div>
            <div className="inputs">
              <label htmlFor="date">
                Creation Date:{" "}
                <label htmlFor="mang" className="inputcell">
                  05/24/2020
                </label>
              </label>
            </div>
            <div>
              <div className="inputs">
                <span>
                  {" "}
                  <label htmlFor="memb">Team Members: </label>
                  <label htmlFor="mang" className="inputcellshot">
                    Joe, James, Mathew
                  </label>
                  <br />
                </span>
              </div>
            </div>
            <br />

            <div>
              <button
                type="submit"
                className="styleButton"
                onClick={this.handleEvent}
              >
                Finish Project{" "}
              </button>
            </div>
          </div>{" "}
        </div>
      </Router>
    );
  }
}
export default Overview;
