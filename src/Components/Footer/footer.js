import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import React from "react";
import FbDesktop from "../../Images/ÜberUns/Desktop/SVG/FbDesktop.svg";
import InstaDesktop from "../../Images/ÜberUns/Desktop/SVG/InstaDektop.svg";
import LinkedlnDesktop from "../../Images/ÜberUns/Desktop/SVG/LinkedInDesktop.svg";
import XingDesktop from "../../Images/ÜberUns/Desktop/SVG/XingDesktop.svg";
import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";
import { NavLink } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link
        color="inherit"
        href="https://material-ui.com/"
        style={{ color: "#ecbd46" }}
      >
        PM Argento Aurum
      </Link>
      {new Date().getFullYear()}
      {"."}
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
        <span style={{ paddingInlineEnd: "7px" }}>
          <img src={InstaDesktop} width="25px" alt=""></img>
        </span>
        <span style={{ paddingInlineEnd: "8px" }}>
          <img src={LinkedlnDesktop} width="25px" alt=""></img>
        </span>
        <span style={{ paddingInlineEnd: "10px" }}>
          <img src={XingDesktop} width="25px" alt=""></img>
        </span>
        <span>
          <img src={FbDesktop} width="25%" alt="/about"></img>
        </span>
      </div>,
    ],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <div style={{ margin: "43px 80px" }}>
      <div>
        <NavLink to="/home">
          <div className="logoSize">
            <img src={logo} alt="" />
          </div>
        </NavLink>
      </div>
      <React.Fragment>
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Grid container spacing={4} justify="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h4" gutterBottom>
                  <span style={{ color: "#ecbd46" }}> {footer.title}</span>
                </Typography>
                <ul style={{ lineHeight: "28px" }}>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link href="#" variant="body1" color="textSecondary">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Box mt={5}>
            <Footer />
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
