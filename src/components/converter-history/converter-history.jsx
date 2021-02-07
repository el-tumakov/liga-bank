import React from "react";
import { ConverterTypes } from "../../const";
import "./converter-history.scss";

const getConverterHistoryItem = () => (
  <li className="converter-history__item">
    <p className="converter-history__date">25.11.2020</p>
    <p className={`converter-history__money-${ConverterTypes.SOURCE}`}>
      <span className="converter-history__amount">1000</span>
      <span className="converter-history__currency">RUB</span>
    </p>
    <p className={`converter-history__money-${ConverterTypes.CONVERTED}`}>
      <span className="converter-history__amount">13,1234</span>
      <span className="converter-history__currency">USD</span>
    </p>
  </li>
);

const ConverterHistory = () => (
  <section className="converter-history">
    <h2 className="converter-history__title">История конвертаций</h2>
    <ul className="converter-history__list converter-history__list--noline">
      {getConverterHistoryItem()}
    </ul>
    <button className="converter-history__clear-button" type="button">
      Очистить историю
    </button>
  </section>
);

export default ConverterHistory;
