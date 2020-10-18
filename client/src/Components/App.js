// React
import React from "react";
// Template Components
import Header from "./Templates/Header";
import Footer from "./Templates/Footer";
// Pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Portfolio from "../Pages/Portfolio";
import Blog from "../Pages/Blog";
import Contact from "../Pages/Contact";
// Page Not Found
import PageNotFound from "../Pages/404";
// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// CSS
import "./App.css";
const App = () => {
  return (
    <>
      <Header />

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Blog" component={Blog} />
          <Route path="/Contact" component={Contact} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>

      <Footer />
    </>
  );
};

export default App;
