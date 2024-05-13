const bip39 = require('bip39');
const hdkey = require('hdkey');
const fs = require('fs');
const axios = require('axios');
require('dotenv').config();

const storagePath = './wallets.json';

const BLOCKCYPHER_API_KEY = process.env.BLOCKCYPHER_API_KEY;
const API_BASE_URL = 'https://api.blockcypher.com/v1/btc/test3';

function loadWallets() {
  try {
    const data = fs.readFileSync(storagePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist or cannot be read, return an empty array
    return [];
  }
}

function saveWallets(wallets) {
  fs.writeFileSync(storagePath, JSON.stringify(wallets, null, 2));
}

function createWallet(walletName) {
  const mnemonic = bip39.generateMnemonic();
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const root = hdkey.fromMasterSeed(seed);
  const privateKey = root.privateKey.toString('hex');
  const publicKey = root.publicKey.toString('hex');
  
  const wallet = {
    name: walletName,
    mnemonic,
    privateKey,
    publicKey,
    addresses: [] // You may initialize it with an empty array
  };

  const wallets = loadWallets();
  wallets.push(wallet);
  saveWallets(wallets);

  return wallet;
}

function importWallet(mnemonic) {
  const seed = bip39.mnemonicToSeedSync(mnemonic);
  const root = hdkey.fromMasterSeed(seed);
  const privateKey = root.privateKey.toString('hex');
  const publicKey = root.publicKey.toString('hex');
  
  const wallet = {
    mnemonic,
    privateKey,
    publicKey,
    addresses: [] // You may initialize it with an empty array
  };

  const wallets = loadWallets();
  wallets.push(wallet);
  saveWallets(wallets);

  return wallet;
}

function listWallets() {
  return loadWallets().map(wallet => wallet.name);
}

// Implement other utility functions such as getBalance, getTransactions, generateAddress, etc.

async function getBalance(address) {
    try {
      const response = await axios.get(`${API_BASE_URL}/addrs/${address}/balance`);
      return response.data.balance;
    } catch (error) {
      console.error('Error fetching balance:', error.message);
      return null;
    }
  }
  
  async function getTransactions(address) {
    try {
      const response = await axios.get(`${API_BASE_URL}/addrs/${address}/full`);
      return response.data.txrefs.map(tx => ({
        tx_hash: tx.tx_hash,
        date: new Date(tx.confirmed || tx.received),
        amount: tx.value,
        confirmations: tx.confirmations
      }));
    } catch (error) {
      console.error('Error fetching transactions:', error.message);
      return null;
    }
  }
  
  async function generateAddress(walletName) {
    try {
      const wallets = loadWallets();
      const wallet = wallets.find(w => w.name === walletName);
      if (!wallet) {
        console.error('Wallet not found');
        return null;
      }
  
      // You can generate a new address by deriving it from the HD public key
      // For simplicity, let's just use the first address from the addresses array
      return wallet.addresses.length > 0 ? wallet.addresses[0] : null;
    } catch (error) {
      console.error('Error generating address:', error.message);
      return null;
    }
  }

module.exports = { createWallet, importWallet, listWallets, getBalance, getTransactions, generateAddress };
