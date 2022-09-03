import { ethers } from "hardhat";

async function main() {
  const baseTokenURI = "ipfs://QmPz4f9RY2pwgiQ34UrQ8ZtLf31QTTS8FSSJ9GCWvktXtg/"; 
  // Get contract that we want to deploy
  const contractFactory = await ethers.getContractFactory("NFTCollectible");
  // Deploy contract with the correct constructor arguments
  const contract = await contractFactory.deploy(baseTokenURI);

   // Wait for this transaction to be mined
   await contract.deployed();

  console.log("NFTCollectible deployed to:", contract.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
