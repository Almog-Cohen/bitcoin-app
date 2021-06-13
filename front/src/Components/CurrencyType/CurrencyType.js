import React from "react";
import "./CurrencyType.css";

const CurrencyType = ({ currencyType, setCurrencyType }) => {
  return (
    <div className="timeline__container">
      <div className="timeline__buttons__container">
        <div
          className={
            currencyType === "ILS"
              ? "timeline__button_green"
              : "timeline__button"
          }
          onClick={() => setCurrencyType("ILS")}
        >
          ILS
        </div>
        <div
          className={
            currencyType === "dollar"
              ? "timeline__button_green"
              : "timeline__button"
          }
          onClick={() => setCurrencyType("dollar")}
        >
          USD
        </div>
      </div>
    </div>
  );
};

export default CurrencyType;
