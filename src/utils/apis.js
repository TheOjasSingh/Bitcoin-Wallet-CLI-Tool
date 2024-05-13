const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.BLOCKCYPHER_API_KEY;
const BASE_URL = 'https://api.blockcypher.com/v1/btc/test3/';

async function getBalance(address) {
  try {
    const response = await axios.get(`${BASE_URL}addrs/${address}/balance`, {
      params: { token: API_KEY }
    });
    return response.data.balance;
  } catch (error) {
    console.error('Error fetching balance:', error.response.data);
    return null;
  }
}

async function getTransactions(address) {
  try {
    const response = await axios.get(`${BASE_URL}addrs/${address}/full`, {
      params: { token: API_KEY }
    });
    return response.data.txs;
  } catch (error) {
    console.error('Error fetching transactions:', error.response.data);
    return null;
  }
}

async function generateAddress(walletName) {
  try {
    // Implement logic to generate a new address for the given wallet
    return generatedAddress;
  } catch (error) {
    console.error('Error generating address:', error.response.data);
    return null;
  }
}

module.exports = { getBalance, getTransactions, generateAddress };
