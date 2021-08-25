import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
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
  borderline: {
    borderBottom: "1px solid red",
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
      <Link to="/">
        <div className="logoSize" style={{ maxWidth: "225px" }}>
          <img
            style={{ width: "100%", height: "100%", marginTop: "60px" }}
            src={logo}
            alt=""
          />
        </div>
      </Link>
      {/* <div style={{ paddingLeft: "35px", paddingRight: "45px" }}> */}
      <div>
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
              component="a"
              onClick={handleClickUberUns}
              style={{ borderBottom: "1px solid #707070" }}
            >
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
                  component="a"
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
                  component="a"
                  href="/datenSchutz"
                  className={classes.nested}
                  style={{ borderBottom: "1px solid #707070" }}
                >
                  <ListItemText primary="Datenschutz" />
                </ListItem>
                <ListItem
                  button
                  component="a"
                  href="/"
                  className={classes.nested}
                >
                  {/* <ListItemIcon></ListItemIcon> */}
                  <ListItemText primary="AGB" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </div>
        {/* top themen starts from here */}
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
      <div>
        <div
          className=" socialImages"
          // style={{ display: "flex", margin: "20px 0px 10px 90px" }}
        >
          <div style={{ paddingInlineEnd: "8px" }}>
            <img src={Insta_Icon} width="27.6px" height="27.6" alt=""></img>
          </div>
          <div style={{ paddingInlineEnd: "8px" }}>
            <img src={LinkedIn_Icon} width="27.6px" height="27.6" alt=""></img>
          </div>
          <div style={{ paddingInlineEnd: "8px" }}>
            <img src={Xing_Icon} width="27.6px" height="27.6" alt=""></img>
          </div>
          <div style={{ margin: "-10px" }}>
            <img
              src={Facebook_Icon2}
              width="47.6px"
              height="47.5"
              alt="/about"
            ></img>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            style={{
              fontFamily: "Barlow",
              display: "flex",
              fontSize: "0.9rem",
              marginLeft: "15px",
            }}
          >
            {" © "}
            {new Date().getFullYear()}
          </Typography>
          <Link
            color="inherit"
            to="https://material-ui.com/"
            style={{ color: "#ecbd46", marginLeft: "2px" }}
          >
            <Typography
              style={{
                color: "#ecbd46",
                fontSize: "0.9rem",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              PM Argento Aurum
            </Typography>
          </Link>
          <Typography style={{ fontSize: "0.9rem" }}>
            {"| All Rights Reserved "}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default FooterMobile;
