import React from "react";
import { Component } from "react";

class AboutUs extends Component {
  render() {
    return (
      <div className="inner-container">
        <header className="aboutHead">
          {" "}
          <div className="short">
            <h4 className="headings">About Us</h4>
          </div>
        </header>
        <div className="inputs">
          <div itemType="text">
            {" "}
            <br />
            Protracker Application is developed to help teams manage their work
            efficiently. <br />
            This web applicaton is a tool and a medium for discussion for issues
            and projects activities <br /> for software as well as management
            professionals. The main elements of our application <br />
            are as follows:
            <br />
            <ul>
              <li>Issue Tracking</li>
              <li>Project Management</li>
              <li>Measures Project's Progress</li>
            </ul>
            Address: A52 Queen Street, Halifax, NS, B3L 5K4
          </div>
        </div>
      </div>
    );
  }
}
export default AboutUs;
