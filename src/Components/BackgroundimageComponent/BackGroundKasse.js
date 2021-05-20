import React from "react";
import bgImageDesktopKase from "../../Images/OurShopProdukt/Desktop/Fotos/bgImageDesktopKase.png";
import bgImageMobileKase from "../../Images/OurShopProdukt/Mobile/Fotos/bgImageMobileKase.png";
import bgImageIpadProKase from "../../Images/OurShopProdukt/Tablet/Fotos/bgImageIpadKase.png";
import bgImageQuerKase from "../../Images/OurShopProdukt/Tablet Quer/Fotos/Hero.png";
function BackGroundKasse() {
  return (
    <div>
      <div style={{ marginInline: "7%" }}>
        <img src={bgImageDesktopKase} width="100%" alt="" className="desktop" />
        <img src={bgImageMobileKase} width="100%" className="IpadPro" alt="" />
        <img
          src={bgImageIpadProKase}
          width="100%"
          className="IpadQuer"
          alt=""
        />
        <img src={bgImageQuerKase} width="100%" className="mobile" alt="" />
      </div>
    </div>
  );
}

export default BackGroundKasse;
