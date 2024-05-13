// src/utils/wallet.js
const bip39 = require('bip39');

function createWallet(walletName) {
  // Generate mnemonic (12 words)
  const mnemonic = bip39.generateMnemonic();

  // Return the generated mnemonic
  return mnemonic;
}

module.exports = { createWallet };
