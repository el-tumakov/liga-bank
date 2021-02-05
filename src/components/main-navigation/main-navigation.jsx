import React from "react";
import { Link } from "react-router-dom";
import "./main-navigation.scss";

const MainNavigation = () => (
  <nav className="main-navigation header__navigation">
    <ul className="main-navigation__list">
      <li className="main-navigation__item">
        <Link className="main-navigation__link" to="#">
          Услуги
        </Link>
      </li>
      <li className="main-navigation__item">
        <Link className="main-navigation__link" to="#">
          Рассчитать кредит
        </Link>
      </li>
      <li className="main-navigation__item">
        <Link
          className="main-navigation__link main-navigation__link--current"
          to="#"
        >
          Конвертер валют
        </Link>
      </li>
      <li className="main-navigation__item">
        <Link className="main-navigation__link" to="#">
          Контакты
        </Link>
      </li>
      <li className="main-navigation__item">
        <Link className="main-navigation__link" to="#">
          Задать вопрос
        </Link>
      </li>
    </ul>
  </nav>
);

export default MainNavigation;
