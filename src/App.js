import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/home";
import ContactUs from "./Components/Pages/contact";
import About from "./Components/Pages/about";
import NavbarMenu from "../src/Components/Navbar/NavbarMenu";
import NavBarMobileMenu from "../src/Components/NavBarMobile/navBarMobile";
import DatenSchutz from "./Components/Pages/datenSchutz";
import UnsernShop from "./Components/Pages/UnsernShop";
// import { UnsernShop2 } from "./Components/Pages/unsernShop2";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import ImpressumPage from "./Components/Pages/Impressum";
import Test from "./Components/Pages/test";
import FooterMobile from "./Components/Footer/footerMobile";
import FooterDesktop from "../src/Components/Footer/footer";
import Test2 from "./Components/Pages/test2";

function App() {
  const [backGroundCss, setBackGroundCss] = useState("HomebackgroundGradiant");

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div
          style={{ padding: "8px", backgroundColor: "black" }}
          className={backGroundCss}
        >
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
              <Route
                path="/"
                exact
                component={() => (
                  <Home setBackGroundCss={setBackGroundCss}></Home>
                )}
              />
              <Route
                path="/about"
                component={() => (
                  <About setBackGroundCss={setBackGroundCss}></About>
                )}
              />
              <Route
                path="/contact"
                component={() => (
                  <ContactUs setBackGroundCss={setBackGroundCss}></ContactUs>
                )}
              />
              <Route
                path="/datenSchutz"
                component={() => (
                  <DatenSchutz
                    setBackGroundCss={setBackGroundCss}
                  ></DatenSchutz>
                )}
              />
              <Route
                path="/UnsernShop"
                component={() => (
                  <UnsernShop setBackGroundCss={setBackGroundCss}></UnsernShop>
                )}
              />
              {/* <Route
                path="/unsernShop2"
                component={() => (
                  <UnsernShop2
                    setBackGroundCss={setBackGroundCss}
                  ></UnsernShop2>
                )}
              /> */}
              <Route path="/test" component={() => <Test></Test>} />
              <Route
                path="/impressum"
                component={() => (
                  <ImpressumPage
                    setBackGroundCss={setBackGroundCss}
                  ></ImpressumPage>
                )}
              />
              <Route
                path="/test2"
                component={() => (
                  <Test2 setBackGroundCss={setBackGroundCss}></Test2>
                )}
              />
            </Switch>

            <div className=" IpadPro  IpadQuer">
              <FooterDesktop />
            </div>
            <div className="desktop">
              <FooterDesktop />
            </div>
            <div className="mobile">
              <FooterMobile />
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
