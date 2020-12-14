import React from "react";
import Header from "./components/commonComponents/header/Header";
//import LandingPage from "./components/pages/landingPage/LandingPage";
import "./App.scss";
//import AboutUsPage from "./components/pages/aboutUsPage/AboutUsPage";
import HappyReadingPage from "./components/pages/happyReadingPage/HappyReadingPage";
export default function App() {
  return (
    <div className="App">
      <Header />
      <HappyReadingPage />
    </div>
  );
}
