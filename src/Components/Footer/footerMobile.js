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
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import NativeSelect from "@material-ui/core/NativeSelect";

function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {" © "}
      {new Date().getFullYear()}
      {""}

      <Link
        style={{ color: "#ecbd46" }}
        href="PM argento arum"
        color="h6"
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
    s,
  },
];

export default function MobileFooter() {
  const classes = useStyles();
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const [state, setState] = React.useState({
    age: "",
    name: "hai",
  });

  return (
    <div>
      <React.Fragment>
        <Container maxWidth="md" component="footer" className={classes.footer}>
          <Grid container spacing={4} justify="space-evenly">
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography variant="h6" color="h6" gutterBottom>
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
          <Box mt={5}>
            <Footer />
          </Box>
        </Container>
        {/* End footer */}
      </React.Fragment>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Age</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: "age",
            id: "age-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    </div>
  );
}