import React from "react";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { cartBgImage } from "../../Components/ConditionalRendering/Rendering";
import BuyGoldDesktop1 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop1.png";
function UnsernShop() {
  return (
    <div>
      <div>
        <BgImageComponent bgImage={cartBgImage} />
        <h2>hello from unsern shop 1</h2>
      </div>
      <div className=" UnsernImage">
        <img src={BuyGoldDesktop1} width="100%" className="desktop" alt="" />
        <img src={BuyGoldDesktop1} width="100%" className="mobile" alt="" />
        <img src={BuyGoldDesktop1} width="100%" className="IpadPro" alt="" />
        <img src={BuyGoldDesktop1} width="100%" className="IpadQuer" alt="" />
        <div>dsdas</div>
      </div>
    </div>
  );
}

export default UnsernShop;
