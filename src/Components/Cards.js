import React from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";

const Cards = (props) => {
  return (
    <Router>
      <div className="card shadow">
        <div className="overflow">
          <img src={props.imgsrc} className="CardImg"></img>
        </div>
        <div className="cardbody">
          <h3 className="title">{props.title}</h3>
          <p className="cardText">{props.cardText}</p>
        </div>

        <a href={props.goto}>
          <button className="styleButtonfront"> {props.text}</button>
        </a>
        <div></div>
        <br />
      </div>
    </Router>
  );
};

export default Cards;
