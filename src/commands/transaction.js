// src/commands/transactions.js
const { Command } = require('oclif');
const { getTransactions } = require('../utils/wallet');

class TransactionsCommand extends Command {
  async run() {
    const walletName = this.args.name;
    const transactions = getTransactions(walletName);
    transactions.forEach(transaction => this.log(transaction));
  }
}

TransactionsCommand.description = 'Get the list of bitcoin transactions of a wallet';

module.exports = TransactionsCommand;
