from brownie import WasteTech
from scripts.helpful_scripts import get_account

AMOUNT = 10000000000000000000


def deployWaste():
    account = get_account(account_name="rastas")
    waste = WasteTech.deploy({"from": account})
    print("Yeay waste deployed")
    print(waste.balanceOf(account))
    return waste


def sendWasteToken(amount, wallet, waste):
    transfer_tx = waste.transfer(wallet, amount)
    transfer_tx.wait(1)
    print("transfer success....")


def storeToIpfs():


def main():
    waste = deployWaste()
    account = get_account(index=1)
    sendWasteToken(AMOUNT, account, waste)
