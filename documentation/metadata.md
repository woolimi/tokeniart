---
outline: deep
---

# Metadata

The Art42 token metadata follows the structure below:

```json
{
  "name": "Art42-04",
  "external_url": "https://ipfs.io/ipfs/QmaYvzXAJDcrnKX9Qu8xBQW8QGjXGKLtF6P2j2EULKnUB7",
  "image": "ipfs://QmaYvzXAJDcrnKX9Qu8xBQW8QGjXGKLtF6P2j2EULKnUB7",
  "attributes": [
    {
      "trait_type": "Artist",
      "value": "wpark"
    },
    {
      "trait_type": "Name",
      "value": "Victoria"
    },
    {
      "trait_type": "Lv",
      "value": "19"
    }
  ]
}
```

Explanation:

- name: The name of the NFT, in this case, "Art42-04".
- external_url: A URL linking to the external resource or webpage associated with the NFT.
- image: The IPFS link to the image representing the NFT.
- attributes: An array of attributes providing additional information about the NFT. In this example, it includes:
  - Artist: Creator's name
  - Name: The character's name
  - Lv: The character's level

## About IPFS

`IPFS` (InterPlanetary File System) is a **decentralized storage protocol** that allows for the distribution of data across a network of nodes. It uses content-addressing to uniquely identify each file, ensuring that the data is immutable and securely stored. This protocol enhances the security and accessibility of data, making it an ideal solution for storing and retrieving NFT metadata and associated files.
