const UniswapV3Factory = artifacts.require("../contracts/UniswapV3Factory.sol");



module.exports = async function (deployer) {
  await deployer.deploy(
    UniswapV3Factory
  );
};
