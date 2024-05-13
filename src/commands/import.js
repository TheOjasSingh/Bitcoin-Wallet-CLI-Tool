const { Command } = require('@oclif/command');
const { importWallet } = require('../utils/wallet');

class ImportCommand extends Command {
  async run() {
    const mnemonic = this.args.mnemonic;
    const wallet = importWallet(mnemonic);
    this.log(`Wallet imported: ${wallet}`);
  }
}

ImportCommand.description = 'Import a wallet from BIP39 mnemonic';

module.exports = ImportCommand;
