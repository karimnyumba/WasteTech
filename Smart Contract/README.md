# WasteTech Token

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

WasteTech is an ERC20 token built on the Ethereum blockchain. It utilizes the OpenZeppelin library for standard token functionality, including burning, pausing, and ownership management.

## Features

- **Token Name**: WasteTech
- **Symbol**: WT
- **Total Supply**: 10,000,000 WT

## Prerequisites

- Solidity ^0.8.9
- OpenZeppelin Contracts v4.3.2

## Getting Started

1. Clone the repository: `git clone https://github.com/karimnyumba/WasteTech/Smart\Contract.git`

2. Install the required dependencies: 

```
pip install eth-brownie
```

## Contract Details

The WasteTech contract is a standard ERC20 token contract that extends the ERC20, ERC20Burnable, Pausable, and Ownable contracts from the OpenZeppelin library.

### Constructor

The contract constructor initializes the WasteTech token with the name "WasteTech" and the symbol "WT". It also mints 10,000,000 WT tokens and assigns them to the contract deployer.

### Pausing and Unpausing

The contract provides functions to pause and unpause token transfers. Only the contract owner can call these functions.

### Minting

The contract owner can mint additional WasteTech tokens by calling the `mint` function and specifying the recipient address and the amount to be minted.

### Token Transfers

Token transfers are automatically paused when the contract is paused, as implemented in the `_beforeTokenTransfer` function.

## Usage

1. Deploy the WasteTech contract to the Ethereum network using your preferred development environment.
2. Interact with the contract using a web3-enabled application or through the Ethereum network.






