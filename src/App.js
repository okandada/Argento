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
import UnsernShop from "./Components/Pages/UnsernShop";
import BackGroundKasse from "./Components/BackgroundimageComponent/BackGroundKasse";
import { UnsernShop2 } from "./Components/Pages/unsernShop2";
import {
  cartBgImage,
  BgImage,
} from "./Components/ConditionalRendering/Rendering";
import { useLocation } from "react-router-dom";

function App() {
  const currentLocation = window.location.pathname;
  return (
    <div>
      {/* <Rendering /> */}

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
        {/* <BackGroundKasse /> */}

        {/* <UnsernShop2 /> */}
        <div className="bodyComponentLayout">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/datenSchutz" component={DatenSchutz} />
            <Route path="/UnsernShop" component={UnsernShop} />
            <Route path="/unsernShop2" component={UnsernShop2} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
