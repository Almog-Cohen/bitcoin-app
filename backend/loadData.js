const axios = require("axios");
// Fetch bitcoin data from api and store it in redis.
// I choose store the data in redis for a better cache performance
const loadData = (redisClient) => {
  axios
    .get(
      "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=ILS&apikey=TVJYZP7GITYMEHU3"
    )
    .then((data) => {
      let dateArray = [];

      let rawData = Object.values(data.data)[1];
      for (var date in rawData) {
        dateArray[date] = rawData[date];
      }
      for (date in dateArray) {
        const dataObject = JSON.stringify({
          openILS: dateArray[date]["1a. open (ILS)"],
          openUSD: dateArray[date]["1b. open (USD)"],
          highILS: dateArray[date]["2a. high (ILS)"],
          highUSD: dateArray[date]["2b. high (USD)"],
          lowILS: dateArray[date]["3a. low (ILS)"],
          lowUSD: dateArray[date]["3b. low (USD)"],
          closeILS: dateArray[date]["4a. close (ILS)"],
          closeUSD: dateArray[date]["4b. close (USD)"],
        });
        setBitcoinData(redisClient, date, dataObject);
      }
    })
    .catch((error) => console.log(error));
};
// Store bitcoin data in redis
const setBitcoinData = (redisClient, key, value) =>
  Promise.resolve(redisClient.set(key, value));

module.exports = {
  loadData: loadData,
};
