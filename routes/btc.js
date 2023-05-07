import express from "express";
import axios from "axios";
const router = express.Router();

router.get('/price', async (req, res) => {
  try {
    const response = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    const price = response.data.bpi.USD.rate;
    res.send(`The current price of Bitcoin is ${price} USD`);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching Bitcoin price data');
  }
});

export { router as btc };
