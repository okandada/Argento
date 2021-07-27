import React from "react";
import Card from "../Cards/cards";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";
import Box from "@material-ui/core/Box";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import "./card.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 3,
    partialVisibilityGutter: 50,
  },
  medium: {
    breakpoint: { max: 1024, min: 600 },
    items: 2,
    partialVisibilityGutter: 30,
  },

  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};
const useStyles = makeStyles({
  marginTop: "20px",
});

const defaultProps = {
  m: 2,
  borderColor: "#ecbd46",
  border: "3px solid",
  marginLeft: "0px",
};

export default function CardGrid(props) {
  const classes = useStyles();
  const cardImages = props.images;
  var rows = [];
  cardImages.map((image, index) =>
    rows.push(
      <Box
        display="flex"
        key={index}
        justifyContent="center"
        xs={12}
        sm={6}
        md={3}
      >
        <Box border={1} {...defaultProps}>
          <Grid>
            {/* loading card component */}
            <Card url={image.url} text={image.text} />
          </Grid>
        </Box>
      </Box>
    )
  );

  return (
    <Carousel
      ssr
      partialVisible
      itemClass="image-item"
      responsive={responsive}
      container
      className={classes.gridContainer}
      justify="center"
    >
      {rows.map((row) => row)}
    </Carousel>
  );
}
