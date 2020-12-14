import React from "react";
import "./getInTouch.scss";
export default function GetInTouch() {
  return (
    <div className="getInTouch">
      <h1 className="getInTouch-heading">Get in touch </h1>
      <input className="getInTouch-input" placeholder="Name" />
      <input className="getInTouch-input" placeholder="Email" />
      <textarea
        className="getInTouch-input"
        placeholder="Message..."
      ></textarea>
      <button className="getInTouch-button">High Five</button>
    </div>
  );
}
