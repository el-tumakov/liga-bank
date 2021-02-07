import React from "react";
import ConverterHistory from "../converter-history/converter-history";
import { ConverterTypes } from "../../const";
import "./converter.scss";

const getConverterInput = (type) => (
  <input
    className="converter__input"
    type="number"
    id={`money-${type}`}
    name={`money-${type}`}
  />
);

const getSelectCurrency = (type) => (
  <select
    className="converter__input converter__input--currency"
    id={`curerncy-${type}`}
    name={`curerncy-${type}`}
  >
    <option className="converter__option" value="rub">
      RUB
    </option>
    <option className="converter__option" value="usd">
      USD
    </option>
    <option className="converter__option" value="eur">
      EUR
    </option>
    <option className="converter__option" value="gbr">
      GBR
    </option>
    <option className="converter__option" value="cny">
      CNY
    </option>
  </select>
);

const Converter = () => (
  <section className="converter wrapper">
    <h1 className="converter__title">Конвертер валют</h1>
    <form className="converter__form">
      <div className="converter__inputs-wrap">
        <fieldset className="converter__inputs">
          <label
            className="converter__label"
            htmlFor={`money-${ConverterTypes.SOURCE}`}
          >
            У меня есть
          </label>
          {getConverterInput(ConverterTypes.SOURCE)}
          <label
            className="visually-hidden"
            htmlFor={`curerncy-${ConverterTypes.SOURCE}`}
          >
            Моя валюта
          </label>
          {getSelectCurrency(ConverterTypes.SOURCE)}
        </fieldset>
        <fieldset className="converter__inputs">
          <label
            className="converter__label"
            htmlFor={`money-${ConverterTypes.CONVERTED}`}
          >
            Хочу приобрести
          </label>
          {getConverterInput(ConverterTypes.CONVERTED)}
          <label
            className="visually-hidden"
            htmlFor={`curerncy-${ConverterTypes.CONVERTED}`}
          >
            Хочу валюту
          </label>
          {getSelectCurrency(ConverterTypes.CONVERTED)}
        </fieldset>
      </div>
      <fieldset className="converter__date">
        <label className="visually-hidden" htmlFor="date">
          Выберите дату
        </label>
        <input
          className="converter__input converter__input--date"
          type="text"
          id="date"
        />
      </fieldset>
      <button className="converter__submit" type="button">
        Сохранить результат
      </button>
    </form>
    <ConverterHistory />
  </section>
);

export default Converter;
