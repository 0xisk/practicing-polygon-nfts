const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("MyNFT");
  const URI = "ipfs://QmTeANgmkRPcj3sXdN4t6QRyB8xLLhmhvLUf3kq3ZxpTWD"
  const WALLET_ADDRESS = "0x0178BB2EeADc0F1C8Cc1E4A9855Ea01cDd0447A2"
  const CONTRACT_ADDRESS = "0xC48517558f046BED0ba3267F6053897aD15D83C3"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});