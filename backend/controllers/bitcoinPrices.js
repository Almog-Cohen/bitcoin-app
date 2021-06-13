// Get bitcoin price per day
const handleBitcoinPrices = async (req, res, redisClient) => {
  const { date } = req.params;
  if (!date) res.status(404).json("Date required");
  const bitCoinData = redisClient.get(date, (err, replay) => {
    if (err) return res.status(500);
    if (!replay) return res.status(404).json("No bitcoin prices in this date");
    const data = JSON.parse(replay);
    return res.send(data);
  });
};

module.exports = {
  handleBitcoinPrices: handleBitcoinPrices,
};
