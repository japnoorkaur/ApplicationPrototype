import React from "react";
import { Component } from "react";

import UserCreated from "./UserCreated";

const defaultprop = {
  isOpen: false,
  name: "",

  manager: "",

  nameError: "",

  managerError: "",
};
class Project extends Component {
  state = defaultprop;
  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };
  validate = () => {
    let nameError = "";

    let managerError = "";

    if (!this.state.name) {
      nameError = "Project Name cannot be blank";
    }
    if (this.state.name.length < 3) {
      nameError = "Project Name should have atleast 3 characters";
    }
    if (!this.state.manager) {
      managerError = "Please Select a manager";
    }

    if (nameError || managerError) {
      this.setState({
        nameError,

        managerError,
      });
      return false;
    }

    return true;
  };
  isOpen = (event) => {
    {
      this.setState({ isOpen: true });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      this.setState(defaultprop);
      this.isOpen();
    }
  };

  render() {
    return (
      <div>
        <UserCreated
          isOpen={this.state.isOpen}
          isClose={(event) => this.setState({ isOpen: false })}
        >
          You have successfully created a Project!
        </UserCreated>
        <div className="inner-container">
          <h5 className="headings">Create Project</h5>
          <form onSubmit={this.handleSubmit}>
            <div className="inputs">
              <label htmlFor="name">Project Name</label>{" "}
            </div>

            <input
              type="text"
              name="name"
              size="38"
              required="true"
              className="inputStyle"
              placeholder="Project Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div className="msg">{this.state.nameError}</div>

            <div className="inputs">
              {" "}
              <label htmlFor="manager">Manager</label>{" "}
            </div>

            <div className="option">
              <select
                id="manager"
                name="manager"
                className="inputStyle"
                value={this.state.manager}
                onChange={this.handleChange}
              >
                <option value="none">Select a Manager</option>
                <option value="name1">Japnoor Kaur</option>
                <option value="name2">Annie</option>
              </select>
              <br />
            </div>
            <div className="msg">{this.state.managerError}</div>
            <br />
            <div>
              <button type="submit" className="styleButton">
                Create Project{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Project;
