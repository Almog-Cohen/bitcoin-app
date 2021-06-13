const express = require("express");
const cors = require("cors");
const redis = require("redis");
const bitcoinPrices = require("./controllers/bitcoinPrices");
const { loadData } = require("./loadData");

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(cors());
const redisClient = redis.createClient();

redisClient.on("error", function (error) {
  console.error(error, "somthing happn");
});

loadData(redisClient);

app.get("/", (req, res) => {
  res.json("Server is working");
});

// Would add middleware with express-valditator to validate the data has been sent by the clients in the correct date format year/month/day
app.get("/bitcoin-price/:date", (req, res) => {
  bitcoinPrices.handleBitcoinPrices(req, res, redisClient);
});

app.listen(PORT, () => {
  console.log(`app is runing on port ${PORT}`);
});
