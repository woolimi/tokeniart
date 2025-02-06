![Art42 NFT](./documentation/nft.jpeg)

# Art42

This project, known as **Tokeniart**, is part of the Ecole 42 curriculum. It aims to deepen understanding of the blockchain ecosystem by creating innovative digital assets.

### NFT on Ethereum network

I chose Ethereum and Solidity for creating NFTs due to their proven reliability and strong ecosystem. Ethereum is the leading platform for decentralized applications, offering robust security and widespread adoption. Solidity, Ethereum's purpose-built language, is tailored for writing smart contracts, making NFT development efficient and effective. Additionally, the active community support and upcoming Ethereum 2.0 upgrades ensure scalability and future-proofing, making this combination ideal for creating valuable and secure NFTs.

## Overview

`ART42` is an **NFT** developed using **Solidity** and the **Hardhat** framework. The NFT token represents ownership of a art, with each token containing an image along with attributes such as the author.

## Key Decisions and Reasoning

### Hardhat

Hardhat provides a flexible and powerful environment for Solidity development. It offers excellent debugging tools, plugin support, and an easy setup for testing and deployment. This made it the ideal choice to streamline the development process.

### IPFS and Pinata

**IPFS** (InterPlanetary File System) is a decentralized storage protocol that ensures data is distributed across a network of nodes, rather than being held in a single centralized server. This offers several key benefits for the Art42 NFT project:

- Decentralization: Enhances security and resilience by preventing data from being a single point of failure.
- Immutability: Once uploaded, the data cannot be altered, ensuring the integrity and authenticity of the NFT content over time.
- Content Addressing: Data is accessed via a unique hash, making it easy to verify and retrieve specific files.

**Pinata** is a popular IPFS pinning service that ensures your files remain available and accessible over time.

## Related Links

- [ART42 documentation](https://woolimi.github.io/tokeniart)
- [Sepolia ART42 Contract](https://sepolia.etherscan.io/address/0x73dF9A3536A67D159C7A6526734FfD956475cb79)
- [ART42 Opensea testnet](https://testnets.opensea.io/collection/art42)
