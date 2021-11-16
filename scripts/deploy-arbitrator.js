const hre = require("hardhat");

async function main() {
  const SimpleArbitrator = await hre.ethers.getContractFactory("SimpleCentralizedArbitrator");
  const arbitrator = await SimpleArbitrator.deploy();

  await arbitrator.deployed();

  console.log("SimpleArbitrator deployed to:", arbitrator.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
