import React from "react";
import Header from "../header/header";
import Promo from "../promo/promo";
import "./converter-screen.scss";

const ConverterScreen = () => (
  <React.Fragment>
    <Header />
    <main>
      <Promo />
    </main>
  </React.Fragment>
);

export default ConverterScreen;
