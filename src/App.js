import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/home";
import ContactUs from "./Components/Pages/contact";
import About from "./Components/Pages/about";
import NavbarMenu from "../src/Components/Navbar/NavbarMenu";
import Footer from "../src/Components/Footer/footer";
import BgImageComponent from "./Components/BackgroundimageComponent/backGroundImage";
import NavBarMobileMenu from "../src/Components/NavBarMobile/navBarMobile";
import DatenSchutz from "./Components/Pages/datenSchutz";
function App() {
  return (
    <div>
      <Router>
        <div className={" IpadPro"}>
          <NavbarMenu />
        </div>
        <div className={" desktop"}>
          <NavbarMenu />
        </div>
        <div className={" IpadQuer"}>
          <NavbarMenu />
        </div>

        <div className={"mobile"}>
          <NavBarMobileMenu />
        </div>

        <BgImageComponent />
        <div className="bodyComponentLayout">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />

            <Route path="/datenSchutz" component={DatenSchutz} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
