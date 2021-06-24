import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/home";
import ContactUs from "./Components/Pages/contact";
import About from "./Components/Pages/about";
import NavbarMenu from "../src/Components/Navbar/NavbarMenu";
import NavBarMobileMenu from "../src/Components/NavBarMobile/navBarMobile";
import DatenSchutz from "./Components/Pages/datenSchutz";
import UnsernShop from "./Components/Pages/UnsernShop";
import { UnsernShop2 } from "./Components/Pages/unsernShop2";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import ImpressumPage from "./Components/Pages/impressum";
import WarenKorb from "./Components/Pages/WarenKob";
import Test from "./Components/Pages/test";
import FooterMobile from "./Components/Footer/footerMobile";
import FooterDesktop from "../src/Components/Footer/footer";
import test2 from "./Components/Pages/test2";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

function App() {
  // let theme = createMuiTheme();
  // theme = responsiveFontSizes(theme);
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
            <Route path="/test" component={Test} />
            <Route path="/impressum" component={ImpressumPage} />
            <Route path="/WarenKob" component={WarenKorb} />
            <Route path="/test" component={Test} />
            <Route path="/test2" component={test2} />
          </Switch>
        </div>
        <div className=" IpadPro  IpadQuer">
          <FooterDesktop />
        </div>
        <div className="desktop">
          <FooterDesktop />
        </div>
        <div className="mobile">
          <FooterMobile />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
