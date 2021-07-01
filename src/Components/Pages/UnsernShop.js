// import React from "react";
// import styled from "styled-components";
// import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
// import BuyGoldDesktop1 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop1.jpg";
// import "./UnsernShop.css";
// import Button from "@material-ui/core/Button";
// import Box from "@material-ui/core/Box";
// import { Container } from "@material-ui/core";

// const heading = "1 Unze Gold ";

// const defaultProps = {
//   // m: 2,
//   borderColor: "#ecbd46",
//   border: "3px solid",
// };

// function UnsernShop() {
//   return (
//     <div>
//       <div>
//         <BgImageComponent />
//       </div>

//       <AboutCarddiv style={{ marginTop: "70px" }}>
//         <Container className="container">
//           <img
//             style={{ height: "100%", width: "100%" }}
//             src={BuyGoldDesktop1}
//             alt=""
//           />
//         </Container>

//         <Container style={{ marginLeft: "20px" }} className="container">
//           <div className="UnzeGoldtextdiv">
//             <h2 style={{ margin: "0px" }}>{heading}</h2>
//             <h4 style={{ margin: "0px" }}> </h4>
//             <p style={{ margin: "0px", color: "#a4a4a4" }}>
//               Feinheit: 999,9/1000 Feingold
//             </p>
//             <p style={{ color: "#a4a4a4" }}>
//               Herkunftsland: Schweiz / Deutschland
//             </p>
//             <div textPrice>
//               <h2 style={{ margiBottom: "0px" }}>1.560,41 EUR</h2>
//               <p style={{ color: "#a4a4a4" }}>
//                 zzgl. Versandkosten Lieferzeit: 4-7 Tage
//               </p>
//             </div>
//           </div>
//           <div>
//             <Button
//               style={{
//                 background: "#000000",
//                 border: "2px solid #ffffff",

//                 marginBottom: "20px",
//                 height: "50px",
//                 maxWidth: "100%",
//               }}
//               fullWidth={true}
//             >
//               <span style={{ color: '"#a4a4a4"' }}>Menge</span>
//             </Button>
//             <br />
//             <Button
//               style={{
//                 background: "#ffffff",
//                 height: "50px",
//                 maxWidth: "100%",
//               }}
//               fullWidth={true}
//             >
//               <span style={{ color: "#c28c02", fontWeight: "bolder" }}>
//                 In den Warenkorb
//               </span>
//             </Button>
//           </div>
//         </Container>
//       </AboutCarddiv>

//       <div>
//         <Button
//           style={{ backgroundColor: "#ecbd46", width: "219px", height: "44px" }}
//         >
//           Beschreibung
//         </Button>
//         <Button InputLabelProps={{ className: "buttonTextColor" }}>
//           Eigenschaften
//         </Button>
//       </div>
//       <Box
//         style={{ height: "220px", overflow: "auto" }}
//         border={1}
//         {...defaultProps}
//       >
//         <p style={{ color: "#a4a4a4", float: "left", width: "50%" }}>
//           Goldbarren und Goldmünzen gibt es in unterschiedlichen Größen. Doch
//           welche Größe ist die richtige? Für jede Gewichtseinheit fallen
//           unterschiedlich hohe Prägekosten an, die in den Verkaufspreis mit
//           eingerechnet sind. Für kleine Goldbarren sowie –münzen werden
//           prozentual höhere Aufschläge bezogen auf den reinen Materialwert
//           berechnet, als für große….
//         </p>
//       </Box>
//     </div>
//   );
// }

// export default UnsernShop;
// const AboutCarddiv = styled.div`
//   width: 100%;
//   display: inline-flex;
//   padding-top: 30px;

//   @media (max-width: 375px) {
//     display: block};
//   .container {
//     overflow: hidden;
//     padding-left: 0px;
//     padding-right: 0px;
// }
//   }
//   .title {
//     padding: 0px;
//     margin-top: 0px;
//   }

// `;
