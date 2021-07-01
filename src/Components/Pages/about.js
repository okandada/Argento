import React from "react";
import styled from "styled-components";
import ImageGrid from "../ImageGrid";
// import UnserneTeam1 from "../../Images/ÜberUns/Desktop/Fotos/UnserneTeam1.png";
import BuyGoldDesktop3 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop3.jpg";
import UnserneTeam2 from "../../Images/Home/Desktop/Fotos/UnserneTeam2.jpg";
import { Container } from "@material-ui/core";
import "../../App.css";
import "./aboutUs.css";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { Heading } from "../Pages/heading";
export const About = () => {
  return (
    <div>
      <BgImageComponent
        DashSize={"35%"}
        Heading="Unsere Leidenschaft"
        SubHeading={"Das Team von Agento Aurum ist..."}
      />
      <AboutCarddiv>
        <Container className="container">
          <Heading size="h2" padding="0px" Text=" Unser Team"></Heading>
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
        <Heading size="h2" padding="10px" Text=" Warum Argento Aurum"></Heading>
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

      <AboutCarddiv style={{ marginTop: "0px" }}>
        <Container className="container">
          <img src={UnserneTeam2} height="100%" width="100%" alt="" />
        </Container>

        <Container className="container mobileview extraTextHideMobileView">
          <Heading
            size="h2"
            padding="0px"
            Text=" Warum Argento Aurum"
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
      </AboutCarddiv>
      <Heading size="h2" DashSize={"18%"} Text="Unserne Partner"></Heading>
      <ImageGrid />
    </div>
  );
};

const AboutCarddiv = styled.div`
  width: 100%;
  display: inline-flex;
  padding-top: 30px;
  column-gap: 20px;


  @media (max-width: 497px) {
    display: block};
  .container {
    overflow: hidden;
    padding-left: 0px;
    padding-right: 0px;
}
  }
  .title {
    padding: 0px;
    margin-top: 0px;
  }

 
`;

export default About;
