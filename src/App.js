import React from "react";
import Header from "./components/commonComponents/header/Header";
//import LandingPage from "./components/pages/landingPage/LandingPage";

import moduleName from "./components/pages/aboutUsPage/AboutUsPage";
import "./App.scss";
import AboutUsPage from "./components/pages/aboutUsPage/AboutUsPage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AboutUsPage />
    </div>
  );
}
