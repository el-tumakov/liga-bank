import React from "react";
import Logo from "../logo/logo";
import MainNavigation from "../main-navigation/main-navigation";
import UserMenu from "../user-menu/user-menu";
import "./header.scss";

const Header = () => (
  <header className="header">
    <div className="header__wrap wrapper">
      <Logo />
      <MainNavigation />
      <UserMenu />
    </div>
  </header>
);

export default Header;
