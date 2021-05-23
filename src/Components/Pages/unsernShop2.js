import React from "react";

import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { cartBgImage } from "../../Components/ConditionalRendering/Rendering";
export const UnsernShop2 = () => {
  return (
    <div>
      <BgImageComponent bgImage={cartBgImage} />
      <h2>hello from unsern shop 2</h2>
    </div>
  );
};
export default UnsernShop2;
