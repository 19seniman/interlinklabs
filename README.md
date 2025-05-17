# MultiNetwork Auto Transaction Bot

Automated wallet creation, faucet claiming, and token transfer bot for Somnia and Nexus Networks.

## Features

- Multi-network support (Somnia, Nexus)
- Automatic wallet generation
- Faucet claiming for Somnia network
- Automated token transfers
- Wallet management and storage
- Transaction tracking with explorer links

## Networks Supported

1. Somnia Testnet
   - RPC: https://dream-rpc.somnia.network
   - Chain ID: 50312
   - Symbol: STT
   - Explorer: https://somnia-testnet.socialscan.io

2. Nexus Network
   - RPC: https://rpc.nexus.xyz/http
   - Chain ID: 393
   - Symbol: NEX
   - Explorer: https://explorer.nexus.xyz

## Installation

1. Clone the repository:
```bash
git clone https://github.com/19seniman/evm-auto-tx.git
cd evm-auto-tx
```

2. Install dependencies:
```bash
npm install
```

3. Create a `pk.txt` file in the root directory and add your private key: `0x......`


## Usage

1. Start the bot:
```bash
node index.js
```

2. Choose from available options:
   - Generate Wallets & Claim Faucet (Somnia)
   - Transfer STT Tokens (Somnia)
   - Transfer NEX Tokens (Nexus)

3. Follow the prompts to:
   - Specify number of wallets to generate
   - Set token amount per transaction
   - Define number of transactions

## Generated Files

- `wallets.txt`: Contains generated wallet addresses and private keys
- Format: `address:privateKey`

## Configuration

All network configurations are defined in the code:
- RPC endpoints
- Chain IDs
- Network symbols
- Explorer URLs
