import React from "react";
import BackGroundImage from "../Backgroundimage/backGroundImage";
import styled from "styled-components";
import copy from "../../Images/copy.png";
import YellowStroke from "../../Images/YellowStroke.svg";
import AdobeStock_2 from "../../Images/AdobeStock_2.png";
import { Container } from "@material-ui/core";
import UnsernePartner1 from "../../Images/UnsernePartner1.png";
import UnsernePartner2 from "../../Images/UnsernePartner2.png";
import UnsernePartner3 from "../../Images/UnsernePartner3.png";
import UnsernePartner4 from "../../Images/UnsernePartner4.png";
// import { useMediaQuery } from "react-responsive";
export const About = () => {
  return (
    <div>
      <BackGroundImage />
      <AboutCarddiv>
        <Container className="container">
          <h1 className="title">Unser Team</h1>
          <div className="dash"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing
            elit, sed diam nonummy Lorem ipsum dolor sit amet, cons ectetuer
            adipiscing elit, sed diam nonummynibh
          </p>
        </Container>
        <Container className="container">
          <img src={copy} height="300px" maxWidth="fit-content"></img>
        </Container>
      </AboutCarddiv>

      <AboutCarddiv style={{ marginTop: "70px" }}>
        <Container style={{ paddingLeft: "12px" }} className="container">
          <img src={copy} height="300px" maxWidth="fit-content"></img>
        </Container>

        <Container
          style={{ marginLeft: "20px", marginBottom: "-500px" }}
          className="container"
        >
          <h1 className="title">Unser Team</h1>
          <div className="dash">
            <img src={YellowStroke}></img>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing
            elit, sed diam nonummy Lorem ipsum dolor sit amet, cons ectetuer
            adipiscing elit, sed diam nonummynibh
          </p>
        </Container>
      </AboutCarddiv>
      <AboutCarddiv
        style={{
          marginLeft: "-325px",
          marginTop: "-2000px",
          marginBottom: "-200px",
        }}
      >
        <Container className="container">
          <h1 className="title">Unsere Partner</h1>
          <div className="dash">
            <img src={YellowStroke}></img>
          </div>
        </Container>
      </AboutCarddiv>
      <div display="flex">
        <span style={{ paddingInlineEnd: "10px" }}>
          <img src={UnsernePartner1} height="200px"></img>
        </span>
        <span style={{ paddingInlineEnd: "10px" }}>
          <img src={UnsernePartner2} height="200px"></img>
        </span>
        <span style={{ paddingInlineEnd: "10px" }}>
          <img src={UnsernePartner3} height="200px"></img>
        </span>
        <span style={{ paddingInlineEnd: "10px" }}>
          <img src={UnsernePartner4} height="200px"></img>
        </span>
      </div>
    </div>
  );
};

export default About;

// const Example = () => {
//   const isDesktopOrLaptop = useMediaQuery({
//     query: "(min-device-width: 1224px)",
//   });
//   const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
//   const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
//   const isTabletOrMobileDevice = useMediaQuery({
//     query: "(max-device-width: 1224px)",
//   });
//   const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
//   const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

//   return (
//     <div>
//       <h1>Device Test!</h1>
//       {isDesktopOrLaptop && (
//         <>
//           <p>You are a desktop or laptop</p>
//           {isBigScreen && <p>You also have a huge screen</p>}
//           {isTabletOrMobile && (
//             <p>You are sized like a tablet or mobile phone though</p>
//           )}
//         </>
//       )}
//       {isTabletOrMobileDevice && <p>You are a tablet or mobile phone</p>}
//       <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
//       {isRetina && <p>You are retina</p>}
//     </div>
//   );
// };

const AboutCarddiv = styled.div`
  width: 100%;
  margin: -13px;
  display: inline-flex;
  padding-top: 30px;
  .container {
    width: 50%;
    overflow: hidden;
    height: 300px;
  }
  .title {
    padding: 0px;
    margin-top: 0px;
  }

  .dash {
    width: 14%;
    margin-top: -20px;
  }
`;
