import React from "react";
import Card from "../Cards/cards";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PinDropSharp } from "@material-ui/icons";
import "../../App.css";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles({
  marginTop: "20px",
});
const defaultProps = {
  m: 2,
  borderColor: "#ecbd46",
  border: "3px solid",
};
export default function CardGrid(props) {
  const classes = useStyles();
  const cardImages = props.images;
  var rows = [];
  for (var i = 0; i < cardImages.length; i++) {
    rows.push(
      <Box
        display="flex"
        key={i}
        justifyContent="center"
        item
        xs={12}
        sm={6}
        md={3}
      >
        <Box border={1} {...defaultProps}>
          <Grid>
            <Card
              title={cardImages[i].title}
              url={cardImages[i].url}
              text={cardImages[i].text}
            />
          </Grid>
        </Box>
      </Box>
    );
  }

  return (
    // <Box display="flex" justifyContent="center">
    //   <Box border={1} {...defaultProps} />
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      {rows.map((row) => row)}
    </Grid>
    // </Box>
  );
}
