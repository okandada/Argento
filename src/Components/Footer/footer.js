import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import React from "react";
import Facebook_Icon from "../../Images/Home/SVG/Facebook_Icon.svg";
import Insta_Icon from "../../Images/Home/SVG/Insta_Icon.svg";
import LinkedIn_Icon from "../../Images/Home/SVG/LinkedIn_Icon.svg";
import Xing_Icon from "../../Images/Home/SVG/Xing_Icon.svg";
import logo from "../../Images/Home/Desktop/Fotos/logo.png";
import { NavLink } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ fontFamily: "Barlow" }}
    >
      {" © "}
      {new Date().getFullYear()}
      <Link
        color="inherit"
        href="https://material-ui.com/"
        style={{ color: "#ecbd46", marginLeft: "2px" }}
      >
        PM Argento Aurum
      </Link>
      {"| All Rights Reserved "}
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
      { name: "Bestellprozess", url: "http://localhost:3000/datenSchutz" },
      { name: "Zahlungsweise", url: "http://localhost:3000/impressum" },
      { name: "Versand", url: "http://localhost:3000/impressum" },
      { name: "Sicherheit", url: "http://localhost:3000/impressum" },
      {
        name: "Umtausch & Reklamation",
        url: "http://localhost:3000/impressum",
      },
    ],
  },
  {
    title: "Über uns",
    description: [
      { name: " Kontakt", url: "http://localhost:3000/datenSchutz" },
      { name: "Impressum", url: "http://localhost:3000/impressum" },
      { name: "Datenschutz", url: "http://localhost:3000/datenSchutz" },
      { name: "AGB", url: "http://localhost:3000/impressum" },
    ],
  },
  {
    title: "Top Themen",
    description: [
      { name: " Tips", url: "http://localhost:3000/datenSchutz" },
      { name: "Sparplan", url: "http://localhost:3000/impressum" },
      { name: "Newsletter", url: "http://localhost:3000/impressum" },
      { name: "Partner", url: "http://localhost:3000/impressum" },
    ],
  },
  {
    title: "Social Media",
    description: [
      <div display="flex">
        <span style={{ paddingInlineEnd: "7px" }}>
          <img src={Insta_Icon} width="25px" alt=""></img>
        </span>
        <span style={{ paddingInlineEnd: "8px" }}>
          <img src={LinkedIn_Icon} width="25px" alt=""></img>
        </span>
        <span style={{ paddingInlineEnd: "10px" }}>
          <img src={Xing_Icon} width="25px" alt=""></img>
        </span>
        <span>
          <img src={Facebook_Icon} width="25%" alt="/about"></img>
        </span>
      </div>,
    ],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <div>
      <div className="f-logo">
        <NavLink to="/home">
          <img src={logo} alt="" width="100%" height="100%" />
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
                  {footer.description.map((item, x) => (
                    <li key={x}>
                      <Link
                        href={item.url}
                        variant="body1"
                        color="textSecondary"
                      >
                        {item.name}
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
