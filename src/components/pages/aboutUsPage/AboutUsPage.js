import React from "react";
import GetInTouch from "./components/getInTouch/GetInTouch";
import ProfileCard from "./components/profileCard/ProfileCard";
import "./aboutUsPage.scss";
export default function AboutUsPage() {
  return (
    <div className="aboutUs">
      <ProfileCard />
      <GetInTouch />
    </div>
  );
}
