import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
  Typography,
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const heading = "OUR WORK";
const text =
  "We work with farmers on paddy fields to understand  their problems and work backwards from there. It helps us capture and tackle that problem with the software in much organic way.";

function TypographyTheme() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Typography variant="h1" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {text}
        </Typography>
      </MuiThemeProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TypographyTheme />, rootElement);
