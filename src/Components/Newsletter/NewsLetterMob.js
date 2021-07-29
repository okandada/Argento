// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardMedia from "@material-ui/core/CardMedia";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import NewsletterDesktop from "../../Images/Home/Desktop/Fotos/NewsletterDesktop.jpg";
// import { TextField } from "@material-ui/core";
// import Checkbox from "@material-ui/core/Checkbox";
// import Button from "@material-ui/core/Button";
// import { withStyles } from "@material-ui/core/styles";

// const ValidationTextField = withStyles({
//   root: {
//     "& > *": {
//       width: "25ch",
//     },
//   },
//   color: {
//     color: "#ffffff",
//   },
//   TextField: {
//     border: "1px solid #ffffff",
//   },
//   InputBase: {
//     border: "1px solid #ffffff",
//   },
//   buttonstyle: {},
//   "& input": {
//     color: "#ecbd46",
//   },
//   "& input:valid + fieldset": {
//     borderColor: "#ffffff",
//     borderWidth: 2,
//     color: "#ffffff",
//     width: "100%",
//   },

//   "& input:invalid + fieldset": {
//     borderColor: "red",
//     borderWidth: 2,
//   },
//   "& input:valid:focus + fieldset": {
//     borderLeftWidth: 6,
//     padding: "4px !important", // override inline-style
//   },
//   "&:hover": {
//     borderColor: "#ffffff !important",
//   },
// })(TextField);
// const useStyles = makeStyles(() => ({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%", // 16:9
//   },
// }));

// export const NewsLetterMob = () => {
//   const classes = useStyles();
//   const [checked, setChecked] = React.useState(true);
//   const handleChange = (event) => {
//     setChecked(event.target.checked);
//   };

//   return (
//     <div className="text-items-mob">
//       <div>
//         <Card className={classes.root}>
//           <CardMedia className={classes.media} image={NewsletterDesktop} />
//           <Typography variant="h4">Abonniere unseren Newsletter</Typography>
//           <Typography variant="subtitle1">
//             Erfahre als erster von neuen Produkten, Tipps und Ideen!
//           </Typography>
//           {/* <typography>
//             <h5></h5>
//             <h6 className="text">
//               Erfahre als erster von neuen Produkten, Tipps und Ideen!
//             </h6>
//           </typography> */}
//           <form className={classes.root} noValidate autoComplete="off">
//             <ValidationTextField
//               className="newsletter-textfield-mob"
//               InputLabelProps={{
//                 style: { color: "#ecbd46" },
//               }}
//               label="Email Address"
//               variant="outlined"
//               id="validation-outlined-input"
//             />
//             <div>
//               <Checkbox
//                 className="newsLetter-checkbox-mob"
//                 checked={checked}
//                 onChange={handleChange}
//                 labelplacement="end"
//                 inputProps={{ "aria-label": "primary checkbox" }}
//               />
//               <span>
//                 Ich bin mit den allgemeinen Datenschutzbestimmungen und den
//                 Teilnahmebedingungen einverstanden
//               </span>
//             </div>

//             <Button
//               className="newsLetter-btn-mob"
//               variant="contained"
//               color="#ffffff"
//               href="#contained-buttons"
//             >
//               <h6 className="buttonText">NewsLetter Anmeldung</h6>
//             </Button>
//           </form>
//         </Card>
//       </div>
//     </div>
//   );
// };
// export default NewsLetterMob;
