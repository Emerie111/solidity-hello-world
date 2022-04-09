const main = async () => {
    const helloworldContractFactory = await hre.ethers.getContractFactory("HelloWorld");
    const helloworldContract = await helloworldContractFactory.deploy("Emerie");
    await helloworldContract.deployed();
    console.log("Contract deployed to:", helloworldContract.address);
  };
  
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();