import React from "react";
import "./index.css";
import Quote from "../../assets/Quote.png";

function EachTestimony({props}) {
  return (
    <div className="box">
      <div className="box--img">
        <img src={props.imagePath} alt="" />
      </div>
      <img src={Quote} alt="" />
      <div className="box--content">
        <p>{props.description}</p>
        <h4>{props.name}</h4>
        <p>{props.position}</p>
      </div>
    </div>
  );
}

export default EachTestimony;
