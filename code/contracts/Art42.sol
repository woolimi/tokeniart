// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Art42 is ERC721URIStorage, Ownable {
    /*
     ** Increase token id every time a new token is minted.
     ** This makes our token "unique".
     */
    uint256 public tokenId;

    /*
     ** Initializes the contract with the name and symbol.
     */
    constructor() ERC721("Art42", "ART42") Ownable(msg.sender) {
        tokenId = 0;
    }

    /*
     ** Mint a new NFT
     ** onlyOwner: only the owner of the contract can call this function
     */
    function mint(string memory tokenURI) public onlyOwner returns (uint256) {
        uint256 newItemId = tokenId;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenId += 1;
        return newItemId;
    }
}
