import React, { useEffect, useState } from "react";
import CurrencyType from "../CurrencyType/CurrencyType";
import LineGraph from "./LineGraph";
import "./Newsfeed.css";
import DatePicker from "react-datepicker";
import { getBitcoinPrice } from "../../utils/apiClient";
import "react-datepicker/dist/react-datepicker.css";

const Newsfeed = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [bitcoinPrices, setBitcoinPrices] = useState("");
  const [currencyType, setCurrencyType] = useState("dollar");
  const [error, setError] = useState("");

  // Fetch bitcoin price when the date state is change
  useEffect(async () => {
    try {
      const dateFormated = formatDate(startDate);
      setError("");
      const bitcoinDataResponse = await getBitcoinPrice(dateFormated);
      setBitcoinPrices(bitcoinDataResponse);
    } catch (error) {
      console.log(error);
      setError("Data is not found");
    }
  }, [startDate]);

  // Date format to change date to year-month-day
  const formatDate = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  return (
    <div className="newsfeed">
      <div className="date_picker_container">
        <label>Pick a date to get bitcoin price: </label>
        <DatePicker
          className="date_picker"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
      </div>
      <div className="newsfeed__container">
        <div className="newsfeed__chartSection">
          <div className="news__portflio">
            {bitcoinPrices && (
              <h1>
                {currencyType === "dollar"
                  ? `${Number(bitcoinPrices.closeUSD).toFixed(2)}$`
                  : `${Number(bitcoinPrices.closeILS).toFixed(2)}ILS`}
              </h1>
            )}
          </div>

          <div className="newsfeed__char">
            <LineGraph
              bitcoinPrices={bitcoinPrices}
              currencyType={currencyType}
            />
            <CurrencyType
              currencyType={currencyType}
              setCurrencyType={setCurrencyType}
            />
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
