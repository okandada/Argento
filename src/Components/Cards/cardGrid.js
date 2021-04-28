import React from "react";
import Card from "../Cards/cards";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});
export default function CardGrid() {
    const classes = useStyles();
    var rows = [];
    for (var i = 0; i < 4; i++) {
        rows.push(
          <Grid item xs={12} sm={6} md={3}>
            <Card />
          </Grid>
        );
    }

    return (
      <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >  
    {
      rows.map(row => row)
    }
    </Grid>
    );
  }