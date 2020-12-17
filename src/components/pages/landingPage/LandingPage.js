import React from "react";
import "./landingPage.scss";
import { Link } from "react-router-dom";

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
          <Link to="/search">
            <p className="landingPage-left-button">Get Books</p>
          </Link>
        </div>
        <div className="landingPage-right">
          <img className="landingPage-right-img" src={girlOnBooks} />
        </div>
      </div>
    </>
  );
}
