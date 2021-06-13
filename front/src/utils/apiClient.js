import axios from "axios";

// Get bitcoin data for specific date
export async function getBitcoinPrice(date) {
  const response = await axios.get(
    `http://localhost:3001/bitcoin-price/${date}`
  );
  return response.data;
}
