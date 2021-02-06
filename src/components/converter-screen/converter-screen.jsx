import React from "react";
import Header from "../header/header";
import Promo from "../promo/promo";
import Footer from "../footer/footer";
import "./converter-screen.scss";

const ConverterScreen = () => (
  <React.Fragment>
    <Header />
    <main>
      <Promo />
    </main>
    <Footer />
  </React.Fragment>
);

export default ConverterScreen;
