import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import React from "react";
import FbDesktop from "../../Images/ÜberUns/Desktop/SVG/FbDesktop.svg";
import InstaDesktop from "../../Images/ÜberUns/Desktop/SVG/InstaDektop.svg";
import LinkedlnDesktop from "../../Images/ÜberUns/Desktop/SVG/LinkedInDesktop.svg";
import XingDesktop from "../../Images/ÜberUns/Desktop/SVG/XingDesktop.svg";
import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";
function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {" © "}
      {new Date().getFullYear()}
      {""}

      <Link
        style={{ color: "#ecbd46" }}
        href="PM argento arum"
        color="h3"
        aria-label="all"
      >
        PM Argento Aurum
      </Link>
      {" | All Rights Reserved "}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));
const footers = [
  {
    title: "Häufige Fragen",
    description: [
      "Bestellprozess",
      "Zahlungsweise",
      "Versand",
      "Sicherheit",
      "Umtausch & Reklamation",
    ],
  },
  {
    title: "Über uns",
    description: [" Kontakt", "Impressum", "Datenschutz", "AGB"],
  },
  {
    title: "Top Themen",
    description: ["Tips", "Sparplan", "Newsletter", "Partner"],
  },
  {
    title: "Social Media",
    description: [
      <div display="flex">
        <span>
          <img src={FbDesktop} height="40px" alt=""></img>
        </span>
        <span style={{ paddingInlineEnd: "7px" }}>
          <img src={InstaDesktop} width="25px" height="40px" alt=""></img>
        </span>
        <span style={{ paddingInlineEnd: "8px" }}>
          <img src={LinkedlnDesktop} width="25px" height="40px" alt=""></img>
        </span>
        <span style={{ paddingInlineEnd: "10px" }}>
          <img src={XingDesktop} width="25px" height="40px" alt=""></img>
        </span>
      </div>,
    ],
  },
];

export default function FooterDesktop() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Link to="/home">
        <img
          style={{ width: "337.4px", height: "80px", marginTop: "180px" }}
          src={logo}
          alt=""
        />
      </Link>

      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h4" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
