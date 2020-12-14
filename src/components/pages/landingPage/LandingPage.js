import React from "react";
import "./landingPage.scss";

import girlOnBooks from "../../../images/girl-on-books.svg";
export default function LandingPage() {
  return (
    <>
      <div className="landingPage">
        <div className="landingPage-left">
          <h1 className="landingPage-left-head">
            Free <span className="landingPage-left-head-EBooks">EBooks</span>
          </h1>
          <p className="landingPage-left-para">
            Download Free EBooks in PDF format. No annoying ads, no download
            limits, enjoy it and don't forget to bookmark and share the love!
          </p>
          <p className="landingPage-left-button">Get Books</p>
        </div>
        <div className="landingPage-right">
          <img className="landingPage-right-img" src={girlOnBooks} />
        </div>
      </div>
    </>
  );
}
