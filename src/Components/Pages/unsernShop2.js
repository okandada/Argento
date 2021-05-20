import React from "react";
import BackGroundKasse from "./UnsernShop";
import BuyGoldDesktop1 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop1.png";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { cartBgImage } from "../../Components/ConditionalRendering/Rendering";
export const UnsernShop2 = () => {
  return (
    <div>
      <BgImageComponent bgImage={cartBgImage} />
      <h2>hello</h2>
    </div>
  );
};
export default UnsernShop2;
