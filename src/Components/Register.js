import React from "react";
import { Component } from "react";
import bird from "../bird.gif";
import UserCreated from "./UserCreated";

const defaultprop = {
  isOpen: false,
  email: "",
  firstName: "",
  lastName: "",
  designation: "",
  password: "",
  confpassword: "",
  emailError: "",
  firstNameError: "",
  lastNameError: "",
  designationError: "",
  passwordError: "",
  confpasswordError: "",
};

class Register extends Component {
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
    let emailError = "";
    let firstNameError = "";
    let lastNameError = "";
    let designationError = "";
    let passwordError = "";
    let confpasswordError = "";

    if (!this.state.firstName) {
      firstNameError = "First Name cannot be blank";
    }
    if (this.state.firstName.length < 3) {
      firstNameError = "First Name should have atleast 3 characters";
    }
    if (!this.state.lastName) {
      lastNameError = "Last Name cannot be blank";
    }
    if (this.state.lastName.length < 3) {
      lastNameError = "Last Name should have atleast 3 characters";
    }
    if (!this.state.email) {
      emailError = "Email cannot be blank";
    }
    if (!this.state.designation) {
      designationError = "Password choose a designation";
    }
    if (!this.state.password) {
      passwordError = "Password cannot be blank";
    }
    if (this.state.password.length < 5) {
      passwordError = "Password should have atleast 5 characters";
    }
    if (!this.state.confpassword) {
      confpasswordError = "Confirmation Password cannot be blank";
    }
    if (!this.state.confpassword.match(this.state.password)) {
      confpasswordError = "Password is not matching";
    }
    if (!(this.state.email.includes("@") && this.state.email.includes("."))) {
      emailError = "Email id entered is not valid.";
    }
    if (
      emailError ||
      firstNameError ||
      lastNameError ||
      designationError ||
      passwordError ||
      confpasswordError
    ) {
      this.setState({
        emailError,
        firstNameError,
        lastNameError,
        designationError,
        passwordError,
        confpasswordError,
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
          You have been successfully registered! Please Login
        </UserCreated>
        <div className="inner-container">
          <div className="logo-container">
            <img src={bird} className="brand_logo" alt="Logo" />
            <br />
            <h6 className="headings"> Register</h6>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="inputs">
              <label htmlFor="email">Email</label>{" "}
            </div>
            <div> </div>
            <input
              size="38"
              type="email"
              name="email"
              required="true"
              className="inputStyle"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />

            <div className="msg">{this.state.emailError}</div>

            <div className="inputs">
              <label htmlFor="firstName">First Name </label>{" "}
            </div>
            <input
              type="text"
              required="true"
              name="firstName"
              className="inputStyle"
              placeholder="First Name"
              value={this.state.firstName}
              onChange={this.handleChange}
            />

            <div className="msg">{this.state.firstNameError}</div>

            <div className="inputs">
              <label htmlFor="lastName">Last Name </label>
            </div>
            <input
              type="text"
              name="lastName"
              required="true"
              className="inputStyle"
              placeholder="Last Name"
              value={this.state.lastName}
              onChange={this.handleChange}
            />

            <div className="msg">{this.state.lastNameError}</div>

            <div className="inputs">Designation</div>
            <div className="option">
              <select
                id="designation"
                name="designation"
                required="true"
                className="inputStyle"
                value={this.state.designation}
                onChange={this.handleChange}
              >
                <option value="none">Select your designation</option>
                <option value="Admin">Admin</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
            </div>

            <div className="msg">{this.state.designationError}</div>

            <div className="inputs">
              <label htmlFor="password">password </label>{" "}
            </div>
            <input
              type="password"
              required="true"
              name="password"
              className="inputStyle"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />

            <div className="msg">{this.state.passwordError}</div>

            <div className="inputs">
              <label htmlFor="confpassword">confirm password </label>
            </div>
            <input
              type="password"
              name="confpassword"
              required="true"
              className="last"
              placeholder="confirm password"
              value={this.state.confpassword}
              onChange={this.handleChange}
            />

            <div className="msg">{this.state.confpasswordError}</div>

            <div>
              <button type="submit" className="styleButton">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Register;
