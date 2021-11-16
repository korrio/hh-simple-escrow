require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-ethers');
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const INFURA_API_KEY = "a1fb8d533f364aac803c06975ce3c7f8";
const privateKey1 = "7c669919b3221c21282273f5d7e8993e554ea3cb1c52b6d7ec7661910f4a0b0d";
const privateKey2 = "7c669919b3221c21282273f5d7e8993e554ea3cb1c52b6d7ec7661910f4a0b0d";


// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "SKMJ2SAXCJ2D1NJQYFEEP1Y4GHXWD2PM3Y"
  },
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [privateKey1]
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [privateKey1]
    },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: [privateKey1]
    }
  },
  solidity: "0.8.9"
};