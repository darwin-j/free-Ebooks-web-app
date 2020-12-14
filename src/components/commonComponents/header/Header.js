import React from "react";
import "./header.scss";
import searchIcon from "../../../images/search-icon.svg";
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <p className="header-logo-txt">
            <span className="header-logo-txt-go">Go</span>Books
          </p>
        </div>
        <div className="header-right">
          <p className="header-link">About us</p>
          <img className="header-searchIcon" src={searchIcon} />
        </div>
      </div>
    </>
  );
}
