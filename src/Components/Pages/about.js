import React from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import ImageGrid from "../ImageGrid";
import UnserneTeam1 from "../../Images/ÜberUns/Desktop/Fotos/UnserneTeam1.png";
import YellowStroke from "../../Images/ÜberUns/Desktop/SVG/YellowStroke.svg";
import UnserneTeam2 from "../../Images/ÜberUns/Desktop/Fotos/UnserneTeam2.png";
import { Container } from "@material-ui/core";
// import UnsernePartner1Desktop from "../../Images/ÜberUns/Desktop/Fotos/UnsernePartner1Desktop.png";
import UnserneTeam1Mobile from "../../Images/ÜberUns/Smartphone/Fotos/UnserneTeam1Mobile.png";
import UnserneTeam1Tablet from "../../Images/ÜberUns/TabletHoch/Fotos/UnserneTeam1Tablet.png";
import UnserneTeam2Mobile from "../../Images/ÜberUns/Smartphone/Fotos/UnserneTeam2Mobile.png";
import UnserneTeam2Tablet from "../../Images/ÜberUns/TabletHoch/Fotos/UnserneTeam2Tablet.png";
import UnserneTeam1Quer from "../../Images/ÜberUns/TabletQuer/Fotos/UnserneTeam1Quer.png";
import UnserneTeam2Quer from "../../Images/ÜberUns/TabletQuer/Fotos/UnserneTeam2Quer.png";
import "../../App.css";
export const About = () => {
  return (
    <div>
      <AboutCarddiv>
        <Container className="container">
          <h1 className="title">Unser Team</h1>
          <div className="dash">
            <img src={YellowStroke} alt="" />
          </div>
          {/* ...unserne team layout start   text1*/}
          <p className="desktop">
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
          <p className="mobile">
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
          <p className="IpadPro">
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
          <p className="IpadQuer">
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
            <img
              src={UnserneTeam1}
              height="100%"
              width="100%"
              alt=""
              className="desktop image"
            />
          </div>
          <div>
            <img
              src={UnserneTeam1Mobile}
              height="100%"
              width="100%"
              alt=""
              className="mobile"
            />
          </div>
          <div>
            <img
              src={UnserneTeam1Tablet}
              height="100%"
              width="100%"
              alt=""
              className="IpadPro"
            />
            <img
              src={UnserneTeam1Quer}
              height="100%"
              width="100%"
              alt=""
              className="IpadQuer"
            />
          </div>
        </Container>
      </AboutCarddiv>

      {/* ...unserne team layout start img 2 */}
      <AboutCarddiv style={{ marginTop: "70px" }}>
        <Container style={{ paddingLeft: "12px" }} className="container">
          <img
            src={UnserneTeam2}
            height="inherit"
            width="inherit"
            alt=""
            className="desktop"
          />
          <img
            src={UnserneTeam2Mobile}
            height="inherit"
            width="inherit"
            alt=""
            className="mobile"
          />
          <img
            src={UnserneTeam2Tablet}
            height="inherit"
            width="inherit"
            alt=""
            className="IpadPro"
          />
          <img
            src={UnserneTeam2Quer}
            height="inherit"
            width="inherit"
            alt=""
            className="IpadQuer"
          />
        </Container>

        <Container
          style={{ marginLeft: "20px", marginBottom: "-500px" }}
          className="container"
        >
          <h1 className="title">Warum Argento Aurum</h1>
          <div className="dash">
            <img src={YellowStroke} alt="" />
          </div>
          {/* ...unserne team layout start text2 */}
          <p className="desktop">
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
          <p className="mobile">
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
          <p className="IpadPro">
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
          <p className="IpadQuer">
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
      {/* ...unserne team layout ends... */}

      {/* ...unserne partner layout start */}
      <AboutCarddiv style={{ padding: "25px" }}>
        <div style={{ height: "fit-content" }} className="container">
          {/* <h1 className="title">Unsere Partner</h1> */}
          <div className="dash">
            <img src={YellowStroke} alt="" />
          </div>
        </div>
      </AboutCarddiv>
      <ImageGrid className="desktop"></ImageGrid>
    </div>
  );
};

export default About;

const AboutCarddiv = styled.div`
  width: 100%;
  display: inline-flex;
  padding-top: 30px;

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
