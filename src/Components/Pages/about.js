import React from "react";
import styled from "styled-components";
import ImageGrid from "../ImageGrid";
import UnserneTeam1 from "../../Images/ÜberUns/Desktop/Fotos/UnserneTeam1.png";
import YellowStroke from "../../Images/ÜberUns/Desktop/SVG/YellowStroke.svg";
import UnserneTeam2 from "../../Images/ÜberUns/Desktop/Fotos/UnserneTeam2.png";
import { Container } from "@material-ui/core";
import "../../App.css";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { BgImage } from "../../Components/ConditionalRendering/Rendering";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Title from "../Title/title";
export const About = () => {
  return (
    <div>
      <BgImageComponent bgImage={BgImage} />
      <AboutCarddiv>
        <Container className="container">
          <h2 className="title">Unser Team</h2>
          <div className="dash">
            <img src={YellowStroke} alt="" />
          </div>
          {/* ...unserne team layout start   text1*/}
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
        {/* ...unserne team layout start  img 1*/}
        <Container className="container">
          <div>
            <img src={UnserneTeam1} height="100%" width="100%" alt="" />
          </div>
        </Container>
      </AboutCarddiv>
      <div className="mobile">
        <h2 className="title">Warum Argento Aurum</h2>
        <div className="dash">
          <img src={YellowStroke} alt="" />
        </div>
      </div>
      <div>
        <p className="mobile">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat, vel illum dolore eu feugiat nulla facilisis at
          vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
          nonummy Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
          diam nonummynibh
        </p>
      </div>
      {/* ...unserne team layout start img 2 */}
      <AboutCarddiv style={{ marginTop: "70px" }}>
        <Container className="container">
          <img src={UnserneTeam2} height="100%" width="100%" alt="" />
        </Container>

        <Container className="container">
          <Title class="desktop" name="Warum Argento Aurum" />

          {/* ...unserne team layout start text2 */}
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
      <h2 className="title">Unserne Partner</h2>
      <div className="dash" style={{ width: "7%" }}>
        <img src={YellowStroke} alt="" />
      </div>
      <ImageGrid></ImageGrid>
      {/* <Link to="/home">
        <img
          style={{ width: "337.4px", height: "80px", marginTop: "180px" }}
          src={logo}
          alt=""
        />
      </Link> */}
    </div>
  );
};

export default About;

const AboutCarddiv = styled.div`
  width: 100%;
  display: inline-flex;
  padding-top: 30px;
  column-gap: 20px;


  @media (max-width: 375px) {
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
