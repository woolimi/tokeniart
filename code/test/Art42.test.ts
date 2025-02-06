import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Art42", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployArt42() {
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Art42 = await hre.ethers.getContractFactory("Art42");
    const art42 = await Art42.deploy();

    return { art42, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should be able to mint", async function () {
      const { art42 } = await loadFixture(deployArt42);

      await art42.mint("https://ipfs.io/ipfs/bafkreigbhejjnjm3fodo4cxehv4yqlmwcn4gezirpklwxfkji6qxsmzyoq");
      await expect(await art42.tokenId()).to.equal(1);
    });

    it("Only owner can mint", async function () {
      const { art42, otherAccount } = await loadFixture(deployArt42);

      await expect(
        art42
          .connect(otherAccount)
          .mint("https://ipfs.io/ipfs/bafkreigbhejjnjm3fodo4cxehv4yqlmwcn4gezirpklwxfkji6qxsmzyoq"),
      ).to.be.revertedWithCustomError(art42, "OwnableUnauthorizedAccount");
    });
  });
});
