import React from "react";
import { Component } from "react";
import bird from "../bird.gif";
import UserCreated from "./UserCreated";
const defaultprop = {
  isOpen: false,
  email: "",

  password: "",

  emailError: "",

  passwordError: "",
};
class AdminLogin extends Component {
  state = defaultprop;
  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };
  isOpen = (event) => {
    {
      this.setState({ isOpen: true });
    }
  };
  validate = () => {
    let emailError = "";

    let passwordError = "";

    if (!this.state.email) {
      emailError = "Email cannot be blank";
    }

    if (!this.state.password) {
      passwordError = "Password cannot be blank";
    }
    if (this.state.password.length < 5) {
      passwordError = "Password should have atleast 5 characters";
    }
    if (!(this.state.email.includes("@") && this.state.email.includes("."))) {
      emailError = "Email id entered is not valid.";
    }
    if (emailError || passwordError) {
      this.setState({
        emailError,

        passwordError,
      });
      return false;
    }

    return true;
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
      <div className="behaviour">
        <UserCreated
          isOpen={this.state.isOpen}
          isClose={(event) => this.setState({ isOpen: false })}
        >
          You have successfully logged in!
        </UserCreated>
        <div className="inner-container2">
          <div className="logo-container">
            <img src={bird} className="brand_logo" alt="Logo" />
            <br />
          </div>
          <h6 className="headings">Admin Login</h6>
          <form onSubmit={this.handleSubmit}>
            <div className="inputs">
              <label htmlFor="email">Email</label>{" "}
            </div>

            <input
              type="email"
              size="38"
              name="email"
              required={true}
              className="inputStyle"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <div className="msg">{this.state.emailError}</div>

            <div className="inputs">
              <label htmlFor="password">password</label>{" "}
            </div>

            <input
              type="password"
              name="password"
              className="last"
              required={true}
              placeholder="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <div className="msg">{this.state.passwordError}</div>

            <div>
              <br />
              <button type="submit" className="styleButton2">
                Login as Admin{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default AdminLogin;
