import React from "react";
import readingImg from "../../../images/reading-ebook.svg";
import "./happyReadingPage.scss";
export default function HappyReadingPage() {
  return (
    <div className="happyReadingPage">
      <h1 className="happyReadingPage-heading">Happy Reading</h1>
      <img className="happyReadingPage-img" src={readingImg} />
    </div>
  );
}
