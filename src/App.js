import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/home";
import ContactUs from "./Components/Pages/contact";
import About from "./Components/Pages/about";
import NavbarMenu from "../src/Components/Navbar/NavbarMenu";
import Footer from "../src/Components/Footer/footer";
import NavBarMobileMenu from "../src/Components/NavBarMobile/navBarMobile";
import DatenSchutz from "./Components/Pages/datenSchutz";
import UnsernShop from "./Components/Pages/UnsernShop";
import MobileFooterTest from "./Components/Pages/test";
import { UnsernShop2 } from "./Components/Pages/unsernShop2";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import ImpressumPage from "./Components/Pages/Impressum";

function App() {
  return (
    <ThemeProvider theme={theme}>
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

        <div className="bodyComponentLayout">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/datenSchutz" component={DatenSchutz} />
            <Route path="/UnsernShop" component={UnsernShop} />
            <Route path="/unsernShop2" component={UnsernShop2} />
            <Route path="/test" component={MobileFooterTest} />
            <Route path="/Impressum" component={ImpressumPage} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
