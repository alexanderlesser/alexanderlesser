import React from "react";
import GlobalStyles from "./GlobalStyles";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/portfolio/Portfolio";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/portfolio" exact component={Portfolio} />
      </Switch>
    </>
  );
};

export default App;
