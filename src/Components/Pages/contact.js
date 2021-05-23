import React from "react";

import AltCard from "../../Components/Cards/hilfenTipsCard";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { BgImage } from "../../Components/ConditionalRendering/Rendering";
export const ContactUs = () => {
  return (
    <div>
      <BgImageComponent bgImage={BgImage} />
      <AltCard />
    </div>
  );
};
export default ContactUs;
