// import React from "react";
// import Card from "../Cards/cards";
// import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";

// import "../../App.css";
// import Box from "@material-ui/core/Box";
// const useStyles = makeStyles({
//   marginTop: "20px",
// });
// const defaultProps = {
//   m: 2,
//   borderColor: "#ecbd46",
//   border: "3px solid",
// };
// export default function CardGrid(props) {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>1 Unze Gold</span>;
//   const HilfecardImage = props.HilfenTipsCardText;
//   var rows = [];
//   for (var i = 0; i < HilfecardImage.length; i++) {
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
//             <Card text={HilfecardImage[i].text} />
//           </Grid>
//         </Box>
//       </Box>
//     );
//   }
//   const HilfenTipsCardText = [
//     {
//       text: "Unze Gold",
//     },
//     {
//       text: "Unze Gold",
//     },
//     {
//       text: "hello",
//     },
//     {
//       text: "hello",
//     },
//   ];

//   return (
//     <Grid
//       container
//       spacing={4}
//       className={classes.gridContainer}
//       justify="center"
//     >
//       {rows.map((row) => row)}
//     </Grid>
//   );
// }
