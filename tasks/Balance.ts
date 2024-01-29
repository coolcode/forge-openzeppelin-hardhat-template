import { HardhatRuntimeEnvironment } from "hardhat/types/runtime"

export default async (
  params: { account: string },
  hre: HardhatRuntimeEnvironment
): Promise<void> => {
  const ethers = hre.ethers
  const accountIndex = params.account
  console.info("account index:", accountIndex)
  const accounts = await ethers.getSigners()
  const address = await accounts[accountIndex].getAddress()
  const balance = await ethers.provider.getBalance(address)

  console.info(`Balance account ${address}: ${balance}`)
}