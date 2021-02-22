import React from "react";
import { Component } from "react";
import Cards from "./Cards";
import "../App.css";
import CardStyle from "./CardStyle.css";

import pro from "../pro.jpg";
import admin from "../admin2.jpg";
import employee from "../employee.jpg";
import { BrowserRouter as Router } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid d-flex justify-contentcenter">
          <div className="row">
            <div className="card1">
              <Cards
                imgsrc={pro}
                title="Register Here"
                text="Register"
                goto="/register"
              />
            </div>
            <div className="card1">
              <Cards
                imgsrc={admin}
                title="Admin Login"
                text="Login"
                goto="/adminlogin"
              />
            </div>
            <div className="card1">
              <Cards
                imgsrc={employee}
                title="Employee Login"
                text="Login"
                goto="/login"
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Card;
