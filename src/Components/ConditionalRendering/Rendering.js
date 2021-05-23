import BackgroundImageDesktop from "../../Images/ÜberUns/Desktop/Fotos/BackgroundImageDesktop.png";
import BackgroundImageMobile from "../../Images/ÜberUns/Smartphone/Fotos/BackgroundImageMobile.png";
import BackgroundImageTabletHoch from "../../Images/ÜberUns/TabletHoch/Fotos/BackgroundImageTabletHoch.png";
import BackgroundImageQuer from "../../Images/ÜberUns/TabletQuer/Fotos/BackgroundImageQuer.png";
import bgImageDesktopShop from "../../Images/OurShopProdukt/Desktop/Fotos/bgImageDesktopShop.png";
import bgImageMobileShop from "../../Images/OurShopProdukt/Mobile/Fotos/bgImageMobileShop.png";
import bgImageIpadProShop from "../../Images/OurShopProdukt/Tablet/Fotos/bgImageIpadProShop.png";
import bgImageQuerShop from "../../Images/OurShopProdukt/Tablet Quer/Fotos/bgImageQuerShop.png";
import BuyGoldDesktop1 from "../../Images/Home/Desktop/Fotos/BuyGoldDesktop1.png";
function BackGroundKasse() {
  return (
    <div>
      <div style={{ marginInline: "7%" }}>
        <img src={bgImageDesktopShop} width="100%" alt="" className="desktop" />
        <img src={bgImageMobileShop} width="100%" className="IpadPro" alt="" />
        <img
          src={bgImageIpadProShop}
          width="100%"
          className="IpadQuer"
          alt=""
        />
        <img src={bgImageQuerShop} width="100%" className="mobile" alt="" />
      </div>
    </div>
  );
}

export default BackGroundKasse;

export const cartBgImage = {
  DeskTopImage: bgImageDesktopShop,
  MobileImage: bgImageMobileShop,
  IpadImage: bgImageIpadProShop,
  IpadQuerImage: bgImageQuerShop,
};

export const BgImage = {
  DeskTopImage: BackgroundImageDesktop,
  MobileImage: BackgroundImageMobile,
  IpadImage: BackgroundImageTabletHoch,
  IpadQuerImage: BackgroundImageQuer,
};
export const UnserShopImages = {
  DeskTopImagekasseShop: BuyGoldDesktop1,
};
