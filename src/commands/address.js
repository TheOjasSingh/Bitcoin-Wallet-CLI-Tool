// src/commands/address.js
const { Command } = require('oclif');
const { generateAddress } = require('../utils/wallet');

class AddressCommand extends Command {
  async run() {
    const walletName = this.args.name;
    const address = generateAddress(walletName);
    this.log(`Unused bitcoin address for ${walletName}: ${address}`);
  }
}

AddressCommand.description = 'Generate an unused bitcoin address for a wallet';

module.exports = AddressCommand;
