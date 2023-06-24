from brownie import (
    accounts,
    network,
    config,
)
from web3 import Web3

LOCAL_DEVELOPMENT_NETWORKS = ["development", "local-ganache"]
OPENSEA_URL = "https://testnets.opensea.io/assets/goerli/{}/{}"


def get_account(index=None, account_name=None):
    if network.show_active() in LOCAL_DEVELOPMENT_NETWORKS:
        return accounts[0]
    if index:
        return accounts[index]
    if account_name:
        return accounts.load(account_name)
    return accounts.add(config["wallets"]["from_key"])
