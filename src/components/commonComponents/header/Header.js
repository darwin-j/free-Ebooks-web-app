import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import searchIcon from "../../../images/search-icon.svg";
export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <Link to="/">
            <p className="header-logo-txt">
              <span className="header-logo-txt-go">Go</span>Books
            </p>
          </Link>
        </div>
        <div className="header-right">
          <Link to="/about">
            <p className="header-link">About us</p>
          </Link>
          <Link to="/search">
            <img
              className="header-searchIcon"
              alt="searchIcon"
              src={searchIcon}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
