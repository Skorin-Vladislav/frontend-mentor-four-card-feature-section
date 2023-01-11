import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <div className= {`card ${props.brdrColor}`}>
      <h1>{props.heading}</h1>
      <p>{props.subText}</p>
      <img
        className="card-img"
        src={props.imgSrc}
        alt={props.heading.toLowerCase()}
      ></img>
    </div>
  );
}

export default Card;
