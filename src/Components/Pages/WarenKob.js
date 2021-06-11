import React, { Component } from "react";
import BgImageComponent from "../../Components/BackgroundimageComponent/backGroundImage";
import { cartBgImage } from "../../Components/ConditionalRendering/Rendering";
import { BrowserRouter as Link } from "react-router-dom";
import logo from "../../Images/ÜberUns/Desktop/Fotos/logo.png";
import data from "../Kart/ProductData";
import Header from "../Kart/Header";
import Main from "../Kart/Main";
import Product from "../Kart/Product";
import Basket from "../Kart/Basket";

function WarenKorb() {
  const { products } = data;
  return (
    <div>
      <div>
        <BgImageComponent bgImage={cartBgImage} />
      </div>
    </div>
  );
}

export default WarenKorb;
