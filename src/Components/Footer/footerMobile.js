import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { BrowserRouter as Link } from "react-router-dom";
import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";
import "./footer.css";

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
        <img
          className="logoSize"
          style={{ width: "225px", height: "51.3px" }}
          src={logo}
          alt=""
        />
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
            {haufigenOpen ? <ExpandLess /> : <ExpandMore />}
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
              {uberUnsOpen ? <ExpandLess /> : <ExpandMore />}
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
                  className={classes.nested}
                  style={{ borderBottom: "1px solid #707070" }}
                >
                  {/* <ListItemIcon></ListItemIcon> */}
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
              {topmenOpen ? <ExpandLess /> : <ExpandMore />}
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
    </div>
  );
}

export default FooterMobile;
