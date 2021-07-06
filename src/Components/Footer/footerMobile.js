import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { BrowserRouter as Link } from "react-router-dom";
import logo from "../../Images/Home/Desktop/Fotos/logo.png";
import "./footer.css";
import Facebook_Icon2 from "../../Images/Home/SVG/Facebook_Icon2.svg";
import Insta_Icon from "../../Images/Home/SVG/Insta_Icon.svg";
import LinkedIn_Icon from "../../Images/Home/SVG/LinkedIn_Icon.svg";
import Xing_Icon from "../../Images/Home/SVG/Xing_Icon.svg";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function FooterMobile() {
  const classes = useStyles();
  const [haufigenOpen, haufigensetOpen] = React.useState(false);
  const [uberUnsOpen, uberUnsSetOpen] = React.useState(false);
  const [topmenOpen, topMenSetOpen] = React.useState(false);

  const handleClickHaufigeFragen = () => {
    haufigensetOpen(!haufigenOpen);
  };
  const handleClickUberUns = () => {
    uberUnsSetOpen(!uberUnsOpen);
  };
  const handleClickTopThemen = () => {
    topMenSetOpen(!topmenOpen);
  };
  return (
    <div>
      <Link to="/home">
        <div
          className="logoSize"
          style={{ maxWidth: "225px", maxHeight: "51.3px" }}
        >
          <img style={{ width: "100%", height: "100%" }} src={logo} alt="" />
        </div>
      </Link>
      <div style={{ paddingLeft: "35px", paddingRight: "45px" }}>
        <List
          style={{ marginTop: "-29px" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
            ></ListSubheader>
          }
          className={classes.root}
        >
          <ListItem
            button
            onClick={handleClickHaufigeFragen}
            style={{ borderBottom: "1px solid #707070" }}
          >
            <ListItemText
              style={{ colore: "white" }}
              primary="Häufige Fragen"
            />
            {haufigenOpen ? (
              <ExpandLess style={{ color: "white" }} />
            ) : (
              <ExpandMore style={{ color: "white" }} />
            )}
          </ListItem>
          <Collapse
            in={haufigenOpen}
            timeout="auto"
            unmountOnExit
            style={{ borderBottom: "1px solid #707070" }}
          >
            <List component="div" disablePadding>
              <ListItem
                button
                className={classes.nested}
                style={{ borderBottom: "1px solid #707070" }}
              >
                {/* <ListItemIcon></ListItemIcon> */}
                <ListItemText primary="Bestellprozess" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                style={{ borderBottom: "1px solid #707070" }}
              >
                <ListItemText primary="Zahlungsweise" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                style={{ borderBottom: "1px solid #707070" }}
              >
                <ListItemText primary="Versand" />
              </ListItem>
              <ListItem
                button
                className={classes.nested}
                style={{ borderBottom: "1px solid #707070" }}
              >
                <ListItemText primary="Sicherheit" />
              </ListItem>
              <ListItem button className={classes.nested}>
                {/* <ListItemIcon></ListItemIcon> */}
                <ListItemText primary="Umtausch & Reklamation" />
              </ListItem>
            </List>
          </Collapse>
        </List>
        <div>
          <List
            style={{ marginTop: "-25px" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                .
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem
              button
              onClick={handleClickUberUns}
              style={{ borderBottom: "1px solid #707070" }}
            >
              {/* <ListItemIcon></ListItemIcon> */}
              <ListItemText style={{ fontSize: "19px" }} primary="Über uns" />
              {uberUnsOpen ? (
                <ExpandLess style={{ color: "white" }} />
              ) : (
                <ExpandMore style={{ color: "white" }} />
              )}
            </ListItem>
            <Collapse
              in={uberUnsOpen}
              timeout="auto"
              unmountOnExit
              style={{ borderBottom: "1px solid #707070" }}
            >
              <List component="div" disablePadding>
                <ListItem
                  button
                  href="/contact"
                  className={classes.nested}
                  style={{ borderBottom: "1px solid #707070" }}
                >
                  <ListItemText primary="Kontakt" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component="a"
                  href="/impressum"
                  style={{ borderBottom: "1px solid #707070" }}
                >
                  <ListItemText primary="Impressum" />
                </ListItem>
                <ListItem
                  button
                  href="/datenSchutz"
                  className={classes.nested}
                  style={{ borderBottom: "1px solid #707070" }}
                >
                  <ListItemText primary="Datenschutz" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  {/* <ListItemIcon></ListItemIcon> */}
                  <ListItemText primary="AGB" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>
        <div>
          <List
            style={{ marginTop: "-25px" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                .
              </ListSubheader>
            }
            className={classes.root}
          >
            <ListItem
              button
              onClick={handleClickTopThemen}
              style={{ borderBottom: "1px solid #707070" }}
            >
              {/* <ListItemIcon></ListItemIcon> */}
              <ListItemText style={{ fontSize: "19px" }} primary="Top Themen" />
              {topmenOpen ? (
                <ExpandLess style={{ color: "white" }} />
              ) : (
                <ExpandMore style={{ color: "white" }} />
              )}
            </ListItem>
            <Collapse
              in={topmenOpen}
              timeout="auto"
              unmountOnExit
              style={{ borderBottom: "1px solid #707070" }}
            >
              <List component="div" disablePadding>
                <ListItem
                  button
                  className={classes.nested}
                  style={{ borderBottom: "1px solid #707070" }}
                >
                  {/* <ListItemIcon></ListItemIcon> */}
                  <ListItemText primary="Tips" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  component="a"
                  href="/home"
                  style={{ borderBottom: "1px solid #707070" }}
                >
                  <ListItemText primary="Sparplan" />
                </ListItem>
                <ListItem
                  button
                  className={classes.nested}
                  style={{ borderBottom: "1px solid #707070" }}
                >
                  {/* <ListItemIcon></ListItemIcon> */}
                  <ListItemText primary="Newsletter" />
                </ListItem>
                <ListItem button className={classes.nested}>
                  {/* <ListItemIcon></ListItemIcon> */}
                  <ListItemText primary="Partner" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>
      </div>
      <div style={{ display: "flex", margin: "17px 0px 10px 100px" }}>
        <div style={{ paddingInlineEnd: "8px" }}>
          <img src={Insta_Icon} width="25px" alt=""></img>
        </div>
        <div style={{ paddingInlineEnd: "8px" }}>
          <img src={LinkedIn_Icon} width="25px" alt=""></img>
        </div>
        <div style={{ paddingInlineEnd: "8px" }}>
          <img src={Xing_Icon} width="25px" alt=""></img>
        </div>
        <div style={{ margin: "-10px" }}>
          <img src={Facebook_Icon2} width="45px" alt="/about"></img>
        </div>
      </div>
      <div>
        <Typography
          variant="body2"
          color="textSecondary"
          align="center"
          style={{
            fontFamily: "Barlow",
            display: "flex",
            fontSize: "0.8rem",
            marginLeft: "50px",
          }}
        >
          {" © "}
          {new Date().getFullYear()}
          <Link
            color="inherit"
            href="https://material-ui.com/"
            style={{ color: "#ecbd46", marginLeft: "2px" }}
          >
            <Typography
              variant="body2"
              style={{ color: "#ecbd46", fontSize: "0.8rem" }}
            >
              PM Argento Aurum
            </Typography>
          </Link>
          {"| All Rights Reserved "}
        </Typography>
      </div>
    </div>
  );
}

export default FooterMobile;
