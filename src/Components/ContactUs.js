import React from "react";
import { Component } from "react";
import QueryMessage from "./QueryMessage";
const defaultstate = {
  show: false,
  textValid: "",
  textValidError: "",
};
class ContactUs extends Component {
  state = defaultstate;
  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value,
    });
  };
  validate = () => {
    let textValidError = "";
    if (!this.state.textValid) {
      textValidError = "Please Enter your query";
    }
    if (textValidError) {
      this.setState({
        textValidError,
      });
      return false;
    }
    return true;
  };
  show = (event) => {
    {
      this.setState({ show: true });
    }
  };
  handleSubmit = (event) => {
    event.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      this.setState(defaultstate);
      this.show();
    }
  };

  render() {
    return (
      <div>
        <QueryMessage
          show={this.state.show}
          notShow={(event) => this.setState({ show: false })}
        >
          We have recieved your query,
          <br /> we will get back to you soon!{" "}
        </QueryMessage>
        <div className="inner-container">
          <header className="aboutHead">
            <h4 className="headings">Contact Us</h4>
          </header>
          <div className="inputs">
            <br />
            <label htmlFor="contact">Contact Number: +1 902-444-4444, 45</label>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="inputs">
              <br />
              <label htmlFor="ques">Have Questions? </label>
              <br />
              <textarea
                type="text"
                id="textValid"
                name="textValid"
                rows="8"
                cols="70"
                className="con"
                value={this.state.textValid}
                onChange={this.handleChange}
                placeholder="Write your query here and send us."
              ></textarea>
              <div className="msg">{this.state.textValidError}</div>
              <br />

              <button type="submit" className="styleButton">
                Send Query
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default ContactUs;
