#!/usr/bin/env node

const path = require('path');
const { createWallet } = require(path.resolve(process.cwd(), 'src', 'utils', 'wallet'));

const args = process.argv.slice(2);
const command = args.shift();

switch (command) {
  case 'create':
    const walletName = args[0];
    const mnemonic = createWallet(walletName); // Get the generated mnemonic
    console.log(`Wallet created with mnemonic: ${mnemonic}`);
    break;
  // Handle other commands here
  default:
    console.error(`Command '${command}' not found`);
    process.exit(1);
}
