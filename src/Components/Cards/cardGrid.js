import React from "react";
import Card from "../Cards/cards";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { PinDropSharp } from "@material-ui/icons";
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px"
  }
});
export default function CardGrid(props) {
 
    const classes = useStyles();
    const cardImages= props.images
    var rows = [];
    for (var i = 0; i < cardImages.length; i++) {
        rows.push(
          <Grid item xs={12} sm={6} md={3}>
            <Card title={cardImages[i].title} url={cardImages[i].url} text={cardImages[i].text}/>
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