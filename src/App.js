import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import BasicNavBar from "./Components/BasicNavBar";
import SessionNavBar from "./Components/SessionNavBar";
import Overview from "./Components/Overview";
import AdminLogin from "./Components/AdminLogin";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            strict
            render={() => {
              return (
                <div>
                  <BasicNavBar />
                  <Card />
                </div>
              );
            }}
          ></Route>
          <Route
            path="/project"
            exact
            strict
            render={() => {
              return (
                <div>
                  <Overview />
                </div>
              );
            }}
          ></Route>
          <Route
            path="/login"
            exact
            strict
            render={() => {
              return (
                <div>
                  <BasicNavBar />
                  <Login />
                </div>
              );
            }}
          ></Route>
          <Route
            path="/adminlogin"
            exact
            strict
            render={() => {
              return (
                <div>
                  <BasicNavBar />

                  <AdminLogin />
                </div>
              );
            }}
          ></Route>
          <Route
            path="/register"
            exact
            strict
            render={() => {
              return (
                <div>
                  <BasicNavBar />

                  <Register />
                </div>
              );
            }}
          ></Route>
          <Route
            path="/contactus"
            exact
            strict
            render={() => {
              return (
                <div>
                  <BasicNavBar />
                  <ContactUs />
                </div>
              );
            }}
          ></Route>
          <Route
            path="/aboutus"
            exact
            strict
            render={() => {
              return (
                <div>
                  <BasicNavBar />
                  <AboutUs />
                </div>
              );
            }}
          ></Route>
          <Route
            path="/home"
            exact
            strict
            render={() => {
              return (
                <div>
                  <BasicNavBar />
                  <Card />
                </div>
              );
            }}
          ></Route>
          <Route
            path="/createproject"
            exact
            strict
            render={() => {
              return <SessionNavBar />;
            }}
          ></Route>{" "}
        </Switch>
      </Router>
    );
  }
}
export default App;
