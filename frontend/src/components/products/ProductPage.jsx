import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import Universe from "./Universe";
import RightSection from "./RightSection";

export default function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media\products\products-kite.png"
        productName="Kite"
        productDsc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media\products\products-console.png"
        productName="Console"
        productDsc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        followLink="Learn more "
      />
      <LeftSection
        imageURL="media\products\products-coin.png"
        productName="Coin"
        productDsc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imageURL="media\products\landing.svg"
        productName="Console"
        productDsc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        followLink="Kite Connect "
      />
      <LeftSection
        imageURL="media\products\varsity-products.svg"
        productName="Varsity mobile"
        productDsc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

      <Universe />
    </>
  );
}
