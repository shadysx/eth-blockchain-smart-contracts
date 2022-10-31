const hre = require("hardhat");

async function main() {
    //Owner of the contract = 0xb80118Ba48D061841118cB6dA79e1EF2ACD862E4
    const contractAddress = "0x2703372EC226B3D5EC671Ee361aE0E7dFB590115";

    const Main = await hre.ethers.getContractAt("Main", contractAddress)


    //Contract balance,
    const provider = hre.ethers.provider;
    let contractBalance = await provider.getBalance(contractAddress);
    contractBalance = hre.ethers.utils.formatEther(contractBalance);
    console.log("Contract Balance = ", contractBalance);

    //Creator of the contract, not the actual contract balance
    const owner = await Main.getOwner();
    let ownerBalance = await Main.getOwnerBalance();
    ownerBalance = hre.ethers.utils.formatEther(ownerBalance);



  console.log("Owner:", owner);
  console.log("Owner balance:", ownerBalance);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
