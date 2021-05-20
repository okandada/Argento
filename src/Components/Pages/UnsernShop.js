import React from "react";
import BackGroundKasse from "./UnsernShop";

import BuyGoldDesktop1 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop1.png";
function UnsernShop() {
  return (
    <div>
      <BackGroundKasse />
      <p>this is unser shop page</p>
      <img src={BuyGoldDesktop1} height="100%" width="100%" alt="" />
    </div>
  );
}

export default UnsernShop;
