import React from "react";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { cartBgImage } from "../../Components/ConditionalRendering/Rendering";
// import data from "../Kart/ProductData";

function WarenKorb() {
  // const { products } = data;
  return (
    <div>
      <div>
        <BgImageComponent bgImage={cartBgImage} />
      </div>
    </div>
  );
}

export default WarenKorb;
