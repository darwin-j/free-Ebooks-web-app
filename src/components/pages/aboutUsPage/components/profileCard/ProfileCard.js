import React from "react";
import "./profileCard.scss";
import profile from "./../../../../../images/male-profile.svg";
export default function ProfileCard() {
  return (
    <>
      <div className="profileCard">
        <img className="profileCard-img" src={profile} />
        <h3 className="profileCard-heading">Im Darwin DJ</h3>
        <p className="profileCard-para">
          Frontend Web Developer and UI / UX designer From TamilNadu passionate
          designer and developer.
        </p>
      </div>
    </>
  );
}
