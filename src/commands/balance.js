// src/commands/balance.js
const { Command } = require('oclif');
const { getBalance } = require('../utils/wallet');

class BalanceCommand extends Command {
  async run() {
    const walletName = this.args.name;
    const balance = getBalance(walletName);
    this.log(`Balance of ${walletName}: ${balance}`);
  }
}

BalanceCommand.description = 'Get bitcoin balance of a wallet';

module.exports = BalanceCommand;
