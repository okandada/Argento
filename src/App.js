import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/home";
import ContactUs from "./Components/Pages/contact";
import About from "./Components/Pages/about";
import NavbarMenu from "../src/Components/Navbar/NavbarMenu";
import Footer from "../src/Components/Footer/footer";
import BgImageComponent from "./Components/BackgroundimageComponent/backGroundImage";
function App() {
  return (
    <div>
      <Router>
        <NavbarMenu />
        <BgImageComponent />
        <div className="bodyComponentLayout">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactUs} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
