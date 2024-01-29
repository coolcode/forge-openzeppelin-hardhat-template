import { expect } from "chai";
import { ethers } from "hardhat";

describe("Token", () => {
  it("Should return name Token", async () => {
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();

    expect(await token.name()).to.equal("Token");
  });
});