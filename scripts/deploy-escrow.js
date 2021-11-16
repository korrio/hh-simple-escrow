const hre = require("hardhat");

async function main() {
    const SimpleEscrow = await hre.ethers.getContractFactory("SimpleEscrow");
    const PAYEE = "0x3ad11FCbb6f34AA9e7991A77e9109Ca5Fc92c6ef";
    const ARBITRATOR = "0x2f80ea978B5D86103FF581c5eEFc4B527824f15d";
    const escrow = await SimpleEscrow.deploy(PAYEE, ARBITRATOR, "This is agreement");

    await escrow.deployed();

    console.log("SimpleEscrow deployed to:", escrow.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });