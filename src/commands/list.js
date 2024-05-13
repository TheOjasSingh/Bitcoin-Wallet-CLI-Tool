// src/commands/list.js
const { Command } = require('oclif');
const { listWallets } = require('../utils/wallet');

class ListCommand extends Command {
  async run() {
    const wallets = listWallets();
    wallets.forEach(wallet => this.log(wallet));
  }
}

ListCommand.description = 'List all wallets';

module.exports = ListCommand;
