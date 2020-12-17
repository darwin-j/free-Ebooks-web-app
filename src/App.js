import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/commonComponents/header/Header";
import LandingPage from "./components/pages/landingPage/LandingPage";
import AboutUsPage from "./components/pages/aboutUsPage/AboutUsPage";
import SearchPage from "./components/pages/searchPage/SearchPage";
import ProductPage from "./components/pages/productPage/ProductPage";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/about" component={AboutUsPage} />
        </Switch>
      </Router>
    </div>
  );
}
