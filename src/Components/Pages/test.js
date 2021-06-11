import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BuyGoldDesktop1 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop1.jpg";
import BuyGoldDesktop2 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop2.jpg";
import BuyGoldDesktop3 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop3.jpg";
import BuyGoldDesktop4 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop4.jpg";
import CardCrousalImage from "../Pages/test";
import "../../App.css";
import Box from "@material-ui/core/Box";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import Card from "../Cards/cards";
// const responsive = {
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 2,
//     partialVisibilityGutter: 150, // this is needed to tell the amount of px that should be visible.
//   },
//   medium: {
//     breakpoint: { max: 1025, min: 800 },
//     items: 1,
//     partialVisibilityGutter: 350, // this is needed to tell the amount of px that should be visible.
//   },
// me: {
//   breakpoint: { max: 1486, min: 1100 },
//   items: 2,
//   partialVisibilityGutter: 80, // this is needed to tell the amount of px that should be visible.
// },
// medum: {
//   breakpoint: { max: 1486, min: 1100 },
//   items: 2,
//   partialVisibilityGutter: 80, // this is needed to tell the amount of px that should be visible.
// },
// tablet: {
// breakpoint: { max: 1024, min: 464 },
// items: 1,
// partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
//   },
// };

// const useStyles = makeStyles((theme) => ({
//   marginTop: "20px",
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//   },
// }));
// const defaultProps = {
//   m: 2,
//   borderColor: "#ecbd46",
//   border: "3px solid",
// };

// export const TestGrid = (props) => {
//   const images = this.props.Images;
//   const classes = useStyles();
//   // const CardCrousalImage = images;

//   var rows = [];
//   for (var i = 0; i < images.length; i++) {
//     rows.push(
//       <Box
//         display="flex"
//         key={i}
//         justifyContent="center"
//         item
//         xs={12}
//         sm={6}
//         md={3}
//       >
//         <Box border={1} {...defaultProps}>
//           <Grid>
//             {/* loading card component */}
//             <Card
//               title={images[i].title}
//               url={images[i].url}
//               text={images[i].text}
//             />
//           </Grid>
//         </Box>
//       </Box>
//     );

//     return (
//       <Carousel
//         ssr
//         partialVisbile
//         itemClass="image-item"
//         responsive={responsive}
//         container
//         spacing={4}
//         className={classes.gridContainer}
//         justify="center"
//       >
//         {rows.slice(0, 5).map((row) => row)}
//       </Carousel>

export const TestGrid = (props) => {
  return <div></div>;

  // const Images = [
  //   {
  //     url: BuyGoldDesktop1,

  //     text: "Unze Gold",
  //   },
  //   {
  //     url: BuyGoldDesktop2,
  //     text: "Unze Gold",
  //   },
  //   {
  //     url: BuyGoldDesktop3,
  //     text: "hello",
  //   },
  //   {
  //     url: BuyGoldDesktop4,
  //     text: "hello",
  //   },
  // ];
};
export default TestGrid;
