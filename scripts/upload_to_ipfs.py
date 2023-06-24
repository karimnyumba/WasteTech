from pathlib import Path
import os
import requests


def upload_to_ipfs(file_path):
    ##opening that file path passed as binary
    with Path(file_path).open("rb") as fp:
        image_file = fp.read()
        end_point = "/api/v0/add"
        ##ipfs_node obtained by running ipfs daemon to start your node
        ipfs_node = "http://127.0.0.1:5001"
        ##posting the image file to ipfs
        response = requests.post(ipfs_node + end_point, files={"file": image_file})
        ##grabbing the hash from the ipfs response.
        ipfs_hash = response.json()["Hash"]
        ##renaming ./metadata/goerli/0-pug.json to 0-pug.json
        image_file_name = file_path.split("/")[-1:][0]
        ##getting the image uri
        image_uri = f"https://ipfs.io/ipfs/{ipfs_hash}?filename={image_file_name}"
        print(image_uri)
        return image_uri


def main():
    upload_to_ipfs()
