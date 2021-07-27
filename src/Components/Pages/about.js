import React, { useEffect } from "react";
import styled from "styled-components";
import ImageGrid from "../ImageGrid";
import BuyGoldDesktop3 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop3.jpg";
import UnserneTeam2 from "../../Images/Home/Desktop/Fotos/UnserneTeam2.jpg";
import { Container } from "@material-ui/core";
import "../../App.css";
import "./aboutUs.css";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { Heading } from "../Pages/heading";
import { withStyles } from "@material-ui/core/styles";
const headingFOnt = withStyles({
  root: {
    "& input": {
      color: "#ecbd46",
    },
    fonts: {
      size: "85px",
    },
  },
});
export const About = (props) => {
  useEffect(() => {
    props.setBackGroundCss("AboutbackgroundGradiant");
  });
  return (
    <div>
      <BgImageComponent
        DashSize={"35%"}
        Heading={<text>{"Unsere \n Leidenschaft"}</text>}
        SubHeading={"Das Team von Agento Aurum ist..."}
      />
      <AboutCarddiv>
        <Container className="container">
          <Heading
            size="caption"
            DashSize={"15%"}
            padding="0px"
            Text=" Unser Team"
          ></Heading>
          <p className="pFont">
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
          <img src={BuyGoldDesktop3} height="100%" width="100%" alt="" />
        </Container>
      </AboutCarddiv>
      <div className="mobile">
        <Heading
          size="caption"
          DashSize={"20%"}
          padding="10px"
          Text=" Warum Argento Aurum"
        ></Heading>
      </div>
      <div>
        <p className="mobile pFont">
          mobile Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
          diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
          erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
          tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
          velit esse molestie consequat, vel illum dolore eu feugiat nulla
          facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
          praesent luptatum zzril delenit augue duis dolore te feugait nulla
          facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit,
          sed diam nonummy Lorem ipsum dolor sit amet, cons ectetuer adipiscing
          elit, sed diam nonummynibh
        </p>
      </div>

      <AboutCarddiv>
        <Container className="container">
          <img src={UnserneTeam2} height="100%" width="100%" alt="" />
        </Container>

        <Container className="container mobileview extraTextHideMobileView">
          <Heading
            size="caption"
            padding="0px"
            DashSize={"25%"}
            Text=" Warum Argento Aurum"
          ></Heading>
          <p className="pFont">
            Desktop Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
            commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel illum dolore eu feugiat
            nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing
            elit, sed diam nonummy Lorem ipsum dolor sit amet, cons ectetuer
            adipiscing elit, sed diam nonummynibh
          </p>
        </Container>
      </AboutCarddiv>
      <div style={{ marginTop: "10%" }}>
        <Heading
          size="caption"
          DashSize={"28%"}
          Text="Unsere Partner"
        ></Heading>
      </div>

      <ImageGrid />
    </div>
  );
};

const AboutCarddiv = styled.div`
  width: 100%;
  display: inline-flex;
  padding-top: 30px;
  column-gap: 20px;
  margin-top: 9%;

  @media (max-width: 600px) {
    display: block;
    margin-top: 0%;
  }
  .container {
    overflow: hidden;
  }
  .title {
    padding: 0px;
    margin-top: 0px;
  }
`;

export default About;
