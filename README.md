
Bitcoin Wallet CLI Tool

The Bitcoin Wallet CLI Tool is a command-line interface (CLI) application designed to manage Bitcoin wallets conveniently from the terminal. With this tool, users can create new wallets, import existing ones, list available wallets, check balances, view transactions, and generate unused addresses.


## Features

- Wallet Creation: Easily generate new Bitcoin wallets with mnemonic phrases.
- Wallet Import: Import existing Bitcoin wallets using mnemonic phrases.
- Wallet Listing: List all available Bitcoin wallets stored locally.
- Balance Checking: Retrieve the balance of a specific Bitcoin wallet.
- Transaction Viewing: View transactions associated with a Bitcoin wallet.
- Address Generation: Generate an unused Bitcoin address for receiving payments.


## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo.git
```
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Create a .env file in the root directory and add your BlockCypher API key:
```bash
BLOCKCYPHER_API_KEY=your-api-key
```

4. Run the CLI
```bash
npm start
```
## Usage/Examples

```lua
Usage: bitcoin-wallet-cli [options]

Options:
  -V, --version                  output the version number
  -c, --create <name>            Create a new wallet with the given name
  -i, --import <name> <mnemonic> Import a wallet with the given name and mnemonic
  -l, --list                     List all wallets
  -b, --balance <name>           Get the balance of a wallet
  -t, --transactions <name>      Get transactions of a wallet
  -a, --address <name>           Generate an unused address for a wallet
  -h, --help                     display help for command

```


## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request with your proposed changes.

